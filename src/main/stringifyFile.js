import stringify from "./stringify.js";
import { stringifyFile as octopoStringify } from "octopo-js";

export default function stringifyFile(options) {
    const coralliaTokens = options.in.data;
    const octopoTokens = stringify(coralliaTokens, {
        data: options.in.grammar,
    });
    options.in.data = octopoTokens;
    
    octopoStringify(options);
};