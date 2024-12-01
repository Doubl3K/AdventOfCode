import * as fs from "fs"
export function day1() {
	console.log("2024:Day1")
	/**
	 * TODO:
	 *
	 * read data from txt file ✔
	 * Put data in list ✔
	 * sort list asc ✔
	 * compare values of list
	 * summ difference of values
	 */
	const fileContent = readFileContent("./2024/Day 1/rawData.txt")
	const unsortedArrays = putInArrays(fileContent)
	const sortedArrays = sortArrays(unsortedArrays)
	console.log(sortedArrays)
	const solution = compareValues(sortedArrays)
	console.log(solution)
}

function compareValues(arraysToCompare: number[][]): number {
	let value = 0
	let valueToAdd = 0
	for (let i = 0; i < arraysToCompare[0].length; i++) {
		valueToAdd = arraysToCompare[0][i] - arraysToCompare[1][i]
		if (valueToAdd < 0) {
			valueToAdd = valueToAdd * -1
		}
		value += valueToAdd
		valueToAdd = 0
	}
	return value
}

function sortArrays(arraysToSort: number[][]): number[][] {
	arraysToSort.forEach((array) => {
		array = array.sort((a: number, b: number) => a - b)
	})
	return arraysToSort
}

function putInArrays(fileContent: string): number[][] {
	let wholeNumber: string = ""
	let numberArray1: number[] = []
	let numberArray2: number[] = []
	let side: boolean = true //left = true  right = false

	fileContent = fileContent.replaceAll("\r\n", " ")
	fileContent = fileContent + " "
	for (let i = 0; i < fileContent.length + 1; i++) {
		if (fileContent.charAt(i) != " " && !isNaN(Number(fileContent.charAt(i)))) {
			for (let j = i; j < fileContent.length; j++) {
				if (fileContent.charAt(j) != " ") {
					wholeNumber += fileContent.charAt(j)
				} else {
					if (side) {
						numberArray1.push(Number(wholeNumber))
					} else {
						numberArray2.push(Number(wholeNumber))
					}
					side = !side
					i = j
					wholeNumber = ""
					break
				}
			}
		}
	}
	const resultArrays: number[][] = [numberArray1, numberArray2]
	return resultArrays
}

function readFileContent(path: string): string {
	const fileContent = fs.readFileSync(path)
	return fileContent.toString()
}
