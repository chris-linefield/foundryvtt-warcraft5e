
//---- IMPORT

import { WcCharacterSheet }     from "../module/actor/character-sheet.js";
import { WcItemSheet }          from "../module/item/item-sheet.js";

import * as WcSkillHandler      from "../module/skill-handler.js";
import * as WcMigrationHandler  from "../module/migration-handler.js";

import { }     from "./class_features.js";
import { }     from "./config.js";
import {DND5E} from "../../../systems/dnd5e/module/config.js";

//---- ON INITIALIZATION

Hooks.once('init', async function() {

    if (typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'warcraft5e',
			lang: 'de',
			dir: 'lang/compendium/de'
		});
    }

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


//---- ON READY

Hooks.once("ready", async function() {
    //WcMigrationHandler.migrate();
});