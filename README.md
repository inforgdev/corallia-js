# CoralliaJS

<a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/Contributing-CONTRIBUTING.md-005c99?style=flat&amp;logo=" alt="Contributing"/></a> <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-LICENSE.md-005c99?style=flat&amp;logo=" alt="License"/></a> <a href="README.md"><img src="https://img.shields.io/badge/Documentation-WIP-993d00?style=flat&amp;logo=" alt="License"/></a>

## About

CoralliaJS is a OctopoJS AST generator for design system tokens.

* Minified;
* Powered by OctopoJS;
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

```js
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

## Support

If there is some question, contact us via e-mail or any social media.