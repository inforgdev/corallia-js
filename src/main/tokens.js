function tokens(propObj, cb) {
    const config = {
        wordSep: "-",
    };

    function concatData(propObj, parent) {
        for(var propName in propObj) {
            var propValue = propObj[propName];
            
            const newParent = parent == undefined ?
                propName :
                parent + config.wordSep + propName;
            
            if(propValue instanceof Object) {
                concatData(propValue, newParent);
                continue;
            }

            const token = {
                name: newParent,
                value: propValue,
            };

            cb(token);
        };
    }

    concatData(propObj);
};

export { tokens };