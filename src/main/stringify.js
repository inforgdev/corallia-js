var grammar = {
    var: {
        name: "__NAME",
        value: "__VALUE",
        pointer: "$",
    },
};

export default function stringify(propObj, procOptions) {
    var options = procOptions;
    var templ = options.grammar;
    var data = "";

    function defineVar(propEntry, templ) {
        var propName = propEntry.name;
        var propValue = propEntry.value;
        
        if(propValue.startsWith(grammar.var.pointer)) {
            var varName = propValue.substring(1, propValue.length);
            var varUsage = templ.var.usage
                .replaceAll(grammar.var.name, varName);
            
            propValue = varUsage;
        }

        return templ.var.def
            .replaceAll(grammar.var.name, propName)
            .replaceAll(grammar.var.value, propValue)
    }

    function concatData(templ, propObj, parent) {
        for(var propName in propObj) {
            var propValue = propObj[propName];
            
            var newParent = parent == undefined ?
                propName :
                parent + templ.var.nameCase + propName;
            
            if(propValue instanceof Object) {
                concatData(templ, propValue, newParent);
                continue;
            }

            var propEntry = {
                name: newParent,
                value: propValue,
            };

            var line = defineVar(propEntry, templ);

            if(!options.minify) line = line + "\n";
            
            data += line;
        };

        return data;
    }

    concatData(templ, propObj);

    return data;
};