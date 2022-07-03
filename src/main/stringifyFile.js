import { writeFileSync } from "fs";
import stringify from "./stringify.js";
import utils from "./utils.js";

export default function stringifyFile(options) {
    var fileData = stringify(
        options.in.data,
        options.proc
    );
    var fileDist = utils.dist(options.out);
    writeFileSync(fileDist, fileData);
}