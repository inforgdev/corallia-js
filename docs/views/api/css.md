# CSS

## `octopizeTokens`

This function is a utility that takes a design system tokens object and the Octopo grammar object and returns an Abstract Syntax Tree (AST) of that input that later can be used with Octopo to generate CSS code in the desired language.

Parameters:
* **propObj**: the design system tokens object;
* **octopoLang**: this is the grammar rules object that will be used for generating. For more details, check out [Octopo documentation](https://inforg.dev/octopo-js/api/grammars.html).

Returns: an Abstract Syntax Tree (AST) that can be used as input to Octopo.