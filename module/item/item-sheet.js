console.log('>> Wc5e: Initializing Item Sheet');

/*
 * Item Sheet
 */
export class WcItemSheet extends ItemSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:   ["warcraft5e", "sheet", "item"],
            template:  "systems/warcraft5e/templates/item/item-sheet.html",
            width:     560,
            height:    400,
            resizable: false
        });
    }
}