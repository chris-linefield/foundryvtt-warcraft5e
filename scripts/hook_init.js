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

        let pack = "warcraft5e.wc5e_items_weapons";
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

    //rolls malfunction / mishap
    libWrapper.register('warcraft5e', 'game.dnd5e.entities.Item5e.prototype.rollAttack', function (wrapped, ...args) {
        let result = wrapped(...args);
        let itemData = this.data;
        let mrmin = 0;
        let mrmax = 0;
        if (typeof (itemData.flags.wc5e) !== "undefined" &&
            typeof (itemData.flags.wc5e.mrmin) !== "undefined" &&
            typeof (itemData.flags.wc5e.mrmax) !== "undefined") {
            mrmin = itemData.flags.wc5e.mrmin;
            mrmax = itemData.flags.wc5e.mrmax;
        }
        result.then(roll => {
            if (roll !== null) {
                let rollResult = roll.terms[0].results[0].result;
                if (rollResult <= mrmax) {
                    ChatMessage.create({content: 'Oh no! MALFUNCTION! (' + mrmin + ' - ' + mrmax + ')'});
                    let tableName = 'Mishaps';
                    let gamePackage = game.packs.get("warcraft5e.wc5e_rolltables");
                    let rollTable = gamePackage.getDocument('02jo8OAWgsD6E0hi').then(table => {
                            let result = table.draw();
                        }
                    )
                }
            }
        });
        return result;
    });

    //splits damage types (like concussive) into their respective sub damage types
    libWrapper.register('warcraft5e', 'game.dnd5e.entities.Item5e.prototype.rollDamage', function (wrapped, ...args) {
        this.labels.damageTypes = this.labels.damageTypes.replace(/Concussive/i, "Concussive (Thunder, Bludgeoning)");
        let result = wrapped(...args);
        return result;
    });

    console.log(game);
    return preloadWc5eTemplates();
});