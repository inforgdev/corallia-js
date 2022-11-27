import { langs } from "octopo-js";
import { octopizeTokens } from "../main/octopizeTokens.js";

import * as tokens from "./tokens/index.js";
var lang = langs.scss;

const output = octopizeTokens(tokens, lang);
console.log(output);