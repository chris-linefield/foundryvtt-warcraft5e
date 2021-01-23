console.log('>> Wc5e: Initializing Character Sheet');

/*
 * Actor Sheet for player characters
 */
export class WcCharacterSheet extends ActorSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:  ["warcraft5e", "sheet", "actor"],
            template: "systems/warcraft5e/templates/actor/character-sheet.html",
            width:    672,
            height:   765
        });
    }
}
