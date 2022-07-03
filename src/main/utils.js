function dist(outOptions) {
    let dirname = outOptions.dirname;
    let extname = outOptions.extname;
    let filename = outOptions.filename;
    if (!extname.startsWith(".")) extname = `.${extname}`;
    return path.join(dirname, filename).concat(`${extname}`);
}

export default {
    dist
}