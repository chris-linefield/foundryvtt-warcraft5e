//---- ON INITIALIZATION

Hooks.on('preCreateItem', function (document, data, options, userId) {
    if (data.flags.wc5e && data.flags.wc5e.type === 'background') {

        //Check for Variants
        if (typeof (data.flags.wc5e.entries) !== 'undefined') {

        }

        let targetActor = game.actors.get(document.parent.id);
        targetActor.update({['data.details.background']: data});
        return false;
    } else if (data.flags.wc5e && data.flags.wc5e.type === 'race') {
        replaceRace(document, data.flags.wc5e);
        return false;
    }
});

/**
 * inserts or replaces the race entry in the actor sheet
 * @param document
 * @param race
 */
async function replaceRace(document, race) {
    let targetActor = game.actors.get(document.parent.id);

    console.log(targetActor);

    const featPack = game.packs.get('warcraft5e.wc5e_racial_feats');
    const spellPack = game.packs.get('warcraft5e.wc5e_spells');
    let possibleFeats = await featPack.getDocuments();
    let possibleSpells = await spellPack.getDocuments();

    //get names of all compendium skills
    let compendiumFeats = [];
    for (let feat of possibleFeats) {
        compendiumFeats.push(feat.data.name);
    }

    let matchedFeats = targetActor.items.filter(item => compendiumFeats.includes(item.name));

    let removableFeats = [];
    for (let feat of matchedFeats) {
        removableFeats.push(feat.data._id);
    }
    targetActor.deleteEmbeddedDocuments("Item", removableFeats);

    //add new race feats
    let traits = race.traits;
    let entries = [];
    for (let trait of traits) {
        let entry = await featPack.get(trait.node);
        entries.push(entry.data);
    }

    //add new race spells
    let spells = race.spells;
    if (spells) {
        for (let spell of spells) {
            let entry = await spellPack.get(spell.node);
            entries.push(entry.data);
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

    let skills = race.values.skills;
    for (let skill of skills) {
        targetActor.update({
            ['data.skills.' + skill + '.value']: 1
        });
    }

    //update the actor-props
    targetActor.update({
        ['data.details.race']: game.i18n.localize(race.name),
        ['data.attributes.movement.walk']: race.values.speed,
        ['data.traits.size']: race.values.size,
        ['data.traits.languages.value']: race.values.language,
        ['data.traits.dr.value']: race.values.resistance,
        ['data.traits.armorProf.value']: armorProfs,
        ['data.traits.weaponProf.value']: weaponProfs,
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
                            entries.push(entry.data);
                        }
                    }

                    let spells = subrace.spells;
                    if (spells && spells.length > 0) {
                        for (let spell of spells) {
                            let entry = await spellPack.get(spell.node);
                            entries.push(entry.data);
                        }
                    }
                    targetActor.createEmbeddedDocuments("Item", entries);

                    let resistance = race.values.resistance;
                    if (subrace.values.resistance) {
                        resistance.push(subrace.values.resistance);
                    }

                    let skills = subrace.values.skills;
                    for (let skill of skills) {
                        targetActor.update({
                            ['data.skills.' + skill + '.value']: 1
                        });
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
                        ['data.details.race']: game.i18n.localize(subrace.name),
                        ['data.traits.dr.value']: resistance,
                        ['data.traits.armorProf.value']: armorProfs,
                        ['data.traits.weaponProf.value']: weaponProfs,
                    });
                }
            }
        }
        const html = await renderTemplate("modules/warcraft5e/templates/dialogs/select-subrace.html", {
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