/*
 * Spell-Sheet for Compendium
 */
export class WcSkillSheet extends ItemSheet {

    //---- OVERRIDES

    /**
     * sets the default properties for the sheet
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes:   ["warcraft5e", "sheet", "skill"],
            template:  "modules/warcraft5e/templates/item/skill-sheet.html",
            width:     650,
            resizable: false
        });
    }
}