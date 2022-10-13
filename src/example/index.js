import { langs } from "octopo-js";
import coralliaProc from "../main/coralliaProc.js";

import * as tokens from "./tokens/index.js";
var lang = langs.scss;

const output = coralliaProc(tokens, { grammar: lang });
console.log(output);