# CoralliaJS

<a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/Contributing-CONTRIBUTING.md-005c99?style=flat&amp;logo=" alt="Contributing"/></a> <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-LICENSE.md-005c99?style=flat&amp;logo=" alt="License"/></a> <a href="README.md"><img src="https://img.shields.io/badge/Documentation-WIP-993d00?style=flat&amp;logo=" alt="Documentation"/></a>

## About

CoralliaJS is a OctopoJS AST generator for design system tokens.

## Features

* 🖌️ **Generate CSS preprocessors files** - powered by OctopoJS;
* 🖼️ **Inkscape and GIMP support** - exports to `.gpl` file;
* ☐ **Support variables** - reuses declared tokens.

## Example

Input (*example.js*):

```js
import { octopizeTokens } from "corallia-js";
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

const output = octopizeTokens(tokens, lang);
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

Download and install via NPM from GitHub repository:

```bash
npm install --save-dev inforgdev/corallia-js
```

For usage using ESM, import it in JS file:

```js
import "corallia-js";
```

## Support

If there is some question, contact us via e-mail or any social media.