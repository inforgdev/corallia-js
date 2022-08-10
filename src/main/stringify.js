import { stringify as octopoStringify } from "octopo-js";
import octopize from "./octopize.js";

export default function stringify(options) {
    const coralliaTokens = options.in.data;
    const octopoTokens = octopize(coralliaTokens, {
        data: options.in.grammar,
    });
    options.in.data = octopoTokens;
    options.out.file = undefined;
    
    return octopoStringify(options);
};