import * as fs from "fs"
/**
 * TODO:
 * Regex to search anything 
 */

export function day3() {
	const fileContent: string = readFileContent("./src/2024/Day3/rawData.txt")
	const allMults: string[] = getAllMults(fileContent)
	const allNumbers: number[][] = getNumbersFromAllMults(allMults)
	const solution: number = getResult(allNumbers)
	console.log("Solution:" + solution)
}

function getResult(allNumbers: number[][]): number {
	let result: number = 0
	allNumbers.forEach((element) => {
		result += multiply(element[0], element[1])
	})
	return result
}

function multiply(x: number, y: number): number {
	return x * y
}

function getNumbersFromAllMults(allMults: string[]) {
	const numbersArray: number[][] = []

	allMults.forEach((mult) => {
		const regex = /[0-9]{1,3}[,][0-9]{1,3}/gm
		let m
		while ((m = regex.exec(mult)) !== null) {
			if (m.index === regex.lastIndex) {
				regex.lastIndex++
			}
			m.forEach((match, groupIndex) => {
				let numberArray: number[] = m[0].split(",")
				numbersArray.push(numberArray)
			})
		}
	})
	return numbersArray
}

function getAllMults(fileContent: string): string[] {
	const arrayOfMulls: string[] = []
	const regex: RegExp = new RegExp(/mul[(][0-9]{1,3}[,][0-9]{1,3}[)]/gm)
	let m
	while ((m = regex.exec(fileContent)) !== null) {
		if (m.index === regex.lastIndex) {
			regex.lastIndex++
		}
		m.forEach((match, groupIndex) => {
			arrayOfMulls.push(m[0])
		})
	}
	return arrayOfMulls
}

function readFileContent(path: string) {
	return fs.readFileSync(path).toString()
}
