import { generate, _ref, _val, _var } from "octopo-js";
import { tokens } from "./tokens.js";
import coralliaGrammar from "./grammar.js";

function defineVar(token, octopoLang) {
    const propName = token.name;
    let propValue = token.value;
    
    if(propValue.startsWith(coralliaGrammar.var.pointer)) {
        const varName = propValue.substring(1, propValue.length);
        propValue = generate(_ref(varName), octopoLang)
    }

    return _var(propName, _val(propValue));
}

export function octopizeTokens(propObj, octopoLang) {
    const data = [];

    tokens(propObj, (token) => {
        const curVar = defineVar(token, octopoLang);
        data.push(curVar);
    });

    return data;
};