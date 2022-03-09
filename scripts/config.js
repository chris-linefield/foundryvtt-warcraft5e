console.log('>> Wc5e: Adjusting 5e Config');

import {DND5E} from "../../../systems/dnd5e/module/config.js";
import {} from "./config_class_features.js";

DND5E.abilities.dex = "WC5E.Character.Agility";
DND5E.abilities.con = "WC5E.Character.Stamina";
DND5E.abilities.wis = "WC5E.Character.Spirit";

DND5E.attunements[3] = "WC5E.UI.Attunements.GreaterAttunement";

DND5E.damageTypes.holy = "WC5E.UI.DamageTypes.Holy";
DND5E.damageTypes.shadow = "WC5E.UI.DamageTypes.Shadow";

DND5E.itemRarity.veryRare = "WC5E.UI.ItemRarity.Epic";
DND5E.itemRarity.varies = "WC5E.UI.ItemRarity.Varies";

DND5E.languages = {
    "common": "WC5E.Languages.Common",
    "dwarven": "WC5E.Languages.Dwarven",
    "draenei": "WC5E.Languages.Draenei",
    "draconic": "WC5E.Languages.Draconic",
    "elven": "WC5E.Languages.Elven",
    "eredun": "WC5E.Languages.Eredun",
    "gnomish": "WC5E.Languages.Gnomish",
    "goblin": "WC5E.Languages.Goblin",
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


DND5E.weaponIds.attackClaws = "H9mvCWwGzgmMWCVL";
DND5E.weaponIds.generalFirearm = "HjmGaC8pYCUTMLpV";

DND5E.weaponProperties.hvyplus = "WC5E.UI.WeaponProps.HeavyPlus";
