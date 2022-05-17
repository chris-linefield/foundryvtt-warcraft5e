console.log('>> Wc5e: Initializing NPC Sheet');

import ActorSheet5eNPC from "../../../../systems/dnd5e/module/actor/sheets/npc.js";
import {renderWcDescription} from "../util.js"

/**
 * An Actor sheet for NPC type characters.
 * @extends {ActorSheet5eNPC}
 */
export class WcNpcSheet extends ActorSheet5eNPC {

    constructor(...args) {
        super(...args);
        if (!game.user.isGM && this.actor.limited) {
            this.options.classes = ['warcraft5e', 'sheet', 'actor', 'npc'];
            this.options.width = this.position.width = 850;
            this.options.height = this.position.height = 0;
        } else {
            this.options.classes = ['warcraft5e', 'dnd5e', 'sheet', 'actor', 'npc'];
            this.options.width = this.position.width = 600;
            this.options.height = this.position.height = 680;
        }
    }

    /** @override */
    get template() {
        let template = 'npc';
        if (!game.user.isGM && this.actor.limited) {
            template = 'limited';
        }
        return 'modules/warcraft5e/templates/actor/' + template + '-sheet.html';
    }

    /**
     * Handle toggling and items expanded description.
     * @param {Event} event   Triggering event.
     * @private
     */
    _onItemSummary(event) {
        event.preventDefault();
        const li = $(event.currentTarget).parents(".item");
        const item = this.actor.items.get(li.data("item-id"));
        const chatData = item.getChatData({secrets: this.actor.isOwner});

        // Toggle summary
        if (li.hasClass("expanded")) {
            let summary = li.children(".item-summary");
            summary.slideUp(200, () => summary.remove());
        } else {
            let summary = chatData.description.value;
            let props;
            if (typeof (item.data.flags.wc5e) !== 'undefined') {
                props = renderWcDescription(item.data.flags.wc5e.description);
            } else {
                props = $('<div class="item-properties"></div>');
                chatData.properties.forEach(p => props.append(`<span class="tag">${p}</span>`));
            }
            let div = $(`<div class="item-summary">${summary}</div>`);
            div.append(props);
            li.append(div.hide());
            div.slideDown(200);
        }
        li.toggleClass("expanded");
    }
}

Actors.registerSheet('warcraft5e', WcNpcSheet, {
    label: 'Warcraft 5e - NPC Sheet',
    makeDefault: false
});