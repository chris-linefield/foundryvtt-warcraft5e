/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @returns {Promise}
 */
export const preloadWc5eTemplates = async function() {
  return loadTemplates([

    // Shared Partials
    //"systems/dnd5e/templates/actors/parts/active-effects.html",

    // Actor Sheet Partials
    //"systems/dnd5e/templates/actors/parts/actor-traits.html",
    //"systems/dnd5e/templates/actors/parts/actor-inventory.html",
    "modules/warcraft5e/templates/actor/parts/actor-features.html",
    //"systems/dnd5e/templates/actors/parts/actor-spellbook.html",
    //"systems/dnd5e/templates/actors/parts/actor-warnings.html",

    // Item Sheet Partials
    "modules/warcraft5e/templates/item/parts/description.html",
    "modules/warcraft5e/templates/item/parts/table.html",
    //"systems/dnd5e/templates/items/parts/item-action.html",
    //"systems/dnd5e/templates/items/parts/item-activation.html",
    //"systems/dnd5e/templates/items/parts/item-description.html",
    //"systems/dnd5e/templates/items/parts/item-mountable.html"
  ]);
};