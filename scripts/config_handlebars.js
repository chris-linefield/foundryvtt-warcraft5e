import {capitalizeFirstLetter} from "../module/util.js";

Handlebars.registerHelper('isClassSkill', function (data, skill) {
    let classes = data.system.classes;

    let trueByClass = false;
    for (let c in classes) {
        let classIterator = classes[c].skills.choices.values();
        for (let skillName of classIterator) {
            if (skill === skillName) {
                trueByClass = true;
            }
        }
    }

    if (trueByClass) {
        return true;
    }

    return false;
});

Handlebars.registerHelper("increment", function (value) {
    return parseInt(value) + 1;
});

Handlebars.registerHelper("isPositive", function (value) {
    return parseInt(value) > 0;
});

Handlebars.registerHelper("isChoice", function (value) {
    return typeof (value) === "object";
});

Handlebars.registerHelper("isTrue", function (value) {
    return value === true;
});

Handlebars.registerHelper("selected", function (value, comparison) {
    if (value === comparison) return "selected";
});

Handlebars.registerHelper("wcString", function (namespace, key) {
    return namespace + '.' + capitalizeFirstLetter(key);
});