import * as fs from 'fs';
//

export function day3() {
    console.log("Day3");
    const fileContent = fs.readFileSync("E:/Code/AdventOfCode/src/2023/Day3/testData.txt", "utf-8")
    const lineArray: string[] = fileContent.split("\r\n");
    let charArray1: string[];
    let charArray2: string[];
    let charArray3: string[];

    for (let i = 0; i < lineArray.length - 2; i++) {
        charArray1 = lineArray[i].split("");
        charArray2 = lineArray[i + 1].split("");
        charArray3 = lineArray[i + 2].split("");
        yolo(charArray1, charArray2, charArray3);
    }

    function yolo(
        charArray1: string[],
        charArray2: string[],
        charArray3: string[]
    ) {
        let number: string = "";

        let tempKeep: string = "";
        for (let i = 0; i < charArray1.length; i++) {
            if (parseInt(charArray1[i])) {
            }
        }
        console.log(tempKeep);
    }
}



/*TODO: 
Read File content ✅
Substring lines✅
Add substringArray of line to textArray ✅
Loop through char Array to check for digit ->
if next index != digit Then number = digits
Check if any digit has symbol around it (NaN && !"."):
    Get the 8 values on positions around digit
    3From line above , left and right, 3 from line below
    ***
    *5*
    ***
*/
