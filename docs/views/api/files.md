# File Content Generation

## `genGpl`

This function generates a GIMP palette file with the given `name` and `propObj` as input, and an optional template `tmpl`.

The function iterates through the propObj and uses the `hex-rgb` library to convert the hex color value to RGB format and also uses `renderTokens` function to convert the propObj to json object. Then it uses the `tmpl` to format the palette entry and join all the entries with new line separator.

Parameters:
* **name**: the name of the GIMP palette to be generated;
* **propObj**: an object containing properties and values to be transformed into GIMP palette entries;
* **tmpl?**: the template for the GIMP palette entry. It defaults to `stdTmpl` which is `{NAME} ({VALUE})`.

Returns: a string of the GIMP palette file generated.