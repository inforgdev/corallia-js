import path from "path";

function dist(outOptions) {
    let dirname = outOptions.dirname;
    let extname = outOptions.extname;
    let name = outOptions.name;
    if (!extname.startsWith(".")) extname = `.${extname}`;
    return path.join(dirname, name).concat(`${extname}`);
}

export default {
    dist
}