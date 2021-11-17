
//---- ON INITIALIZATION

Hooks.on('preCreateItem', function(document, data, options, userId) {
    if (data.flags.wc5e && data.flags.wc5e.type === 'background') {

        //Check for Variants
        if(typeof(data.flags.wc5e.variants) !== 'undefined') {

        }

        let targetActor = game.actors.get(document.parent.id);
        targetActor.update({['data.details.background'] : data});
        return false;
    }
    else if (data.flags.wc5e && data.flags.wc5e.type === 'race') {
        let targetActor = game.actors.get(document.parent.id);
        targetActor.update({['data.details.race'] : data});
        return false;
    }
});