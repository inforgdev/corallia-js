function dist(outOptions) {
    if(!outOptions.dirname.endsWith("/")) outOptions.dirname = outOptions.dirname + "/";
    return outOptions.dirname + outOptions.filename + "." + outOptions.extname;
}

export default {
    dist
}