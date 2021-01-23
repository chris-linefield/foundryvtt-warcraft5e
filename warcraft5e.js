console.log('>> Wc5e: Initializing System');

//---- IMPORT

import { WcCharacterSheet } from "./module/actor/character-sheet.js";
import { WcItemSheet }      from "./module/item/item-sheet.js";
import { WcRaceSheet }      from "./module/item/race-sheet.js";


//---- ON INITIALIZATION

Hooks.once('init', async function() {


    console.log('>> Wc5e: registering Custom Sheets');

    //---- ACTORS

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("warcraft5e", WcCharacterSheet, {
        types: ["character"],
        makeDefault: true
    });

    //---- ITEMS

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("warcraft5e", WcItemSheet, {
        types: ["item"],
        makeDefault: true
    });

    Items.registerSheet("warcraft5e", WcRaceSheet, {
        types: ["race"],
        makeDefault: true
    });

});


//---- ON READY

Hooks.once("ready", async function() {
    console.log('ready');
});