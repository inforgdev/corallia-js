import octopizeTokens from "./octopizeTokens.js";

export default function coralliaProc(data, meta) {
    return octopizeTokens(data, meta.grammar);
}