console.log("Script is running!");
const Read = require('file-reader');
const Write = require('write');


const REDMAX = 12;
const GREENMAX = 13;
const BLUEMAX = 14;

let fileContent = Read.file("rawData.txt");
let usableText = refactorText(fileContent);
writeUsable(usableText);
checkForAmmount(usableText);


function refactorText(text) {
    text = text.replaceAll(";", ",")
    text = text.replaceAll(":", ' =["');
    text = text.replaceAll(",", '","')
    text = text.replaceAll("\r", '"]\r' )
    text = "[" + text + "]]"
    return text;
}

/** 
 *  Write the usable data to a file for safe keeping.
 *  And just cause i can.
*/ 
function writeUsable(text){
    Write.sync('./useableData.txt', text);
} 

function checkForAmmount(){

}
/*TODO: Loop through the games to find out which are possible
    First: make Array from String
    Second: Loop through all the games
    Third: check for color and then check if color smaller than max
        Return game false if number > max
    Four: if game possible return game number
*/

