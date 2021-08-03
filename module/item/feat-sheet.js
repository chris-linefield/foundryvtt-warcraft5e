/*
 * Spell-Sheet for Compendium
 */
export class WcFeatSheet extends ItemSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:   ["warcraft5e", "sheet", "feat"],
            template:  "modules/warcraft5e/templates/item/feat-sheet.html",
            width:     650,
            resizable: false
        });
    }
}