
import RaceSelector from "../module/actor/apps/race-selector.js";

//---- ON INITIALIZATION

Hooks.on('preCreateItem', function (document, system, options, userId) {
    if (system.flags.wc5e && system.flags.wc5e.type === 'background') {

        //Check for Variants
        if (typeof (system.flags.wc5e.entries) !== 'undefined') {

        }

        let targetActor = game.actors.get(document.parent.id);
        targetActor.update({['system.details.background']: system});
        return false;
    } else if (system.flags.wc5e && system.flags.wc5e.type === 'race') {
        RaceSelector.prototype.replaceRace(document.parent.id, system._id);
        return false;
    }
});