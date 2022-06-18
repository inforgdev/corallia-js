# CoralliaJS

## About

CoralliaJS is a design system token compiler, currently for LessCSS, SCSS and Stylus.

* Minified;
* Support modern preprocessors: currenly LessCSS, SCSS and Stylus;
* Support variables.

## Example

Input (*example.js*):

```js
import corallia from "corallia-js";

const tokens = {
    color: {
        "white": "#fff",
        "black": "#000",
        "gray": {
            "1": "#1a1a1a",
            "2": "#333333",
            "3": "#4d4d4d",
            "4": "#666666",
            "5": "#808080",
            "6": "#999999",
            "7": "#b2b2b2",
        },
        "primary": "$color-white",
    }
};

const scss = corallia.langs.scss;

corallia.compileFile({
    in: {
        data: tokens,
    },
    process: {
        minify: false,
        grammar: scss.grammar,
    },
    out: {
        basedir: "./src/example/dist/",
        filename: "example",
        extname: scss.extname
    },
});
```

Output (*./src/example/dist/example.scss*):

```less
$color-white: #fff;
$color-black: #000;
$color-gray-1: #1a1a1a;
$color-gray-2: #333333;
$color-gray-3: #4d4d4d;
$color-gray-4: #666666;
$color-gray-5: #808080;
$color-gray-6: #999999;
$color-gray-7: #b2b2b2;
$color-primary: $color-white;
```

## Installation

Download and install via NPM from Github repository:

```sh
npm install --save-dev inforgdev/corallia-js
```

For usage using ESM, import it in JS file:

```js
import 'corallia-js';
```

## Documentation

Working in progress.

## License

[Click here to see the license.](./license.md)

## Support

If there is some question, contact us via e-mail or any social media.

## Contributing

If you have any problems, catch the bug or have any suggestion - please find an existing issue or create new on Github.