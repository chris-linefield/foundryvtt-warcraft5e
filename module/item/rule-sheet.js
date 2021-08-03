/*
 * Spell-Sheet for Compendium
 */
export class WcRuleSheet extends ItemSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:   ["warcraft5e", "sheet", "rule"],
            template:  "modules/warcraft5e/templates/item/rule-sheet.html",
            width:     650,
            resizable: false
        });
    }
}