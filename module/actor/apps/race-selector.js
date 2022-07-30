/**
 * Interface for managing a character's armor calculation.
 * @extends {DocumentSheet}
 */
export default class RaceSelector extends DocumentSheet {

    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "actor-armor-config",
            classes: ["dnd5e", "actor-armor-config"],
            template: "modules/warcraft5e/templates/dialogs/race-selector.html",
            width: 320,
            height: "auto"
        });
    }

    /* -------------------------------------------- */

    /** @inheritdoc */
    get title() {
        return `${game.i18n.localize("WC5E.UI.ChangeRace")}: ${this.document.name}`;
    }

    /* -------------------------------------------- */

    /** @inheritdoc */
    async getData() {

        const featPack = game.packs.get('warcraft5e.wc5e_races');
        let racePack = await featPack.getDocuments();

        let activeRace = foundry.utils.deepClone(this.object.system.details.race);

        let races = {};
        for (let race of racePack) {
            races[race._id] = {
                label: race.name
            }
        }

        let race = {
            value: "Dwarf"
        }

        return {
            selectOptions: races,
            race: race,
            value: activeRace,
        };
    }

    /* -------------------------------------------- */

    /** @inheritdoc */
    async _updateObject(event, formData) {
        let actorId = foundry.utils.deepClone(this.object._id);
        this.replaceRace(actorId, formData.race);
    }

    /**
     * inserts or replaces the race entry in the actor sheet
     * @param actorId
     * @param raceId
     */
    async replaceRace(actorId, raceId) {

        let targetActor = game.actors.get(actorId);

        const racePack = game.packs.get('warcraft5e.wc5e_races');
        const featPack = game.packs.get('warcraft5e.wc5e_racial_feats');
        const spellPack = game.packs.get('warcraft5e.wc5e_spells');

        let raceEntry = await racePack.getDocument(raceId);
        let race = raceEntry.flags.wc5e;

        let possibleFeats = await featPack.getDocuments();
        let possibleSpells = await spellPack.getDocuments();

        //get names of all compendium skills
        let compendiumFeats = [];
        for (let feat of possibleFeats) {
            compendiumFeats.push(feat.name);
        }

        let matchedFeats = targetActor.items.filter(item => compendiumFeats.includes(item.name));

        let removableFeats = [];
        for (let feat of matchedFeats) {
            removableFeats.push(feat._id);
        }
        targetActor.deleteEmbeddedDocuments("Item", removableFeats);

        //add new race feats
        let traits = race.traits;
        let entries = [];
        if (traits) {
            for (let trait of traits) {
                let entry = await featPack.get(trait.node);
                entries.push(entry);
            }
        }

        //add new race spells
        let spells = race.spells;
        if (spells) {
            for (let spell of spells) {
                let entry = await spellPack.get(spell.node);
                entries.push(entry);
            }
        }
        targetActor.createEmbeddedDocuments("Item", entries);

        let weaponProfs = [];
        if (race.values.weaponProficiencies) {
            weaponProfs = race.values.weaponProficiencies;
        }

        let armorProfs = [];
        if (race.values.armorProficiencies) {
            armorProfs = race.values.armorProficiencies;
        }

        let resArray = [];
        if (race.values.resistance) {
            for (let res of race.values.resistance) {
                resArray.push(res);
            }
        }

        let skills = race.values.skills;

        if (skills) {
            for (let skill of skills) {
                targetActor.update({
                    ['system.skills.' + skill + '.value']: 1
                });
            }
        }

        //update the actor-props
        targetActor.update({
            ['system.details.race']: game.i18n.localize(race.name),
            ['system.attributes.movement.walk']: race.values.speed,
            ['system.traits.size']: race.values.size,
            ['system.traits.languages.value']: race.values.language,
            ['system.traits.dr.value']: resArray,
            ['system.traits.armorProf.value']: armorProfs,
            ['system.traits.weaponProf.value']: weaponProfs,
            ['flags.wc5e']: {}
        });

        if (race.subraces) {
            let subraces = race.subraces
            let buttons = {};
            for (let subrace of subraces) {
                buttons[subrace.name] = {
                    icon: '<i class="fas fa-user-plus"></i>',
                    label: game.i18n.localize(subrace.name),
                    callback: async () => {
                        let entries = [];

                        let traits = subrace.traits;
                        if (traits && traits.length > 0) {
                            for (let trait of traits) {
                                let entry = await featPack.get(trait.node);
                                entries.push(entry);
                            }
                        }

                        let spells = subrace.spells;
                        if (spells && spells.length > 0) {
                            for (let spell of spells) {
                                let entry = await spellPack.get(spell.node);
                                entries.push(entry);
                            }
                        }
                        targetActor.createEmbeddedDocuments("Item", entries);

                        if (subrace.values.resistance) {
                            for (let res of subrace.values.resistance) {
                                resArray.push(res);
                            }
                        }

                        let skills = subrace.values.skills;
                        if (skills) {
                            for (let skill of skills) {
                                targetActor.update({
                                    ['system.skills.' + skill + '.value']: 1
                                });
                            }
                        }

                        if (subrace.values.weaponProficiencies) {
                            for (let wp of subrace.values.weaponProficiencies) {
                                weaponProfs.push(wp);
                            }
                        }

                        if (subrace.values.armorProficiencies) {
                            for (let ap of subrace.values.armorProficiencies) {
                                armorProfs.push(ap);
                            }
                        }

                        targetActor.update({
                            ['system.details.race']: game.i18n.localize(subrace.name),
                            ['system.traits.dr.value']: resArray,
                            ['system.traits.armorProf.value']: armorProfs,
                            ['system.traits.weaponProf.value']: weaponProfs,
                        });
                    }
                }
            }
            const html = await renderTemplate("modules/warcraft5e/templates/dialogs/subrace-selector.html", {
                "subraces": subraces
            });
            return new Promise(resolve => {
                const dlg = new Dialog({
                    title: game.i18n.localize("WC5E.UI.Dialogs.SelectSubrace"),
                    content: html,
                    buttons: buttons,
                    //default: "apply",
                    //close: () => resolve([])
                });
                dlg.render(true);
            });
        }
    }
}
