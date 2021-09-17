console.log('>> Wc5e: Initializing Item Sheet');

import ItemSheet5e from '../../../../systems/dnd5e/module/item/sheet.js';

export class WcItemSheet extends ItemSheet5e {

    constructor(...args) {
        super(...args);

        let wcType = 'dnd5e';
        if(typeof(this.object.data.flags.wc5e) !== 'undefined') {
            wcType = this.object.data.flags.wc5e.type;
            this.options.classes   = ['warcraft5e', 'sheet', 'item'];
            this.options.resizable = false;
        }

        if (wcType === 'race' || wcType === 'class' || wcType === 'background') {
            this.options.width = this.position.width =  850;
            this.options.height = this.position.height = 800;
        }
        else if(wcType === 'feat' || wcType === "talent") {
            this.options.height = this.position.height = null;
        }
    }

    get template() {
        let wcType = this.object.data.flags.wc5e.type;
        if(typeof(wcType) !== 'undefined') {
            if(wcType === 'talent') {
                wcType = 'feat';
            }
            return `modules/warcraft5e/templates/item/${wcType}-sheet.html`;
        }
        else {
            return `systems/dnd5e/templates/items/${this.item.data.type}.html`;
        }
    }
}

Items.registerSheet('warcraft5e', WcItemSheet, {makeDefault: true});