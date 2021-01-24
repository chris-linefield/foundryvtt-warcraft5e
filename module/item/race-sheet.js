console.log('>> Wc5e: Initializing Item Sheet');

/*
 * Item Sheet
 */
export class WcRaceSheet extends ItemSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:   ["warcraft5e", "sheet", "race"],
            template:  "systems/warcraft5e/templates/item/race-sheet.html",
            width:     850,
            height:    800,
            resizable: false
        });
    }
}