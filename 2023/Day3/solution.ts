const Read = require('file-reader');
//

console.log("Script is running");
const fileContent: String = Read.file("testData.txt");
const lineArray: String[] = fileContent.split("\r\n");
let charArray: String[];
let line1: String;
let line2: String;
let line3: String;

for (let i = 0; i < lineArray.length; i++) {
    lineArray[i].substring(0, lineArray.length);
}






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


/* 
Jetzt ist nathürlich hier die Frage.
Brauch ich in dem Falls nen Itterator oder eher nicht so.
Eigentlich schon weil ich muss ja das LineArray eins hoch und eins runter gehen.
Also macht warscheinlich ein for hier mehr sinn als ein foreach
*/