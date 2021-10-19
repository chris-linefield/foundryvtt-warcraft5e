console.log('>> Wc5e: Adjusting 5e ClassFeatures');

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
        "apothecary": {
            "label": "Apothecary",
            "source": "Core Rules page 39",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.cBp6ymcqcqWtsitG",
                    "Compendium.warcraft5e.wc5e_class_feats.7wd0LyTNyC4HJ6yH"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.ASZZGsqog6YIl1MG"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.zA6fWmMKtLi2Bf2n"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.KT6R3NXZlyIjTOEL"]
            }
        },
        "mutant": {
            "label": "Mutant",
            "source": "Core Rules page 40",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.z6qfh7iXuCGYMuUU",
                    "Compendium.warcraft5e.wc5e_class_feats.BhwwZOGhwKSPAHDD"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.4yOakGpu52fmer7I"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.gfNjBd2i15oXCRvn"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.cqDnVw5bjOgYUkX2"]
            }
        },
        "transmutor": {
            "label": "Transmutor",
            "source": "Core Rules page 41",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.MoxAQW3bvLjyYxiy",
                    "Compendium.warcraft5e.wc5e_class_feats.0LuxEf5TR2gFyOB1"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.VkugzBTttynxuoo6"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.HQbXBjvchMSUObFJ"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.jmSJssDKfh6DUF8M"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.8sZenEzgW3Ophkab",
            "Compendium.warcraft5e.wc5e_class_feats.VzBpflaYYB9YlOwi",
            "Compendium.warcraft5e.wc5e_class_feats.WCJTpTCxSYaZv5xy"
        ],
        "2": ["Compendium.warcraft5e.wc5e_class_feats.Be4HjiEYIqimoWYs"],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.5TfCXmSnJ3Xo3QdR"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F"],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.sxNel3N5wx70Enlf"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "9": ["Compendium.warcraft5e.wc5e_class_feats.AdMwBo9sIaVqUBDK"],
        "10": [
            "Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F",
            "Compendium.warcraft5e.wc5e_class_feats.RaL0zsk6k0a0FBtP"
        ],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.VYvpCdOwqybLfeLO"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.g770YrsfXpZ45H4F"],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.OHwvsMkcz091pZbh"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": ["Compendium.warcraft5e.wc5e_class_feats.Lp7nrroIUrfL9AbA"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.6FKCdgSXqxMdvyc1"]
    }
}
ClassFeatures.deathknight = {
    "subclasses": {
        "pathOfBlood": {
            "label": "Path of Blood",
            "source": "Core Rules page 49",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.KmQj5Z2i2ySPayr2",
                    "Compendium.warcraft5e.wc5e_class_feats.Z9iWKy2PWb1BcRjX"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.CiZ585lnHkf65RfV"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.LHW4zbujvC2oEhOW"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.ylCYqr2H3rJvhFKg"]
            }
        },
        "pathOfFrost": {
            "label": "Path of Frost",
            "source": "Core Rules page 50",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.Hi2IlXyd4nETYjOq",
                    "Compendium.warcraft5e.wc5e_class_feats.IarrLRT7ApLy0MUm"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.e4c2uz9zUybfrlqQ"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.IIGYjkWIQKZvTLUR"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.F29VxMHzB3H8VYIb"]
            }
        },
        "unholyPath": {
            "label": "Unholy Path",
            "source": "Core Rules page 51",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.f2YutuIvE9ZtLlZE",
                    "Compendium.warcraft5e.wc5e_class_feats.yotHQiKWUtqYZnR5"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.cmsQRLMNBJ1YFw2U"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.algn5NhMHmPK8bJz"],
                "20": ["Compendium.warcraft5e.wc5e_class_feats.bwj4xvl22wCaZIEi"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.E7MNYi17oWxoYV7d",
            "Compendium.warcraft5e.wc5e_class_feats.bI7xI3VrGU6QkwCC"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.4VEbwGDxIo1A9qjp",
            "Compendium.warcraft5e.wc5e_class_feats.NpZmvg15FbFQ2Xvv",
            "Compendium.warcraft5e.wc5e_class_feats.CqVsG5nYaVsdhqHQ"
        ],
        "3": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"
        ],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.RHCM1SEVR8YGj71w"],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.wW0gIF7xTQ1e6mEj"
        ],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.VyrQcDbkD5DZxKMb"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.a9vilfbnrwSIp1tw"
        ],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": [
            "Compendium.warcraft5e.wc5e_class_feats.ZpQY3CIhekCWLAOM",
            "Compendium.warcraft5e.wc5e_class_feats.Zvcv0PFMFbeIL4BA"
        ],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.aghWTXJ444CYeUKm"]
    }
}
ClassFeatures.druid = {
    "subclasses": {
        "circleOfBalance": {
            "label": "Circle of Balance",
            "source": "Core Rules page 58",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.HvLHardWnT1aWNXH",
                    "Compendium.warcraft5e.wc5e_class_feats.uUhsDBHjU8kzWtjX"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.4nCcbhDi1IkkAnyp"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.TN4aZNPDe4sIha7D"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.b4mQ0wGwseHIR4cy"]
            }
        },
        "circleOfFeralBeast": {
            "label": "Circle of the Feral Beast",
            "source": "Core Rules page 59",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.t5d4RlaFNNH1cgVp",
                    "Compendium.warcraft5e.wc5e_class_feats.QeLx7sfAv0rKhNw3"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.Y4wUUUHZXuFxABPE"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.tvWxpr00gdnPLz00"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.YA8uHltnzfmjjPg7"]
            }
        },
        "circleOfRestoration": {
            "label": "Circle of Restoration",
            "source": "Core Rules page 61",
            "features": {
                "2": [
                    "Compendium.warcraft5e.wc5e_class_feats.XtoEYQ7OzazMiS1f",
                    "Compendium.warcraft5e.wc5e_class_feats.wA1qRvzQnSQVL7pH"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.olgFPYXiUsMVuI7X"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.mgm5EHvSvDqgfha8"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.LmEbySgScEe1RNe6"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.Ziu7O84V9qADpM66",
            "Compendium.warcraft5e.wc5e_class_feats.4hovzz0VURJ5XEsr"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf",
            "Compendium.warcraft5e.wc5e_class_feats.wA1qRvzQnSQVL7pH"
        ],
        "4": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf"
        ],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05"
        ],
        "8": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf"
        ],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05"],
        "12": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.kjoU8GlVSo0jmqcf"
        ],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.A9PJKH1vVY2ncT05"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": [
            "Compendium.warcraft5e.wc5e_class_feats.7gQHqIqq8eGCQUCp",
            "Compendium.warcraft5e.wc5e_class_feats.vEDMiIDSdkCEMA6P"
        ],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.Xr27k8bUvG9sFIen"]
    }
}
ClassFeatures.hunter = {
    "subclasses": {
        "beastMaster": {
            "label": "Beast Master",
            "source": "Core Rules page 67",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.DXx4xvTOQ2wrFC3p"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.r4zAElBNqHgQ0fbR"],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.oQXidlmDWLQQg0J0"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.x8o6vp9x6DwfoyfI"]
            }
        },
        "marksman": {
            "label": "Marksman",
            "source": "Core Rules page 68",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.DzvT9juUQYLSR7YZ"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.uaIpcs3TYF1q41EV"],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.wY0LLZwqeyZEahD6"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.3LQx3dSrrXyQfUwp"]
            }
        },
        "survival": {
            "label": "Survival",
            "source": "Core Rules page 69",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.AkZWkmxe9uV5xeS3"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.ePlaLixp5XS16KeN"],
                "11": ["Compendium.warcraft5e.wc5e_class_feats.znGg1RBRXJiLjyVH"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.b3BRUiVDo2G6Vjwf"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb",
            "Compendium.warcraft5e.wc5e_class_feats.ZIozEthSXCRehlGw"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.zRalmH8DkBPR5vDk",
            "Compendium.warcraft5e.wc5e_class_feats.qhxjEAxl1EVuYAqh"
        ],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.RHCM1SEVR8YGj71w"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb"],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.wLNTBy9dMYT2CjGb"],
        "15": ["Compendium.warcraft5e.wc5e_class_feats.1bcAMQ0PaxViafja"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.KMdXwpS1f2zc1WrA"]
    }
}
ClassFeatures.shaman = {
    "subclasses": {
        "elemental": {
            "label": "Elemental",
            "source": "Core Rules page 120",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.uwLlHRgiSbm9ncvi",
                    "Compendium.warcraft5e.wc5e_class_feats.Lit6kqsCl8uscjol"
                ],
                "2": ["Compendium.warcraft5e.wc5e_class_feats.YT5mEQRF6YaU8Wp9"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.26Bm2DjJnkvBh5vN"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.9O6ArBfAbMN3pdvZ"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.yEzkodabqfMFdqkF"]
            }
        },
        "enhancement": {
            "label": "Enhancement",
            "source": "Core Rules page 121",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.9DPJbM0zkkuI5gsk",
                    "Compendium.warcraft5e.wc5e_class_feats.BXHGUjkF0ckCrdFe"
                ],
                "2": ["Compendium.warcraft5e.wc5e_class_feats.wa37WeEd4Ndo3TRu"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.2Paq6iTiYEgCh7Jk"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.A0L4jDzqDqZJ6VO8"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.3mYJRk5H5Rrepnvc"]
            }
        },
        "restoration": {
            "label": "Restoration",
            "source": "Core Rules page 122",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.caRItDWXUgsayCb9",
                    "Compendium.warcraft5e.wc5e_class_feats.yqR7iSdE87SJM4Lo"
                ],
                "2": ["Compendium.warcraft5e.wc5e_class_feats.C4km96jZUwGbZRrf"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.jX8daFzRS6GiIiyU"],
                "8": ["Compendium.warcraft5e.wc5e_class_feats.p8QQrz7P6pqA9sI9"],
                "17": ["Compendium.warcraft5e.wc5e_class_feats.osJf60aBOveCLwZk"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.teGIlK6XbxusBe5f",
            "Compendium.warcraft5e.wc5e_class_feats.XRY1J7ExecaAvZL5",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.g6639EiDoqAAv43g",
            "Compendium.warcraft5e.wc5e_class_feats.gfJHW5hvYKzh8Iwv",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd"],
        "6": [
            "Compendium.warcraft5e.wc5e_class_feats.g6639EiDoqAAv43g",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "8": [
            "Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b",
            "Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.hcT1ALhoSD1kOUDP"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": [
            "Compendium.warcraft5e.wc5e_class_feats.IM5qEkNqnltsFqcd",
            "Compendium.warcraft5e.wc5e_class_feats.mrc1NSo8hZN68WEp"
        ],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.g6639EiDoqAAv43g"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.hcT1ALhoSD1kOUDP"]
    }
}
ClassFeatures.tinker = {
    "subclasses": {
        "bomber": {
            "label": "Bomber",
            "source": "Core Rules page 146",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.IHkdG7wrZ62CpvtN"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.YaZ6QGI1PROtCSFC"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.trtveMlKtVaDTEyX"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.f9e8WTH6rtXrZ2W5"]
            }
        },
        "gunner": {
            "label": "Gunner",
            "source": "Core Rules page 147",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.F9WjNpgB8SgAmZJr"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.nJQ8RrxdQEV7ehjd"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.wF27kRxdBTRfaUpp"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.vvNZakY2Z8al9mWh"]
            }
        },
        "gadgeteer": {
            "label": "Gadgeteer",
            "source": "Core Rules page 147",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.weVaL0aKagU09Ox3"],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.HfkNtAfjkgE37g5B"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.PFIfmXoDtbrySQVv"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.GYrmVcJOj9HJnOKA"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.0tVoLOidfrTrY0CJ",
            "Compendium.warcraft5e.wc5e_class_feats.BxFovVOtLQ9XyD03",
            "Compendium.warcraft5e.wc5e_class_feats.kHW3aF52oqfQmbxB"
        ],
        "2": [
            "Compendium.warcraft5e.wc5e_class_feats.YVUjckHkEyV9W0oU",
            "Compendium.warcraft5e.wc5e_class_feats.5FiNPLnuI2DzFuj5"
        ],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.zkaE7Ux6nFOdKSF2"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "5": [
            "Compendium.warcraft5e.wc5e_class_feats.UqsLXbxQqyYYrl8P",
            "Compendium.warcraft5e.wc5e_class_feats.SHZG5Wddrg2jWLa5"
        ],
        "7": ["Compendium.warcraft5e.wc5e_class_feats.2bHy7g5yI4pfCGha"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "9": ["Compendium.warcraft5e.wc5e_class_feats.JdAXjMxVRIm1S83C"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.sKw4cffExx8pfW6O"],
        "11": [
            "Compendium.warcraft5e.wc5e_class_feats.vH3lv5vHjBAW1FBf",
            "Compendium.warcraft5e.wc5e_class_feats.s0WyJ609hEA2FnwZ"
        ],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "13": ["Compendium.warcraft5e.wc5e_class_feats.KCzDiZJsJ0ZNgxFM"],
        "15": [
            "Compendium.warcraft5e.wc5e_class_feats.YVUjckHkEyV9W0oU",
            "Compendium.warcraft5e.wc5e_class_feats.Pfnsk5vTjTJK5yJo"
        ],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "17": ["Compendium.warcraft5e.wc5e_class_feats.pi3ZVUfOt67NRxz1"],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.lkuZuFTvus8lphWf"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.OddXpvUlobuwrFOK"]
    }
}
ClassFeatures.warlock = {
    "subclasses": {
        "affliction": {
            "label": "Affliction",
            "source": "Core Rules page 139",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.IUX4nj4jmczJOhEA",
                    "Compendium.warcraft5e.wc5e_class_feats.rySXMTp4uiqk20Gi"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.b0ci4k42K5xY8q4R"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.8zRF8tRcN4zBKNZZ"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.tIP2mhdV88SnEABk"]
            }
        },
        "demonology": {
            "label": "Demonology",
            "source": "Core Rules page 140",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.PHXdCoM6HH3NIf7K",
                    "Compendium.warcraft5e.wc5e_class_feats.uOQu24kJG2zsX378"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.wY0STEopZzf1hB3z"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.xxrqsGK19xOR3q7R"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.oDAMc9wlLQ18UbGA"]
            }
        },
        "destruction": {
            "label": "destruction",
            "source": "Core Rules page 141",
            "features": {
                "1": [
                    "Compendium.warcraft5e.wc5e_class_feats.0h7RUS2kfUXTwkdm",
                    "Compendium.warcraft5e.wc5e_class_feats.PCLwGvIRMY3KYLMI"
                ],
                "6": ["Compendium.warcraft5e.wc5e_class_feats.AA7PS3znDq201lTn"],
                "14": ["Compendium.warcraft5e.wc5e_class_feats.Zix5jvsp41eXi14J"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.FrHZaqJfS1UxmN0s"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.1PXPQRGYPhhPm8J3",
            "Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe",
            "Compendium.warcraft5e.wc5e_class_feats.q0phj3NJAGnGl8ym",
            "Compendium.warcraft5e.wc5e_class_feats.zXqjKHVh08yelm2a"
        ],
        "2": ["Compendium.warcraft5e.wc5e_class_feats.aSLDlpVbsPAYtHFE"],
        "3": ["Compendium.warcraft5e.wc5e_class_feats.FJuWOyl6vdY70eH2"],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "10": ["Compendium.warcraft5e.wc5e_class_feats.LbKLP6wNlpy5TBPD"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "18": ["Compendium.warcraft5e.wc5e_class_feats.bIOMzwUkgs46t8Qe"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.pZ0s66jTVdto9Z3b"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.7PYDrXNrSXhfqJh6"]
    }
}
ClassFeatures.warrior = {
    "subclasses": {
        "arms": {
            "label": "Warrior of Arms",
            "source": "Core Rules page 146",
            "features": {
                "3": [
                    "Compendium.warcraft5e.wc5e_class_feats.jZZ3jr0aiZLwdcxv",
                    "Compendium.warcraft5e.wc5e_class_feats.C5BAim49sUa3Qegt"
                ],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.pzV0GxhXY8Jq2sWn"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.lRbedzZp3cixTZpc"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.CE1HZQNeawepBtXI"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.UhPWa7DK3HBXtwsC"]
            }
        },
        "fury": {
            "label": "Warrior of Fury",
            "source": "Core Rules page 147",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.na8IZmJwynNkz1iL"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.tOcK4KygovPeQIqG"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.WV4HWROfS9LE2h9J"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.3vYZozTLrSTVh0Jg"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.lbdG8tGG6jobDHkx"]
            }
        },
        "protection": {
            "label": "Warrior of Protection",
            "source": "Core Rules page 147",
            "features": {
                "3": ["Compendium.warcraft5e.wc5e_class_feats.s0BmwIiZaHlfijhF"],
                "7": ["Compendium.warcraft5e.wc5e_class_feats.B8vZWezYjs9O5uIg"],
                "10": ["Compendium.warcraft5e.wc5e_class_feats.W3G5UsJoykzHbiXh"],
                "15": ["Compendium.warcraft5e.wc5e_class_feats.9Wz8j8i350x4cDtR"],
                "18": ["Compendium.warcraft5e.wc5e_class_feats.OPgso8NNMudmIPfU"]
            }
        }
    },
    "features": {
        "1": [
            "Compendium.warcraft5e.wc5e_class_feats.KTeU6RPjSlPkisut",
            "Compendium.warcraft5e.wc5e_class_feats.6yr0026sJRfkMPtV",
            "Compendium.warcraft5e.wc5e_class_feats.lFVytL3t8utTKs2r"
        ],
        "4": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
        "5": ["Compendium.warcraft5e.wc5e_class_feats.nAoxQouvbcuIx2JQ"],
        "6": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
        "8": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
        "11": ["Compendium.warcraft5e.wc5e_class_feats.nAoxQouvbcuIx2JQ"],
        "12": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
        "14": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
        "16": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
        "19": ["Compendium.warcraft5e.wc5e_class_feats.NSwm5sXXobXorPqC"],
        "20": ["Compendium.warcraft5e.wc5e_class_feats.nAoxQouvbcuIx2JQ"]
    }
}