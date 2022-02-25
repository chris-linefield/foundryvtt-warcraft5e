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
        if (data.flags.wc5e.subraces) {
            alert('Please chose a subrace');
            return;
        }
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
    let oldRace = targetActor.data.data.details.race;

    console.log(targetActor);

    if (oldRace === '') {
        targetActor.update({['data.details.race']: race});
    } else {

        let pack = game.packs.get('warcraft5e.wc5e_racial_feats');
        let possibleFeats = await pack.getDocuments();

        //get names of all compendium skills
        let compendiumFeats = [];
        for(let feat of possibleFeats) {
            compendiumFeats.push(feat.data.name);
        }

        let matchedFeats = targetActor.items.filter(item => compendiumFeats.includes(item.name));

        let removableFeats = [];
        for(let feat of matchedFeats) {
            removableFeats.push(feat.data._id);
        }
        targetActor.deleteEmbeddedDocuments("Item", removableFeats);

        //add new race feats
        let traits = race.traits;
        let entries = [];
        for (let trait of traits) {
            let entry = await pack.get(trait.node);
            entries.push(entry.data);
        }
        targetActor.createEmbeddedDocuments("Item", entries);

        //update the actor-props
        targetActor.update({
            ['data.details.race']: race,
            ['data.attributes.movement.walk']: race.values.speed,
            ['data.traits.size']: race.values.size,
            ['data.traits.languages.value']: race.values.language,
            ['data.traits.dr.value']: race.values.resistance
        });

        console.log(targetActor);
    }
}