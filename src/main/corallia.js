import octopo from "octopo-js";
import octopize from "./octopize.js";

export default function corallia(options) {
    const coralliaTokens = options.in.data;
    const octopoTokens = octopize(coralliaTokens, options.proc.grammar);
    options.in.grammar = options.proc.grammar;
    options.in.data = octopoTokens;
    
    octopo(options);
};