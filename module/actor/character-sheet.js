console.log('>> Wc5e: Initializing Character Sheet');

import ActorSheet5eCharacter from '../../../../systems/dnd5e/module/actor/sheets/character.js';

/*
 * Actor Sheet for player characters
 */
export class WcCharacterSheet extends ActorSheet5eCharacter {

    constructor(...args) {
        super(...args);
        this.options.classes = ['warcraft5e', 'dnd5e', 'sheet', 'actor', 'character'];
        this.options.width = this.position.width =  850;
        this.options.height = this.position.height =  800;
    }

    /** @override */
    get template() {
        return `modules/warcraft5e/templates/actor/character-sheet.html`;
    }
}

Actors.registerSheet('warcraft5e', WcCharacterSheet, {makeDefault: true});