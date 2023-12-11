console.log("Script is running!");
const Read = require('file-reader');
const Write = require('write');

let usableArray =[];

const REDMAX = 12;
const GREENMAX = 13;
const BLUEMAX = 14;

let fileContent = Read.file("rawData.txt");
let usableText = refactorText(fileContent);
writeUsable(usableText);
checkForAmmount(usableArray);


function refactorText(text) {
    text = text.replaceAll("Game ", "");
    text = text.replaceAll(":", ",")
    text = text.replaceAll(" ", "")
    text = text.replaceAll(";", ",")
    let textArr = text.split("\r\n");
    textArr.forEach(element => {
        usableArray.push(element.split(","))
    });
    return text;
}

/** 
 *  Write the usable data to a file for safe keeping.
 *  And just cause i can.
*/ 
function writeUsable(text){
    Write.sync('./useableData.txt', text);
} 

function checkForAmmount(usableArray){
    console.log(usableArray[0]);
    
}
/*TODO: Loop through the games to find out which are possible
    First: make Array from String | shits fucked bro 
    Second: Loop through all the games
    Third: check for color and then check if color smaller than max
        Return game false if number > max
    Four: if game possible return game number
*/

