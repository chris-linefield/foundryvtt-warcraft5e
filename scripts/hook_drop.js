
import RaceSelector from "../module/actor/apps/race-selector.js";

//---- ON INITIALIZATION

Hooks.on('preCreateItem', function (document, data, options, userId) {
    if (data.flags.wc5e && data.flags.wc5e.type === 'background') {

        //Check for Variants
        if (typeof (data.flags.wc5e.entries) !== 'undefined') {

        }

        let targetActor = game.actors.get(document.parent.id);
        targetActor.update({['data.details.background']: data});
        return false;
    } else if (data.flags.wc5e && data.flags.wc5e.type === 'race') {
        RaceSelector.prototype.replaceRace(document.parent.id, data._id);
        return false;
    }
});