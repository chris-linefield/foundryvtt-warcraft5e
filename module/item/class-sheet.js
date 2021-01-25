/*
 * Class-Sheet for Compendium
 */
export class WcClassSheet extends ItemSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:   ["warcraft5e", "sheet", "class"],
            template:  "systems/warcraft5e/templates/item/class-sheet.html",
            width:     850,
            height:    800,
            resizable: false
        });
    }
}
