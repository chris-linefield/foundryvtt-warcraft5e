
//---- IMPORT

import { WcCharacterSheet }     from "../module/actor/character-sheet.js";
import { WcItemSheet }          from "../module/item/item-sheet.js";
import { WcRaceSheet }          from "../module/item/race-sheet.js";
import { WcClassSheet }         from "../module/item/class-sheet.js";
import { WcSpellSheet }         from "../module/item/spell-sheet.js";
import { WcSkillSheet }         from "../module/item/skill-sheet.js";
import { WcRuleSheet }          from "../module/item/rule-sheet.js";
import { WcFeatSheet }          from "../module/item/feat-sheet.js";

import * as WcSkillHandler      from "../module/skill-handler.js";
import * as WcMigrationHandler  from "../module/migration-handler.js";

//---- ON INITIALIZATION

Hooks.once('init', async function() {

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

    game.system.entityTypes.Item.push("race");
    console.log(game.system.entityTypes);
});


//---- ON READY

Hooks.once("ready", async function() {
    //WcMigrationHandler.migrate();
});