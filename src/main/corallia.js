import stringify from "./stringify.js";
import stringifyFile from "./stringifyFile.js";

export default function corallia(options) {
    if(options.out.print) {
        let rootC = stringify(options.in.data, options.proc);
        console.log(rootC);
    }

    if(options.out.file !== undefined) stringifyFile(options);
}