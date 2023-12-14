console.log("Script is running!");
const Read = require('file-reader');
const Write = require('write');

let usableArray =[];
let totalAmmount = 0;

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
    // text = text.replaceAll(" ", "")
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
    let gameBeingPlayed;
    let gamePlayable = true;
    let totalAmmout;
    console.log(usableArray[0]);
    usableArray.forEach(element => {
        element.forEach(gameElement => {
            let valueToTest = gameElement.split(" ");
            if (valueToTest.length < 2) {
                gameBeingPlayed = valueToTest;
                if (gameBeingPlayed == 13) {
                    console.log("13");
                }
            } else {
                const numberOfString = Number(valueToTest[1])
                console.log(valueToTest[1],valueToTest[2]);
                switch (valueToTest[2]) {
                    case "red":
                        if (!(numberOfString <= REDMAX)) {
                            gamePlayable = false;
                        }
                        break;
                    case "green":
                        if (!(numberOfString <= GREENMAX)) {
                            gamePlayable = false;
                        }
                        break;
                    case "blue":
                        if (!(numberOfString <= BLUEMAX)) {
                            gamePlayable = false;
                        }
                        break;
                    case "\s":
                        //nothing ewww
                    default:
                        console.log("woot: " + valueToTest);
                        break;
                }
            }
        });
        console.log(gamePlayable);
        if (gamePlayable == true) {
            totalAmmount = totalAmmount + parseInt(gameBeingPlayed);
        }
        gamePlayable = true;
    });
    console.log(totalAmmount);
}

