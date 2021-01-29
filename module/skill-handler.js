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

            if(skill.activeState === false) {
                console.log(game.i18n.localize('WC5E.UI.Actions.CastSpell')+' "'+readableSkill+'"');

                let tokenId = speaker.token;
                let token = canvas.tokens.get(tokenId);

                let updateObject = {};
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

                token.update(updateObject);

                console.log(token);
            }
            else {

            }

        }
        else {

        }
    });

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
