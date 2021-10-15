
//---- ON INITIALIZATION

Hooks.once('init', async function() {

    if (typeof Babele !== 'undefined') {

        Babele.get().register({
            module: 'warcraft5e',
            lang: 'de',
            dir: 'lang/compendium/de'
        });
    }

    //fix class names with spaces
    libWrapper.register('warcraft5e', 'game.dnd5e.entities.Actor5e.loadClassFeatures', function (wrapped, ...args) {
        let oldArgument = args[0].className;
        args[0].className = oldArgument.replace(/ /i, '');
        let result = wrapped(...args);
        return result;
    });

    /*
    libWrapper.register('warcraft5e', 'game.dnd5e.entities.Item5e.prototype._preCreateEmbeddedDocuments', function (wrapped, data, options, user) {
        console.log('_preCreateEmbeddedDocuments');
        return;
        if (data.flags.wc5e.type === 'background') {
            console.log(this.parent.data.data);
            this.parent.data.data.details.background = data.name;
            console.log(this.parent);
            return;
        } else {
            let result = wrapped(data, options, userId);
            return result;
        }
    }, 'MIXED');

    libWrapper.register('warcraft5e', 'game.dnd5e.entities.Item5e.prototype._preCreate', function (wrapped, data, options, user) {
        console.log('_preCreate');
        if (data.flags.wc5e.type === 'background') {
            let targetActor = game.actors.get(this.parent.data._id);
            targetActor.update({['data.details.background'] : data.name});
            return;
        } else {
            let result = wrapped(data, options, userId);
            return result;
        }
    }, 'MIXED');

    libWrapper.register('warcraft5e', 'game.dnd5e.entities.Item5e.prototype._onCreate', function (wrapped, data, options, userId) {
        console.log('_onCreate');
        if (data.flags.wc5e.type === 'background') {
            return;
        } else {
            let result = wrapped(data, options, userId);
            return result;
        }
    }, 'MIXED');

    //---- ACTORS

    /*
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("dnd5e", WcCharacterSheet, {
        types: ["character"],
        makeDefault: true
    });

    //---- ITEMS

    Items.unregisterSheet("core", ItemSheet);


    Items.registerSheet("dnd5e", WcRaceSheet, {
        types: ["race"],
        makeDefault: true
    });

    Items.registerSheet("dnd5e", WcItemSheet, {
        types: ["item"],
        makeDefault: true
    });

    Items.registerSheet("dnd5e", WcClassSheet, {
        types: ["class"],
        makeDefault: true
    });

    Items.registerSheet("dnd5e", WcSpellSheet, {
        types: ["spell"],
        makeDefault: true
    });

    Items.registerSheet("dnd5e", WcSkillSheet, {
        types: ["skill"],
        makeDefault: true
    });

    Items.registerSheet("dnd5e", WcRuleSheet, {
        types: ["rule"],
        makeDefault: true
    });

    Items.registerSheet("dnd5e", WcFeatSheet, {
        types: ["feat"],
        makeDefault: true
    });

    game.WC5E = {
        skills : WcSkillHandler,
        needsClick : false,
        effectTokens : []
    };
    */

    //game.system.template.Itme.setFlag('wc5e', 'wcType', 'feat');
    console.log(game);
});