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