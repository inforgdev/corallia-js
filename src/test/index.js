import { langs, corallia } from "../../dist/corallia.js";

import tokens from "./tokens/index.js";
var scss = langs.scss;

const fakeLang = {
    extname: "fake",
    grammar: {
        var: {
            def: "$$__NAME: __VALUE",
            usage: "$$__NAME",
            nameCase: "_",
        },
    },
};

corallia({
    in: {
        data: tokens,
    },
    proc: {
        minify: false,
        grammar: scss.grammar,
    },
    out: {
        file: {
            dirname: "./src/test/dist/",
            name: "test",
            extname: scss.extname,
        },
        print: true,
    },
});