import { langs, strigifyFile } from "../../dist/corallia.js";

import tokens from "./tokens/index.js";
var scss = langs.scss;

const fakeLang = {
    extname: 'fake',
    grammar: {
        var: {
            def: "$$__NAME: __VALUE",
            usage: "$$__NAME",
            nameCase: "_"
        }
    }
}

strigifyFile({
    in: {
        data: tokens,
    },
    proc: {
        minify: false,
        grammar: scss.grammar,
    },
    out: {
        dirname: "./src/test/dist/",
        filename: "test",
        extname: scss.extname
    },
});