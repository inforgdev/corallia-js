import { writeFileSync } from "fs";
import compile from "./compile.js";
import utils from "./utils.js";

export default function compileFile(options) {
    var fileData = compile(
        options.in.data,
        options.process
    );
    var fileDist = utils.dist(options.out);
    writeFileSync(fileDist, fileData);
}