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

        console.log(spellProps);

        //Does this spell have an active state?
        if(spellProps.activeState === true) {
            console.log(game.i18n.localize('WC5E.UI.Actions.CastSpell')+' "'+readableSkill+'"');
        }
        else {

        }
    });

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
