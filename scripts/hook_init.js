//---- ON INITIALIZATION

import {preloadWc5eTemplates} from "./config_templates.js";
import ProficiencySelector from "../../../systems/dnd5e/module/apps/proficiency-selector.js";
import ActorSheet5e from "../../../systems/dnd5e/module/actor/sheets/base.js";
import RaceSelector from "../module/actor/apps/race-selector.js";

Hooks.once('init', async function () {
    game.dnd5e.entities.ActorSheet5e = ActorSheet5e;
    game.dnd5e.applications.ProficiencySelector = ProficiencySelector;

    if (typeof Babele !== 'undefined') {

        Babele.get().register({
            module: 'warcraft5e',
            lang: 'de',
            dir: 'lang/compendium/de'
        });
    }

    //Add warcraft items to proficiencySelector Search
    libWrapper.register('warcraft5e', 'game.dnd5e.applications.ProficiencySelector.getBaseItem', function (wrapped, ...args) {

        let identifier = args[0];
        let indexOnly = false;
        let fullItem = false;
        if (args[1]) {
            indexOnly = args[1].indexOnly;
            fullItem = args[1].fullItem;
        }

        let pack = "warcraft5e.wc5e_items";
        let [scope, collection, id] = identifier.split(".");
        if (scope && collection) pack = `${scope}.${collection}`;
        if (!id) id = identifier;

        // Return extended index if cached, otherwise normal index, guaranteed to never be async.
        if (indexOnly) {
            let cachedIndex = ProficiencySelector._cachedIndices[pack]?.get(id) ?? game.packs.get(pack)?.index.get(id);
            if (!cachedIndex) {
                return wrapped(...args);
            }
            return cachedIndex;
        }

        // Full Item5e document required, always async.
        if (fullItem) {
            return game.packs.get(pack)?.getDocument(id);
        }

        // Returned cached version of extended index if available.
        if (ProficiencySelector._cachedIndices[pack]) {
            let cachedIndex = ProficiencySelector._cachedIndices[pack].get(id);
            if (!cachedIndex) {
                return wrapped(...args);
            }
            return cachedIndex;
        }

        // Build the extended index and return a promise for the data
        const packObject = game.packs.get(pack);
        if (!packObject) return;

        return game.packs.get(pack)?.getIndex({
            fields: ["data.armor.type", "data.toolType", "data.weaponType"]
        }).then(index => {
            ProficiencySelector._cachedIndices[pack] = index;
            let check = index.get(id);
            if (typeof (check) !== 'undefined') {
                return index.get(id);
            }
            return wrapped(...args);
        });

        let result = wrapped(...args);
        return result;
    });

    //fix class names with spaces
    libWrapper.register('warcraft5e', 'game.dnd5e.entities.Actor5e.loadClassFeatures', function (wrapped, ...args) {
        let oldArgument = args[0].className;
        args[0].className = oldArgument.replace(/ /i, '');
        let result = wrapped(...args);
        return result;
    });

    //Add Events for the Character Sheet
    libWrapper.register('warcraft5e', 'game.dnd5e.entities.ActorSheet5e.prototype._onConfigMenu', function (wrapped, ...args) {

        let event = args[0];

        event.preventDefault();
        const button = event.currentTarget;
        let app;
        switch (button.dataset.action) {
            case "race":
                app = new RaceSelector(this.object);
                break;
        }
        app?.render(true);

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
    return preloadWc5eTemplates();
});