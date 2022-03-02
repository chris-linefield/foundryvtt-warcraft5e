export class WcSkillHandler {

    constructor(type) {
        this.type = type;
    }

    //---- SETTER

    set type(val) {
        if(['spell', 'skill'].includes(val)) {
            this._type = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for skillHandler. Must be either "skill" or "spell".');
        }
    }

    set skillName(val) {
        this._skillName = val;
    }

    set actor(val) {
        if(val instanceof(Actor)) {
            this._actor = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+typeof(val)+'" used for "actor". Must be an instance of Actor().');
        }
    }

    set actorToken(val) {
        if(val instanceof(Token)) {
            this._actorToken = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+typeof(val)+'" used for "actorToken". Must be an instance of Token().');
        }
    }

    set isActive(val) {
        if(typeof(val) === "boolean") {
            this._isActive = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "isActive". Must be either true or false.');
        }
    }

    set range(val) {
        this._range = val;
    }

    set target(val) {
        if(['area', 'token', "multiToken"].includes(val)) {
            this._target = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "target". Must be either "area" or "token".');
        }
    }

    set canBeActivated(val) {
        if(typeof(val) === "boolean") {
            this._canBeActivated = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "canBeActivated". Must be either true or false.');
        }
    }

    set effects(val) {
        this._effects = val;
    }

    set targetEffects(val) {
        this._targetEffects = val;
    }

    set offensive(val) {
        if(['always', 'active', 'never'].includes(val)) {
            this._offensive = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "offensive". Must be "always", "active" or "never".');
        }
    }

    set releasable(val) {
        if(typeof(val) === "boolean") {
            this._releasable = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "releasable". Must be either true or false.');
        }
    }

    set dmgValues(val) {
        if(typeof(val) === "object" || val === null) {
            this._dmgValues = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "dmgValues". Must be an Object that represents lvl and dmg {"1":"1d8","5":"2d8", ...}.');
        }
    }

    set dmgType(val) {
        if(Array.isArray(val) || val === null) {
            this._dmgType = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "dmgType". Must be an Array of damage types e.g. ["magic","fire",...].');
        }
    }

    set dmgTo(val) {
        if(['hp'].includes(val)) {
            this._dmgTo = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "dmgTo". Must be "hp".');
        }
    }

    set debuffs(val) {
        if(Array.isArray(val) || val === null) {
            this._debuffs = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "debuffs". Must be an Array of Debuffs e.g. ["silence","stun",...].');
        }
    }

    set targetTokens(val) {
        if(Array.isArray(val) || val === null) {
            this._targetTokens = val;
        }
        else {
            console.error('>> Wc5e: wrong type "'+val+'" used for "targetTokens". Must be an Array of Token()-Instances.');
        }
    }

    //---- GETTER

    get type() {
        return this._type;
    }

    get skillName() {
        return this._skillName;
    }

    get actor() {
        return this._actor;
    }

    get actorToken() {
        return this._actorToken;
    }

    get isActive() {
        return this._isActive;
    }

    get range() {
        return this._range;
    }

    get target() {
        return this._target;
    }

    get canBeActivated() {
        return this._canBeActivated;
    }

    get effects() {
        return this._effects;
    }

    get targetEffects() {
        return this._targetEffects;
    }

    get offensive() {
        return this._offensive;
    }

    get releasable() {
        return this._releasable;
    }

    get dmgValues() {
        return this._dmgValues;
    }

    get dmgType() {
        return this._dmgType;
    }

    get dmgTo() {
        return this._dmgTo;
    }

    get debuffs() {
        return this._debuffs;
    }

    get targetTokens() {
        return this._targetTokens;
    }


    //---- METHODS

    /**
     * This Method handles the initial "use" call of the skill.
     */
    use() {
        //can the skill be activated (like a self buff)
        if(this.canBeActivated) {
            //activate skill if not yet done
            if(!this.isActive) {
                this.activate();
                return;
            }
            //deactivate the skill
            else {
                //can the skill be used offensively after activation?
                if(this.offensive === 'active') {
                    //if the skill is releasable we need a choice
                    if(this.releasable === true) {
                        let dialog = new Dialog({
                            title: "Select a way to end the spell",
                            content: "<p>Do you wish to release the skill or use it for offense?</p>"
                        });
                        dialog.render(true);
                    }
                    else {
                        this.useOffensiveSkill();
                        this.deactivate();
                    }
                }
                else if(this.releasable === true) {
                    //prompt the user to confirm the release of the skill
                    Dialog.confirm({
                        title: game.i18n.localize('WC5E.UI.Phrases.'+capitalizeFirstLetter(this.type)) + ' ' + game.i18n.localize('WC5E.UI.Dialogs.CancelSkill'),
                        content: `
                            <p>`+game.i18n.localize('WC5E.UI.Dialogs.CancelSkillDescription')+`</p>
                        `,
                        yes: () => this.deactivate(),
                        defaultYes: false
                    });
                }
            }
        }
        else {
            if(this.target === 'area') {

                game.needsClick = true;
                ui.notifications.info("Please select an area.");

                //TODO: WcMouseHandler
                let original_mousedown = MouseInteractionManager.prototype._handleClickLeft;
                var targetEffects = this.targetEffects;
                var skillName = this.skillName;
                MouseInteractionManager.prototype._handleClickLeft = function(event) {
                    if(game.needsClick === true) {
                        game.needsClick = false;
                        console.log(targetEffects);

                        Token.create({
                            name: skillName+" Area",
                            displayName: 40,
                            x: event.data.origin.x,
                            y: event.data.origin.y,
                            img: "modules/warcraft5e/res/pics/token/effect.png",
                            hidden: false,
                            lightAnimation: {
                                intensity: targetEffects.animation.intensity,
                                speed: targetEffects.animation.speed,
                                type: targetEffects.animation.type
                            },
                            lightColor: targetEffects.animation.color[0],
                            lightAlpha: targetEffects.animation.color[1],
                            brightLight: targetEffects.light.bright,
                            disposition: 0
                        }).then(function(token) {
                            console.log(token);
                        });
                    }
                    return original_mousedown.apply(this, arguments);
                }
            }

            this.applyDebuffs();
        }
    }


    /**
     * This Method appies all the debuffs specified
     */
    applyDebuffs() {
        if(!this.verifyTargets()) {
            return true;
        }

        for(let debuff in this.debuffs) {
            for(let enemyToken of this.targetTokens) {
                if(debuff === 'silence') {
                    debuff = 'silenced';
                }
                let targetActor = game.actors.get(enemyToken.actor._id);
                targetActor.update({['data.effects.negative.'+debuff] : true});
            }
        }
    }


    /**
     * This Method handles the activation of certain skills with an active state (like "Produce Flame")
     */
    activate() {
        //FIXME: Fake Token erstellen und an das Haupt-Token knüpfen - damit die Sichtbarkeit vom Token nicht überschrieben wird
        this.toggleEffects('on');
        this.actor.update({['data.spells.'+this.skillName+'.activeState']:!this.isActive});
    }


    /**
     * This Method handles the deactivation of skills with an active state and triggers other actions if needed
     */
    deactivate() {
        this.toggleEffects('off');
        this.actor.update({['data.spells.'+this.skillName+'.activeState']:!this.isActive});
    }


    /**
     * This Method verifies the selected targets
     *
     * @return    returns a notification error if one of the specified targets is invalid
     */
    verifyTargets() {
        //no token targeted
        if(this.targetTokens.length === 0) {
            return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.CastSpellInvalidTarget'));
        }
        //verify that exactly one hostile token is specified
        if(this.target === "token" && this.targetTokens.length !== 1 || this.targetTokens[0].data.disposition === 1) {
            return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.CastSpellInvalidTarget'));
        }
        //verify the valid distance to every target token
        for(let enemyToken of this.targetTokens) {
            let distance = this.getDistance(this.actorToken, enemyToken);
            if(distance > this.range) {
                return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.OutOfRange')+' '+distance+' / '+this.range+' '+game.i18n.localize('WC5E.UI.Units.Ft'));
            }
        }
        return true;
    }


    /**
     * This method calculates the dmg based on the actor's attributes
     *
     * @return string    dmg to be used - in format "3d8"
     */
    calculateDmgToUse() {
        var actorData = this.actor.data.data;
        let dmg       = this.dmgValues;
        var dmgToUse  = null;

        //get the correct entry for the actual level
        for(let level in dmg) {
            if(dmg[level]) {
                if(parseInt(level) > parseInt(actorData.core.lvl)) {
                    continue;
                }
                dmgToUse = dmg[level];
            }
        }

        return dmgToUse;
    }


    /**
     * This method deals the damage to the targets
     */
    appylyDamage() {

    }


    /**
     * This method triggers the damage of the skill
     */
    useOffensiveSkill() {

        if(!this.verifyTargets()) {
            return false;
        }

        var enemyActor = game.actors.get(this.targetTokens[0].actor._id);
        var enemyData  = enemyActor.data.data;

        if(this.dmgValues) {

            let dmgToUse = this.calculateDmgToUse();

            //roll the dice!
            let roll = new Roll(dmgToUse);
            roll.evaluate();
            roll.toMessage();

            this.applyDamage();

            //remove hp from enemy
            let enemyHp = enemyData.core.hp.value;
            enemyHp -= roll.total;

            //save the new hp on the actor
            enemyActor.update({['data.core.'+this.dmgTo+'.value'] : enemyHp});
        }
    }


    /**
     * This method handles the activation and deactivation of light and animation effects on the actorToken
     *
     * @param string mode    "on" or "off"
     */
    toggleEffects(mode) {
        var updateObject = {};
        var actorData    = this.actor.data.data;

        //restore the default values affected by the spell
        if(this.effects) {
            //light effects
            if(this.effects.light) {
                if(this.effects.light.dim) {
                    updateObject.dimLight = (mode === 'on') ? this.effects.light.dim : actorData.light.dim;
                }
                if(this.effects.light.bright) {
                    updateObject.brightLight = (mode === 'on') ? this.effects.light.bright : actorData.light.bright;
                }
            }
            //sight effects
            if(this.effects.sight) {
                if(this.effects.sight.dim) {
                    updateObject.dimSight = (mode === 'on') ? this.effects.sight.dim : actorData.vision.dim;
                }
                if(this.effects.sight.bright) {
                    updateObject.brightSight = (mode === 'on') ? this.effects.sight.bright : actorData.vision.bright;
                }
            }
            //animation
            if(this.effects.animation) {

                if(mode === 'on') {
                    updateObject.lightAnimation = {
                        intensity: this.effects.animation.intensity,
                        speed: this.effects.animation.speed,
                        type: this.effects.animation.type
                    };

                    updateObject.lightColor = this.effects.animation.color[0];
                    updateObject.lightAlpha = this.effects.animation.color[1];
                }
                else {
                    updateObject.lightAnimation = {
                        type: null
                    };
                }
            }

            //update token
            this.actorToken.update(updateObject);
        }
    }

    getDistance(sourceToken, targetToken) {

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

}

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
    if(!skill || skill.usable === false) {
        return ui.notifications.error(game.i18n.localize('WC5E.UI.Actions.CastSpellError')+' "'+readableSkill+'"');
    }

    //actor token
    let tokenId      = speaker.token;
    let token        = canvas.tokens.get(tokenId);

    //retrieve the spell data from the compendium
    let pack = game.packs.get('warcraft5e.spells');
    pack.getEntity(skill.node).then(function(value) {
        let spellProps = value.data.data.properties;

        console.log(spellProps);

        let skillHandler = new WcSkillHandler('spell');
        skillHandler.skillName      = skillName;
        skillHandler.actor          = actor;
        skillHandler.actorToken     = token;
        skillHandler.isActive       = (skill.activeState) ? true : false;
        skillHandler.range          = spellProps.range;
        skillHandler.dmgType        = (spellProps.dmg) ? spellProps.dmg.type : null;
        skillHandler.dmgValues      = (spellProps.dmg) ? spellProps.dmg.values : null;
        skillHandler.dmgTo          = (spellProps.dmg) ? spellProps.dmg.to : null;
        skillHandler.target         = (spellProps.areaSelect) ? 'area' : 'token';
        skillHandler.canBeActivated = (spellProps.activeState) ? true : false;
        skillHandler.effects        = spellProps.effects;
        skillHandler.targetEffects  = spellProps.targetEffects;
        skillHandler.debuffs        = (spellProps.debuffs) ? spellProps.debuffs : null;
        skillHandler.releasable     = (spellProps.releasable) ? true : false;
        skillHandler.offensive      = (spellProps.offensive) ? spellProps.offensive : 'never';
        skillHandler.targetTokens   = Array.from(game.user.targets);
        skillHandler.use();

        console.log(skillHandler);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}