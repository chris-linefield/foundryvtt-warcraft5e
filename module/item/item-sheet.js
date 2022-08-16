console.log('>> Wc5e: Initializing Item Sheet');

export class ItemSheet5e extends dnd5e.applications.item.ItemSheet5e {
}

import {capitalizeFirstLetter} from "../util.js"

export class WcItemSheet extends ItemSheet5e {

    constructor(...args) {
        super(...args);

        let wcType = 'dnd5e';
        if (typeof (this.object.flags.wc5e) !== 'undefined' && typeof (this.object.flags.wc5e.type) !== 'undefined') {
            wcType = this.object.flags.wc5e.type;
            let classes = ['sheet', 'item'];
            if (wcType !== 'item' && wcType !== 'weapon') {
                classes.push('warcraft5e');
            } else {
                classes.push('dnd5e');
            }
            this.options.classes = classes;
            this.options.resizable = false;
        }

        if (wcType === 'race' || wcType === 'class' || wcType === 'background') {
            this.options.width = this.position.width = 850;
            this.options.height = this.position.height = 800;
        } else if (wcType === 'feat' || wcType === "talent") {
            this.options.height = this.position.height = null;
        } else if (wcType === 'rule') {
            this.options.width = this.position.width = 850;
            this.options.height = this.position.height = null;
        }
    }

    get template() {
        let wcType = (typeof (this.object.flags.wc5e) !== 'undefined') ? this.object.flags.wc5e.type : null;
        if (this.object.type === 'weapon') {
            wcType = 'item';
        }
        if (wcType !== null) {
            if (wcType === 'talent') {
                wcType = 'feat';
            }
            return `modules/warcraft5e/templates/item/${wcType}-sheet.html`;
        } else {
            return `systems/dnd5e/templates/items/${this.object.type}.html`;
        }
    }

    /**
     * Add Malfunction Rate to Item Description
     */
    _getItemProperties() {

        let parentProps = super._getItemProperties();

        if (typeof (this.item.flags.wc5e) !== "undefined") {
            if (typeof (this.item.flags.wc5e.mrmin) !== "undefined" &&
                typeof (this.item.flags.wc5e.mrmax) !== "undefined" &&
                this.item.flags.wc5e.mrmin !== null &&
                this.item.flags.wc5e.mrmax !== null) {
                parentProps.unshift('MR (' + this.item.flags.wc5e.mrmin + ' - ' + this.item.flags.wc5e.mrmax + ')');
            }

            if (typeof (this.item.flags.wc5e.capacity) !== "undefined" && this.item.flags.wc5e.capacity !== null) {
                parentProps.unshift(game.i18n.localize("WC5E.UI.Capacity") + " " + this.item.flags.wc5e.capacity);
            }

            if (typeof (this.item.flags.wc5e.engineType) !== "undefined" && this.item.flags.wc5e.engineType !== '') {
                let engineType = capitalizeFirstLetter(this.item.flags.wc5e.engineType);
                parentProps.unshift(game.i18n.localize("WC5E.UI.Engine") + ": " + game.i18n.localize("WC5E.UI.Engines." + engineType));
            }
        }

        return parentProps;
    }
}

Items.registerSheet('warcraft5e', WcItemSheet, {makeDefault: true});