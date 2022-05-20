console.log('>> Wc5e: Initializing Item Sheet');

import ItemSheet5e from '../../../../systems/dnd5e/module/item/sheet.js';

export class WcItemSheet extends ItemSheet5e {

    constructor(...args) {
        super(...args);

        let wcType = 'dnd5e';
        if (typeof (this.object.data.flags.wc5e) !== 'undefined' && typeof (this.object.data.flags.wc5e.type) !== 'undefined') {
            wcType = this.object.data.flags.wc5e.type;
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
        let wcType = (typeof (this.object.data.flags.wc5e) !== 'undefined') ? this.object.data.flags.wc5e.type : null;
        if (this.object.type === 'weapon') {
            wcType = 'item';
        }
        if (wcType !== null) {
            if (wcType === 'talent') {
                wcType = 'feat';
            }
            return `modules/warcraft5e/templates/item/${wcType}-sheet.html`;
        } else {
            return `systems/dnd5e/templates/items/${this.item.data.type}.html`;
        }
    }

    /**
     * Add Malfunction Rate to Item Description
     */
    _getItemProperties(item) {

        let parentProps = super._getItemProperties(item);

        if (typeof (item.flags.wc5e) !== "undefined" &&
            typeof (item.flags.wc5e.mrmin) !== "undefined" &&
            typeof (item.flags.wc5e.mrmax) !== "undefined") {
            parentProps.unshift('MR (' + item.flags.wc5e.mrmin + ' - ' + item.flags.wc5e.mrmax + ')');
        }

        return parentProps;
    }
}

Items.registerSheet('warcraft5e', WcItemSheet, {makeDefault: true});