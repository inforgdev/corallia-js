# CoralliaJS

## About

CoralliaJS is a CSS preprocessor agnostic design system token stringifier.

* Minified;
* Support modern preprocessors: currently LessCSS, SCSS and Stylus;
* Support variables.

## Example

Input (*example.js*):

```js
import { coralliaProc } from "corallia-js";
import { langs } from "octopo-js";

const lang = langs.scss;
const tokens = {
    color: {
        "white": "#fff",
        "black": "#000",
        "gray": {
            "1": "#1a1a1a",
            "2": "#333333",
            "3": "#4d4d4d",
        },
        "primary": "$color-white",
    },
};

const output = coralliaProc(tokens, { grammar: lang });
console.log(output);
```

Output (*Console*):

```scss
[
  {
    type: 'v',
    name: 'color-white',
    expression: { type: 'val', expression: '#fff' }
  },
  {
    type: 'v',
    name: 'color-black',
    expression: { type: 'val', expression: '#000' }
  },
  {
    type: 'v',
    name: 'color-gray-1',
    expression: { type: 'val', expression: '#1a1a1a' }
  },
  {
    type: 'v',
    name: 'color-gray-2',
    expression: { type: 'val', expression: '#333333' }
  },
  {
    type: 'v',
    name: 'color-gray-3',
    expression: { type: 'val', expression: '#4d4d4d' }
  },
  {
    type: 'v',
    name: 'color-primary',
    expression: { type: 'val', expression: '$color-white' }
  }
]
```

## Installation

Download and install via NPM from Github repository:

```bash
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