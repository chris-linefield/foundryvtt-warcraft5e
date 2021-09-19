
//---- IMPORT

import { WcCharacterSheet }     from "../module/actor/character-sheet.js";
import { WcItemSheet }          from "../module/item/item-sheet.js";

import * as WcSkillHandler      from "../module/skill-handler.js";
import * as WcMigrationHandler  from "../module/migration-handler.js";

import { }     from "./config.js";
import {DND5E} from "../../../systems/dnd5e/module/config.js";
import { }     from "./hook_init.js";
import { }     from "./hook_drop.js";


//---- ON READY

Hooks.once("ready", async function() {
    //WcMigrationHandler.migrate();
});

Handlebars.registerHelper('isClassSkill', function (data, skill) {
    let classes = data.data.classes;

    let trueByClass = false;
    for(let c in classes) {
        let classIterator = classes[c].skills.choices.values();
        for (let skillName of classIterator) {
            if(skill === skillName) {
                trueByClass = true;
            }
        }
    }

    if(trueByClass) {
        return true;
    }

    return false;
});

Handlebars.registerHelper("increment", function(value) {
    return parseInt(value) + 1;
});