import {ClassFeatures} from "../../../systems/dnd5e/module/classFeatures.js";

delete ClassFeatures.bard;
delete ClassFeatures.barbarian;
delete ClassFeatures.cleric;
delete ClassFeatures.fighter;
delete ClassFeatures.ranger;
delete ClassFeatures.sorcerer;
delete ClassFeatures.wizard;

ClassFeatures.alchemist = {
   "subclasses": {
     "path-of-the-apothecary": {
       "label": "Path of the Apthecary",
       "source": "XGE pg. 9"
     },
     "path-of-the-mutant": {
       "label": "Path of the Mutant",
       "source": "SCAG pg. 121"
     },
     "path-of-the-transmutor": {
       "label": "Path of the Transmutor",
       "source": "PHB pg. 49",
     }
   },
   "features": {
     "1": ["Compendium.warcraft5e.class_feats.URtICjZp9BRWdVlL"]
   }
}

console.log(ClassFeatures);