import { factory, stringifier } from "octopo-js";
import { tokens } from "./tokens.js";
import coralliaGrammar from "./grammar.js";

const { _var, _val, _ref } = factory;
const { $ref } = stringifier;

function defineVar(token, octopoLang) {
    const propName = token.name;
    let propValue = token.value;
    
    if(propValue.startsWith(coralliaGrammar.var.pointer)) {
        const varName = propValue.substring(1, propValue.length);
        propValue = $ref(_ref(varName), octopoLang)
    }

    return _var(propName, _val(propValue));
}

export default function octopize(propObj, octopoLang) {
    const data = [];

    tokens(propObj, (token) => {
        const curVar = defineVar(token, octopoLang);
        data.push(curVar);
    });

    return data;
};