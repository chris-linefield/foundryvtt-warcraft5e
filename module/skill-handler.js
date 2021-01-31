/*
 * Skill handling methods for progressing skill macros
 */
export function castSpell(skillName) {
    const speaker = ChatMessage.getSpeaker();
    let actor;

    //This is the actual player actor
    actor = game.actors.get(speaker.actor);

    //Fallback - use the active (clicked) Token (as GM mostly)
    if(!actor && speaker.token) {
        actor = game.actors.tokens[speaker.token];
    }

    //No token specified - exit
    if(!actor) {
        return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.NoToken'));
    }

    let readableSkill = game.i18n.localize('WC5E.Spells.'+capitalizeFirstLetter(skillName)+'.Label');

    //check if the actor can use the ability - exit otherwise
    let skill = actor.data.data.spells[skillName];
    if(skill.usable === false) {
        return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.CastSpellError')+' "'+readableSkill+'"');
    }

    //retrieve the spell data from the compendium
    let pack  = game.packs.get('warcraft5e.spells');
    pack.getEntity(skill.node).then(function(value) {

        let spellProps = value.data.data.properties;

        //Does this spell have an active state?
        if(spellProps.activeState === true) {

            let tokenId      = speaker.token;
            let token        = canvas.tokens.get(tokenId);
            let updateObject = {};

            //skill has not yet been activated
            if(skill.activeState === false) {

                //activate the effects of the active state
                if(spellProps.effects) {
                    //light effects
                    if(spellProps.effects.light) {
                        if(spellProps.effects.light.dim) {
                            updateObject.dimLight = spellProps.effects.light.dim;
                        }
                        if(spellProps.effects.light.dim) {
                            updateObject.brightLight = spellProps.effects.light.bright;
                        }
                    }
                    //sight effects
                    if(spellProps.effects.sight) {
                        if(spellProps.effects.sight.dim) {
                            updateObject.dimSight = spellProps.effects.sight.dim;
                        }
                        if(spellProps.effects.sight.dim) {
                            updateObject.brightSight = spellProps.effects.sight.bright;
                        }

                    }
                    //animation
                    if(spellProps.effects.animation) {
                        updateObject.lightAnimation = {
                            intensity: spellProps.effects.animation.intensity,
                            speed: spellProps.effects.animation.speed,
                            type: spellProps.effects.animation.type
                        };

                        updateObject.lightColor = spellProps.effects.animation.color[0];
                        updateObject.lightAlpha = spellProps.effects.animation.color[1];
                    }
                }

                //save the active state on the actor
                actor.update({['data.spells.'+skillName+'.activeState']:true});
            }
            //skill is already active
            else {
                var actorData = actor.data.data;

                //restore the default values affected by the spell
                if(spellProps.effects) {
                    //light effects
                    if(spellProps.effects.light) {
                        if(spellProps.effects.light.dim) {
                            updateObject.dimLight = actorData.light.dim;
                        }
                        if(spellProps.effects.light.bright) {
                            updateObject.brightLight = actorData.light.bright;
                        }
                    }
                    //sight effects
                    if(spellProps.effects.sight) {
                        if(spellProps.effects.sight.dim) {
                            updateObject.dimSight = actorData.vision.dim;
                        }
                        if(spellProps.effects.sight.bright) {
                            updateObject.brightSight = actorData.vision.bright;
                        }
                    }
                    //animation
                    if(spellProps.effects.animation) {
                        updateObject.lightAnimation = {
                            type: null
                        };
                    }
                }

                //can the spell be used offensively after activation?
                if(spellProps.offensive === 'active') {
                    let target       = canvas.tokens;
                    let enemyTokens  = Array.from(game.user.targets);

                    //no token targeted
                    if(enemyTokens.length === 0) {
                        return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.CastSpellInvalidTarget'));
                    }

                    //verify that exactly one hostile token is specified
                    if(spellProps.target === "single" && enemyTokens.length !== 1 || enemyTokens[0].data.disposition === 1) {
                        return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.CastSpellInvalidTarget'));
                    }

                    var enemyToken = enemyTokens[0];
                    let distance   = getDistance(token, enemyToken);

                    if(distance > spellProps.attackRange) {
                        return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.OutOfRange')+' '+distance+' / '+spellProps.attackRange+' '+game.i18n.localize('WC5E.UI.Units.Ft'));
                    }

                    var enemyActor = game.actors.get(enemyToken.actor._id);
                    var enemyData  = enemyActor.data.data;

                    if(spellProps.dmg) {
                        let dmg     = spellProps.dmg;

                        var dmgToUse = null;
                        //get the correct entry for the actual level
                        for(let level in dmg) {
                            if(parseInt(level) > parseInt(actorData.core.lvl)) {
                                continue;
                            }
                            dmgToUse = dmg[level];
                        }

                        //roll the dice!
                        let roll = new Roll(dmgToUse);
                        roll.evaluate();
                        roll.toMessage();

                        //remove hp from enemy
                        let enemyHp = enemyData.core.hp.value;
                        enemyHp -= roll.total;

                        //save the new hp on the actor
                        enemyActor.update({'data.core.hp.value' : enemyHp});
                    }
                }
            }

            //save the active/inactive state on the actor
            actor.update({['data.spells.'+skillName+'.activeState'] : !skill.activeState});
            token.update(updateObject);

        }
        else {

        }
    });

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * method to calculate distance between two tokens (in feet)
 */
function getDistance(sourceToken, targetToken) {

    const ray      = new Ray(sourceToken.center, targetToken.center);
    const segments = [{ray}];

    //calculate ground distance
    let groundDistance = canvas.grid.measureDistances(segments,{
        gridSpaces : true
    })[0];

    //get elevations (if one of the tokens is flying)
    let actorElevation  = sourceToken.data.elevation;
    let targetElevation = targetToken.data.elevation;

    //if the tokens don't have the same elevation - then use it for calculation
    if(targetElevation !== actorElevation) {
        let h_diff = (targetElevation > actorElevation) ? targetElevation - actorElevation : actorElevation - targetElevation;
        let hyp    = Math.sqrt(Math.pow(h_diff,2) + Math.pow(groundDistance,2));
        return Math.floor(hyp);
    }
    //otherwise just return the distance
    else {
        return Math.floor(groundDistance);
    }
}

//getProperty(myObject, "path.to.property")
