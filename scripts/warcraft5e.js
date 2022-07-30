//---- IMPORT

import {WcCharacterSheet} from "../module/actor/character-sheet.js";
import {WcNpcSheet} from "../module/actor/npc-sheet.js";
import {WcItemSheet} from "../module/item/item-sheet.js";

import * as WcSkillHandler from "../module/skill-handler.js";
import * as WcMigrationHandler from "../module/migration-handler.js";

import {} from "./config.js";

import {} from "./hook_init.js";
import {} from "./hook_drop.js";
import {} from "./config_handlebars.js";

//---- ON READY

Hooks.once("ready", async function () {
    //WcMigrationHandler.migrate();
});