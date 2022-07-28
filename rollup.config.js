import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./src/main/index.js",
    output: {
        file: "./dist/corallia.js",
    },
    external: [
        "fs",
        "path",
    ],
    plugins: [
        nodeResolve(),
        terser(),
    ],
};