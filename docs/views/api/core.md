# Core

## `tokens`

This function is a utility that takes an object and a callback function as inputs, it iterates through the object, extracting the properties name and value, concatenating the nested properties name using a separator and passing an object containing that information to the callback function for each property.

Parameters:
* **propObj**: an object containing properties and values;
* **cb**: a callback function that will be called for each property in the input `propObj` with an object containing the name and value of that property as input.

Returns: it does not have an explicit return statement, so it does not return any value. It only calls the callback function for each property.

## `renderTokens`

This function is a utility that takes an object as input, it iterates through the object, checking if the values starts with `$`, if it is the case, it replaces the `$` sign, and look for the value in the tokens object, then it assigns the value found to the key and returns a new object with the updated values.

Parameters:
* **tokens**: an object containing properties and values.

Returns: a new object with the updated values.