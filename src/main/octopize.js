import { factory, stringify } from "octopo-js";
const { _var, _val, _ref } = factory;
const { $ref } = stringify;

let coralliaGrammar = {
    var: {
        name: "__NAME",
        value: "__VALUE",
        pointer: "$",
    },
};

function defineVar(propEntry, options) {
    const octopoLang = options.data;
    const propName = propEntry.name;
    let propValue = propEntry.value;
    
    if(propValue.startsWith(coralliaGrammar.var.pointer)) {
        const varName = propValue.substring(1, propValue.length);
        propValue = $ref(_ref(varName), octopoLang)
    }

    return _var(propName, _val(propValue));
}

export default function octopize(propObj, procOptions) {
    const options = procOptions;
    const octopoLang = options.data;
    const data = [];

    function concatData(octopoLang, propObj, parent) {
        for(var propName in propObj) {
            var propValue = propObj[propName];
            
            const newParent = parent == undefined ?
                propName :
                parent + octopoLang.wordSep + propName;
            
            if(propValue instanceof Object) {
                concatData(octopoLang, propValue, newParent);
                continue;
            }

            const propEntry = {
                name: newParent,
                value: propValue,
            };
            const curVar = defineVar(propEntry, { data: octopoLang });
            data.push(curVar);
        };

        return data;
    }

    concatData(octopoLang, propObj);

    return data;
};
