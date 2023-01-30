import { generate, langs, _root } from "octopo-js";
import { octopizeTokens } from "corallia-js";

import * as tokens from "./tokens/index.js";
const lang = langs.scss;

const output = octopizeTokens(tokens, lang);
const scssData = generate(_root(output), lang);
console.log(scssData);