# Example

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
    type: 'var',
    name: 'color-white',
    expression: { type: 'val', expression: '#fff' }
  },
  {
    type: 'var',
    name: 'color-black',
    expression: { type: 'val', expression: '#000' }
  },
  {
    type: 'var',
    name: 'color-gray-1',
    expression: { type: 'val', expression: '#1a1a1a' }
  },
  {
    type: 'var',
    name: 'color-gray-2',
    expression: { type: 'val', expression: '#333333' }
  },
  {
    type: 'var',
    name: 'color-gray-3',
    expression: { type: 'val', expression: '#4d4d4d' }
  },
  {
    type: 'var',
    name: 'color-primary',
    expression: { type: 'val', expression: '$color-white' }
  }
]
```