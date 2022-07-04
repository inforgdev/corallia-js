# CoralliaJS

## About

CoralliaJS is a design system token stringifier, currently for LessCSS, SCSS and Stylus.

* Minified;
* Support modern preprocessors: currently LessCSS, SCSS and Stylus;
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
    },
};

const scss = corallia.langs.scss;

corallia({
    in: {
        data: tokens,
    },
    proc: {
        minify: false,
        grammar: scss.grammar,
    },
    out: {
        file: {
            dirname: "./src/example/dist/",
            name: "example",
            extname: scss.extname,
        },
    },
});
```

Output (*./src/example/dist/example.scss*):

```scss
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
import "corallia-js";
```

## Documentation

Working in progress.

## Support

If there is some question, contact us via e-mail or any social media.

## Contributing

[Click here to see the contributing file.](./CONTRIBUTING.md)

## License

[Click here to see the license.](./LICENSE.md)