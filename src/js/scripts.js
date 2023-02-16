async function main() {
    // Initialize
    recursiveCharacters("Hello, world!");
}
function recursiveCharacters(remainingString)
{
    // If it's a letter - all symbols, numbers, etc will be the same lower and upper case.
    // Process
    if (remainingString[0].toLowerCase() !== remainingString[0].toUpperCase())
    {
        output(remainingString[0].toLowerCase());
    }
    // Modify
    let slicedString = remainingString.slice(1);
    // Test
    if (slicedString.length > 0)
    {
        recursiveCharacters(slicedString);
    }   
}

/*
Input: Any string composed of any characters.

If the first character in the string is a letter
    Output that letter
Cut the first letter off the string and store that modified string in slicedString
If slicedString has any characters left, call this method recursively


--start--

"Yes"

"Y" !== "y" (is a letter)
    Output "y"
Set slicedString to "es"
"es" length > 0
    Call again

"es"

"E" !== "e" (is a letter)
    Output "e"
Set slicedString to "s"
"s" length > 0
    Call again

"s"

"S" !== "s" (is a letter)
    Output "e"
Set slicedString to ""
"" length NOT > 0

--end--

*/