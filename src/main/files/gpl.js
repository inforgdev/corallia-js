import hexRgb from 'hex-rgb';
import { tokens } from "../tokens.js";
import { renderTokens } from "../renderTokens.js";

const stdTmpl = {
    tokenName: "__NAME (__VALUE)",
};

function genGpl(name, propObj, tmpl = stdTmpl) {
    let header = `GIMP Palette
Name: ${name}
#
`;
    let colors = [];

    const json = {};
    tokens(propObj, ({ name, value }) => json[name] = value);
    const tokensRender = renderTokens(json);

    Object.keys(tokensRender).forEach((k) => {
        const value = tokensRender[k];
        let rgb = hexRgb(value);
        if(rgb === null) return;

        const token = {
            name: tmpl.tokenName
                .replaceAll("__NAME", k)
                .replaceAll("__VALUE", value),
            rgb: rgb.red + " " + rgb.green + " " + rgb.blue
        }
        
        colors.push(token.rgb + " " + token.name);
    });

    let body = colors.join("\n");

    return header + body;
}

export { genGpl };