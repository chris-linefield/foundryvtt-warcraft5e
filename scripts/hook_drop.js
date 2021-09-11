
//---- ON INITIALIZATION

Hooks.on('preCreateItem', function(document, data, options, userId) {
    if (data.flags.wc5e && data.flags.wc5e.type === 'background') {
        let targetActor = game.actors.get(document.parent.id);
        targetActor.update({['data.details.background'] : data});
        return false;
    }
});
