const Read = require('file-reader');
//

console.log("Script is running");
const fileContent = Read.file("testData.txt");



/*TODO: 
Read File content ✅
Substring lines
Add substringArray of line to textArray
Loop through line Array to check for digit ->
if next index != digit Then number = digits
Check if any digit has symbol around it (NaN && !"."):
    Get the 8 values on positions around digit
    3From line above , left and right, 3 from line below
    ***
    *5*
    ***
*/
