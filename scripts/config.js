console.log('>> Wc5e: Adjusting 5e Config');

import {} from "./config_class_features.js";

let DND5E = dnd5e.config;

DND5E.abilities.dex = "WC5E.Character.Agility";
DND5E.abilities.con = "WC5E.Character.Stamina";
DND5E.abilities.wis = "WC5E.Character.Spirit";

DND5E.attunements[3] = "WC5E.UI.Attunements.GreaterAttunement";

DND5E.damageResistanceTypes.arcane = "WC5E.UI.DamageTypes.Arcane";
DND5E.damageResistanceTypes.concussive = "WC5E.UI.DamageTypes.Concussive";
DND5E.damageResistanceTypes.fel = "WC5E.UI.DamageTypes.Fel";
DND5E.damageResistanceTypes.holy = "WC5E.UI.DamageTypes.Holy";
DND5E.damageResistanceTypes.shadow = "WC5E.UI.DamageTypes.Shadow";
DND5E.damageTypes.arcane = "WC5E.UI.DamageTypes.Arcane";
DND5E.damageTypes.concussive = "WC5E.UI.DamageTypes.Concussive";
DND5E.damageTypes.fel = "WC5E.UI.DamageTypes.Fel";
DND5E.damageTypes.holy = "WC5E.UI.DamageTypes.Holy";
DND5E.damageTypes.mana = "WC5E.UI.DamageTypes.Mana";
DND5E.damageTypes.shadow = "WC5E.UI.DamageTypes.Shadow";

DND5E.engineTypes = {
    "alchemical": "WC5E.UI.Engines.Alchemical",
    "chaos": "WC5E.UI.Engines.ChaosEnergy",
    "combustion": "WC5E.UI.Engines.Combustion",
    "electric": "WC5E.UI.Engines.Electric",
    "mana": "WC5E.UI.Engines.Mana",
    "manaArcane": "WC5E.UI.Engines.ManaArcane",
    "manaDruid": "WC5E.UI.Engines.ManaDruid",
    "mechanical": "WC5E.UI.Engines.Mechanical",
    "soul": "WC5E.UI.Engines.Soul",
    "soulCelestial": "WC5E.UI.Engines.SoulCelestialFiend",
    "soulElemental": "WC5E.UI.Engines.SoulElemental",
    "soulLiving": "WC5E.UI.Engines.SoulLivingCreature",
    "soulSpellcaster": "WC5E.UI.Engines.SoulSpellcaster",
    "soulUndead": "WC5E.UI.Engines.SoulUndead",
    "steam": "WC5E.UI.Engines.Steam"
};

DND5E.healingTypes.healingMana = "WC5E.UI.HealingTypes.HealingMana";

DND5E.itemRarity.veryRare = "WC5E.UI.ItemRarity.Epic";
DND5E.itemRarity.varies = "WC5E.UI.ItemRarity.Varies";

DND5E.languages = {
    "common": "WC5E.Languages.Common",
    "dwarven": "WC5E.Languages.Dwarven",
    "draenei": "WC5E.Languages.Draenei",
    "draconic": "WC5E.Languages.Draconic",
    "druidic": "WC5E.Languages.Druidic",
    "elven": "WC5E.Languages.Elven",
    "eredun": "WC5E.Languages.Eredun",
    "gnomish": "WC5E.Languages.Gnomish",
    "goblin": "WC5E.Languages.Goblin",
    "gutterspeech": "WC5E.Languages.Gutterspeech",
    "kalimag": "WC5E.Languages.Kalimag",
    "necril": "WC5E.Languages.Necril",
    "lowcommon": "WC5E.Languages.LowCommon",
    "orcish": "WC5E.Languages.Orcish",
    "ogre": "WC5E.Languages.Ogre",
    "pandaren": "WC5E.Languages.Pandaren",
    "shathyar": "WC5E.Languages.ShathYar",
    "taurahe": "WC5E.Languages.Taurahe",
    "titan": "WC5E.Languages.Titan",
    "troll": "WC5E.Languages.Troll"
};


DND5E.creatureTypes.mecha = "WC5E.Creature.Mecha.Name";

//DND5E.toolIds.infusion = "oZ4szgJtQaSdG1qD";

/*DND5E.toolProficiencies = {
    "alc"  : "WC5E.AlchemistsSupplies",
    "disg" : "WC5E.DisguiseKit",
    "eng"  : "WC5E.EngineersTools",
    "forg" : "WC5E.ForgeryKit",
    "poi"  : "WC5E.PoisonersKit",
    "thi"  : "WC5E.ThievesTools"
};*/


DND5E.weaponEnhancements = {
    arcane: "WC5E.UI.WeaponEnhancements.Arcane",
    black: "WC5E.UI.WeaponEnhancements.Black",
    fire: "WC5E.UI.WeaponEnhancements.Fire",
    ricochet: "WC5E.UI.WeaponEnhancements.Ricochet",
    sleep: "WC5E.UI.WeaponEnhancements.Sleep",
    storm: "WC5E.UI.WeaponEnhancements.Storm"
};

DND5E.weaponIds.attackClaws = "H9mvCWwGzgmMWCVL";
DND5E.weaponIds.generalFirearm = "HjmGaC8pYCUTMLpV";
DND5E.weaponIds.generalExplosive = "Ufk0F3Q9ew6prMzr";

DND5E.weaponProperties.bomb = "WC5E.UI.WeaponProps.Bomb";
DND5E.weaponProperties.hvypl = "WC5E.UI.WeaponProps.HeavyPl";
DND5E.weaponProperties.hvyplus = "WC5E.UI.WeaponProps.HeavyPlus";
DND5E.weaponProperties.mine = "WC5E.UI.WeaponProps.Mine";
DND5E.weaponProperties.reloadp = "WC5E.UI.WeaponProps.ReloadP";
DND5E.weaponProperties.reloadpl = "WC5E.UI.WeaponProps.ReloadPl";
DND5E.weaponProperties.reloadplus = "WC5E.UI.WeaponProps.ReloadPlus";
DND5E.weaponProperties.rocket = "WC5E.UI.WeaponProps.Rocket";
