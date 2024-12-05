import * as fs from "fs"

const FIRST_LETTER: string = "X"
const SECOND_LETTER: string = "M"
const THIRD_LETTER: string = "A"
const FOURTH_LETTER: string = "S"
const CHARS_TO_CHECK: number = 3
let AMMOUNT_OF_XMAS: number = 0

/**
 * TODO:
 * Read File ✔
 * Break into lines arrays ✔
 * Break into array per line  ✔
 * Add line arrays to array ✔
 *
 * add three lines of dots to start and end ✔
 * add three dots to each line at start and end of line ✔
 *
 * Start at looping from line array 4 at index 3 to line array.length -3 at line array.length -3 ✔
 *
 * Check if XMAS right,left,down,up,leftdown,leftup,rightup,rightdown✔
 */

export function day4() {
	console.log("-----")
	console.log("Day 4")
	console.log("-----")

	const usabaleData: string[][] = makeDataUsabale("./src/2024/Day4/rawData.txt")
	loopThroughLines(usabaleData)
	console.log("---------------------------")
	console.log("Ammount of Xmas Found: " + AMMOUNT_OF_XMAS)
	console.log("---------------------------")
}

function loopThroughLines(usabaleData: string[][]) {
	const paddingAmount = 3
	for (let i = paddingAmount; i < usabaleData.length - paddingAmount; i++) {
		for (
			let j = paddingAmount;
			j < usabaleData[i].length - paddingAmount;
			j++
		) {
			checkXmas(usabaleData, i, j)
		}
	}
}

function checkXmas(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
) {
	const firstLetterIsX: boolean = checkFirstLetter(
		usabaleData[lineIndex][charIndex]
	)

	if (firstLetterIsX) {
		checkHorAndVert(usabaleData, lineIndex, charIndex)
		checkDiagonal(usabaleData, lineIndex, charIndex)
	}
}

function checkDiagonal(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
) {
	if (checkUpLeft(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}

	if (checkUpRight(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}

	if (checkDownLeft(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}

	if (checkDownRight(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}
}

function checkUpLeft(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex - 1][charIndex - 1]
	const thirdLetter = usabaleData[lineIndex - 2][charIndex - 2]
	const fourthLetter = usabaleData[lineIndex - 3][charIndex - 3]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function checkUpRight(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex - 1][charIndex + 1]
	const thirdLetter = usabaleData[lineIndex - 2][charIndex + 2]
	const fourthLetter = usabaleData[lineIndex - 3][charIndex + 3]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function checkDownRight(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex + 1][charIndex + 1]
	const thirdLetter = usabaleData[lineIndex + 2][charIndex + 2]
	const fourthLetter = usabaleData[lineIndex + 3][charIndex + 3]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function checkDownLeft(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex + 1][charIndex - 1]
	const thirdLetter = usabaleData[lineIndex + 2][charIndex - 2]
	const fourthLetter = usabaleData[lineIndex + 3][charIndex - 3]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function checkHorAndVert(usabaleData: string[][], lineIndex, charIndex) {
	if (checkLeft(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}

	if (checkRight(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}

	if (checkDown(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}

	if (checkUp(usabaleData, lineIndex, charIndex)) {
		AMMOUNT_OF_XMAS++
	}
}

function checkDown(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex + 1][charIndex]
	const thirdLetter = usabaleData[lineIndex + 2][charIndex]
	const fourthLetter = usabaleData[lineIndex + 3][charIndex]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function checkUp(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex - 1][charIndex]
	const thirdLetter = usabaleData[lineIndex - 2][charIndex]
	const fourthLetter = usabaleData[lineIndex - 3][charIndex]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function checkRight(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex][charIndex + 1]
	const thirdLetter = usabaleData[lineIndex][charIndex + 2]
	const fourthLetter = usabaleData[lineIndex][charIndex + 3]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function checkLeft(
	usabaleData: string[][],
	lineIndex: number,
	charIndex: number
): boolean {
	const secondLetter = usabaleData[lineIndex][charIndex - 1]
	const thirdLetter = usabaleData[lineIndex][charIndex - 2]
	const fourthLetter = usabaleData[lineIndex][charIndex - 3]
	return check(secondLetter, thirdLetter, fourthLetter)
}

function check(
	secondPosistion: string,
	thirdPosition: string,
	fourthPosition: string
) {
	if (checkSecondLetter(secondPosistion)) {
		if (checkThirdLetter(thirdPosition)) {
			if (checkFourthLetter(fourthPosition)) {
				return true
			}
		}
	}
	return false
}

function checkFirstLetter(letterToCheck: string): boolean {
	if (FIRST_LETTER === letterToCheck) {
		return true
	}
	return false
}

function checkSecondLetter(letterToCheck: string): boolean {
	if (SECOND_LETTER === letterToCheck) {
		return true
	}
	return false
}

function checkThirdLetter(letterToCheck: string): boolean {
	if (THIRD_LETTER === letterToCheck) {
		return true
	}
	return false
}

function checkFourthLetter(letterToCheck: string): boolean {
	if (FOURTH_LETTER === letterToCheck) {
		return true
	}
	return false
}

function makeDataUsabale(filePath: string) {
	const fileContent = readFileContent(filePath)
	const linesArray = splitIntoArrayByLine(fileContent)
	const arrayPerLine = eachLineInOwnArray(linesArray)
	return addPadding(arrayPerLine)
}

function addPadding(arrayPerLine: string[][]) {
	let usabaleArray = addLinesAtStartAndEnd(arrayPerLine)
	usabaleArray = addDotsAtStartAndEndOfEachLine(arrayPerLine)
	return usabaleArray
}

function addDotsAtStartAndEndOfEachLine(arrayPerLine: string[][]) {
	const ammountOfDots: number = 3
	arrayPerLine.forEach((array) => {
		for (let i = 0; i < ammountOfDots; i++) {
			array.push(".")
			array.unshift(".")
		}
	})
	return arrayPerLine
}

function addLinesAtStartAndEnd(arrayPerLine: string[][]): string[][] {
	const ammountOfDots: number = arrayPerLine[0].length
	const ammountOfLines: number = 3

	//Add dot array to end of array
	for (let i = 0; i < ammountOfLines; i++) {
		arrayPerLine.push(createDotArray(ammountOfDots))
	}

	//Add dot array to beginning of dot array
	for (let i = 0; i < ammountOfLines; i++) {
		arrayPerLine.unshift(createDotArray(ammountOfDots))
	}
	return arrayPerLine
}

function createDotArray(ammountOfDots) {
	const dotArray: string[] = []
	for (let i = 0; i < ammountOfDots; i++) {
		dotArray.push(".")
	}
	return dotArray
}

function eachLineInOwnArray(linesArray: string[]): string[][] {
	const arrayPerline: string[][] = []
	linesArray.forEach((string) => {
		arrayPerline.push(Array.from(string))
	})
	return arrayPerline
}

function splitIntoArrayByLine(fileContent: string) {
	return fileContent.split("\r\n")
}

function readFileContent(path: string): string {
	return fs.readFileSync(path).toString()
}
