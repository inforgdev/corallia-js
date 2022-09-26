import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("package.json"));

export default {
    input: "./src/main/index.js",
    output: [
        {
            file: pkg.module,
            format: "esm",
            plugins: [ terser() ],
        },
        {
            file: pkg.main,
            format: "cjs",
            plugins: [ terser() ],
        },
    ],
    external: [
        "fs",
        "path",
    ],
    plugins: [
        nodeResolve(),
        terser(),
    ],
};