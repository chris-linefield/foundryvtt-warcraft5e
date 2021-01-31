/*
 * Spell-Sheet for Compendium
 */
export class WcSpellSheet extends ItemSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:   ["warcraft5e", "sheet", "spell"],
            template:  "systems/warcraft5e/templates/item/spell-sheet.html",
            width:     650,
            resizable: false
        });
    }
}
