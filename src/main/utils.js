import path from "path";

function dist(outOptions) {
    let dirname = outOptions.file.dirname;
    let extname = outOptions.file.extname;
    let name = outOptions.file.name;
    if (!extname.startsWith(".")) extname = `.${extname}`;
    return path.join(dirname, name).concat(`${extname}`);
}

export default {
    dist,
};