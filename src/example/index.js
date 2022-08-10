import { langs } from "octopo-js";
import corallia from "../main/corallia.js";

import tokens from "./tokens/index.js";
var lang = langs.scss;

corallia({
    in: {
        data: tokens,
    },
    proc: {
        minify: false,
        grammar: lang,
    },
    out: {
        file: {
            dirname: "./src/example/dest/",
            name: "example",
            extname: lang.extname,
        },
        print: true,
    },
});