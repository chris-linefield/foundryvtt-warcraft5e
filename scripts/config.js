console.log('>> Wc5e: Adjusting 5e Config');

import { DND5E } from "../../../systems/dnd5e/module/config.js";
import { }       from "./config_class_features.js";

DND5E.toolProficiencies = {
    "alc"  : "WC5E.AlchemistsSupplies",
    "disg" : "WC5E.DisguiseKit",
    "eng"  : "WC5E.EngineersTools",
    "forg" : "WC5E.ForgeryKit",
    "poi"  : "WC5E.PoisonersKit",
    "thi"  : "WC5E.ThievesTools"
};

DND5E.languages = {
    "common"    : "WC5E.Languages.Common",
    "dwarven"   : "WC5E.Languages.Dwarven",
    "draenei"   : "WC5E.Languages.Draenei",
    "draconic"  : "WC5E.Languages.Draconic",
    "elven"     : "WC5E.Languages.Elven",
    "eredun"    : "WC5E.Languages.Eredun",
    "gnomish"   : "WC5E.Languages.Gnomish",
    "goblin"    : "WC5E.Languages.Goblin",
    "kalimag"   : "WC5E.Languages.Kalimag",
    "lowcommon" : "WC5E.Languages.LowCommon",
    "orcish"    : "WC5E.Languages.Orcish",
    "ogre"      : "WC5E.Languages.Ogre",
    "pandaren"  : "WC5E.Languages.Pandaren",
    "shathyar"  : "WC5E.Languages.ShathYar",
    "taurahe"   : "WC5E.Languages.Taurahe",
    "titan"     : "WC5E.Languages.Titan",
    "troll"     : "WC5E.Languages.Troll"
};