import hexRgb from 'hex-rgb';
import { tokens } from "../tokens.js";

const stdTmpl = {
    tokenName: "__NAME (__VALUE)",
};

function genGpl(name, propObj, tmpl = stdTmpl) {
    let header = `GIMP Palette
Name: ${name}
#
`;
    let colors = [];

    tokens(propObj, ({ name, value }) => {
        let rgb = hexRgb(value);
        if(rgb === null) return;

        const token = {
            name: tmpl.tokenName
                .replaceAll("__NAME", name)
                .replaceAll("__VALUE", value),
            rgb: rgb.red + " " + rgb.green + " " + rgb.blue
        }
        
        colors.push(token.rgb + " " + token.name);
    });

    let body = colors.join("\n");

    return header + body;
}

export { genGpl };