import octopize from "./octopize.js";

export default function coralliaProc(data, meta) {
    return octopize(data, meta.grammar);
}