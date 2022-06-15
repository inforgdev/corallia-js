function dist(outOptions) {
    if(!outOptions.basedir.endsWith("/")) outOptions.basedir = outOptions.basedir + "/";
    return outOptions.basedir + outOptions.filename + "." + outOptions.extname;
}

export default {
    dist
}