/*
 * Migration Handler for updating entities with the latest template
 */
export const migrate = async function() {
    console.log('>> Wc5e: migrating entities');

    //load the models of every entity
    let model = game.system.model;

    //loop through all actors
    for(let actor of game.system.actors) {
        console.log('>> Wc5e: syncing actor '+actor._id);

        var realActor = game.actors.get(actor._id);

        //sync the data structure
        syncObjectStructure('actor', realActor, model.Actor[actor.type], actor.data, 'data');
    }
}

/**
 * This method synchronizes the entity with the original model from template.json
 */
function syncObjectStructure(type, entity, model, entityData, source) {
    addObjectProps(type, entity, model, entityData, source);
    //removeObjectProps(type, entity, model, entityData, source);
}


//FIXME - check fails sometimes and keeps creating keys
function addObjectProps(type, entity, model, entityData, source) {
    //add every missing key or convert it into the new structure
    for(let key in model) {
        var keySource = source+'.'+key;
        //node is an object and has to be processed recursively
        if(Object.prototype.toString.call(model[key]) === '[object Object]') {
            //if the node does not exist - create it
            if(!entityData.hasOwnProperty(key)) {
                console.log('>> Wc5e: adding "'+keySource+'"');
                entity.update({[keySource] : {}});
                entityData[key] = {};
            }
            //If the type of value differs - overwrite it
            else if(typeof(model[key]) !== typeof(entityData[key])) {
                console.log('>> Wc5e: overwriting "'+keySource+'" due to structural changes: "'+typeof(model[key])+'" vs "'+typeof(entityData[key])+'".');
                entity.update({[keySource] : {}});
                entityData[key] = {};
            }
            syncObjectStructure(type, entity, model[key], entityData[key], keySource);
        }
        //node is just a value that will be set
        else if(!entityData.hasOwnProperty(key)) {
            entity.update({[keySource] : model[key]});
        }
    }
}

//FIXME - wrong nodes called - CREATES DEPRECTAED NODES FOR NO REASON
function removeObjectProps(type, entity, model, entityData, source) {
    //remove every obsolete key that is no longer required
    for(let key in entityData) {
        var keySource = source+'.'+key;
        //node is an object and has to be processed recursively
        if(Object.prototype.toString.call(entityData[key]) === '[object Object]') {
            removeObjectProps(type, entity, model[key], entityData[key], source);
        }
        else {
            if(typeof(model) === 'undefined') {
                //console.log('>> WC5e: remove empty node "'+keySource+'"- deprecated');
                entity.update({[keySource] : 'DEPRECATED'});
            }
            else if(typeof(model[key]) === 'undefined' && entityData[key] !== 'DEPRECATED') {
                console.log('>> WC5e: remove "'+keySource+'" - deprecated');
                //console.log(entityData[key]);
                entity.update({[keySource] : 'DEPRECATED'});
            }
        }
    }
}
