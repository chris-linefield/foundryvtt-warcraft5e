console.log('>> Wc5e: Initializing Item Sheet');

import ItemSheet5e from '../../../../systems/dnd5e/module/item/sheet.js';

export class WcItemSheet extends ItemSheet5e {

    constructor(...args) {
        super(...args);

        let wcType = 'dnd5e';
        if(typeof(this.object.data.data.wcType) !== 'undefined') {
            wcType = this.object.data.data.wcType;
            this.options.classes   = ['warcraft5e', 'sheet', 'item'];
            this.options.resizable = false;
        }

        if (wcType === 'race' || wcType === 'class') {
            this.options.width = this.position.width =  850;
            this.options.height = this.position.height = 800;
        }
    }

    get template() {
        let wcType = this.object.data.data.wcType;
        if(typeof(wcType) !== 'undefined') {
            return `modules/warcraft5e/templates/item/${wcType}-sheet.html`;
        }
        else {
            return `systems/dnd5e/templates/items/${this.item.data.type}.html`;
        }
    }
}

Items.registerSheet('warcraft5e', WcItemSheet, {makeDefault: true});