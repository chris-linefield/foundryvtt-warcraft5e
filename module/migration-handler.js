/*
 * Migration Handler for updating entities with the latest template
 */
export const migrate = async function() {
    console.log('>> Wc5e: migrating entities');

    //load the models of every entity
    let model = game.system.model;

    //loop through all actors
    for(let actor of game.data.actors) {
        console.log('>> Wc5e: syncing actor '+actor._id);

        let clonedActor = { ...actor };

        //sync the data structure
        syncObjectStructure('actor', model.Actor[clonedActor.type], clonedActor.data);

        //FIXME: einzelne values kann man ändern (überschreiben) - z.B. data.core.lvl = actor.data.core.lvl
        // Vielleicht kann man die values im Sync Vorgang einzeln speichern oder löschen

        /*
         *is newActorData a modified version of actorData, or a modified version of a duplicated copy of it?
         * Often this problem is caused by updating the working copy of the data model and then calling update.
         * Update doesn't think it has any diffs from the original (because it's comparing the modified version with...
         * the modified version) and thus doesn't apply the changes to the database. Having said that, I know you can't
         * just delete keys without using a special syntax. */

        //update the actor
        let realActor = game.actors.get(clonedActor._id);
        realActor.update({'data' : clonedActor.data});
    }
}

/**
 * This method synchronizes the entity with the original model from template.json
 */
function syncObjectStructure(type, model, entity) {
    addObjectProps(type, model, entity);
    removeObjectProps(type, model, entity);
}


function addObjectProps(type, model, entity) {
    //add every missing key or convert it into the new structure
    for(let key in model) {
        //node is an object and has to be processed recursively
        if(Object.prototype.toString.call(model[key]) === '[object Object]') {
            //If the type of value differs - overwrite it
            if(typeof(model[key]) !== typeof(entity[key])) {
                console.log('>> Wc5e: overwriting '+key+' of '+type+' due to structural changes.');
                console.log(model[key]);
                console.log(entity[key]);
                entity[key] = {};
            }
            //if the node does not exist - create it
            else if(!entity.hasOwnProperty(key)) {
                console.log('>> Wc5e: adding '+key+' to '+type+'.');
                entity[key] = {};
            }
            syncObjectStructure(type, model[key], entity[key]);
        }
        //node is just a value that will be set
        else if(!entity.hasOwnProperty(key)) {
            console.log('>> Wc5e: adding '+key+' to '+type+'.');
            entity[key] = model[key];
        }
    }
}

function removeObjectProps(type, model, entity) {
    //remove every obsolete key that is no longer required
    for(let key in entity) {
        //node is an object and has to be processed recursively
        if(Object.prototype.toString.call(entity[key]) === '[object Object]') {
            removeObjectProps(type, model[key], entity[key]);
        }
        else {
            if(typeof(model[key]) === 'undefined') {
                console.log('>> WC5e: remove '+key+' - deprecated');
                delete entity[key];
            }
        }
    }
}