export function renderTokens(tokens) {
    const rendered = tokens;

    Object.keys(tokens).forEach((k) => {
        let v = tokens[k];
        if(v.startsWith("$")) {
            v = tokens[v.replaceAll("$", "")];
            rendered[k] = v;
        }
    });

    return rendered;
}