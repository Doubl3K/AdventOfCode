import * as fs from "fs"
/**
 * TODO:
 * Read file content
 * Put every line into own array
 * Put arrays in array
 */
export function day2() {
	console.log("day2 2024")
	const fileContent: string = readFileContent("./2024/Day2/rawData.txt")
	const linesArray: string[] = breakByLineIntoArray(fileContent)
	const subArray = createSubArray(linesArray)
	const solution = solve(subArray)
	console.log("Solution: " + solution)
}

function createSubArray(linesArray: string[]): any {
	let linesusArray: string[][] = []
	linesArray.forEach((line) => {
		let lineArray = line.split(" ")
		linesusArray.push(lineArray)
	})
	return linesusArray
}

function solve(subArray: string[][]): number {
	let save: boolean
	let saveCounter: number = 0
	subArray.forEach((array) => {
		if (Number(array[0]) < Number(array[1])) {
			save = checkStrictlyIncreasing(array)
		} else if (Number(array[0]) > Number(array[1])) {
			save = checkStrictlyDeacreasing(array)
		}
		console.log(save)

		if (save) {
			saveCounter++
		}
	})
	return saveCounter
}

function checkStrictlyDeacreasing(array: string[]): boolean {
	let safe: boolean = true
	for (let i = 0; i < array.length - 1; i++) {
		safe = between(Number(array[i]) - Number(array[i + 1]))
		console.log(safe)

		if (!safe) {
			break
		}
	}
	if (safe) {
	}
	return safe
}

function checkStrictlyIncreasing(array: string[]): boolean {
	let safe: boolean = true
	for (let i = 0; i < array.length - 1; i++) {
		safe = between(Number(array[i + 1]) - Number(array[i]))
		if (!safe) {
			break
		}
	}
	if (safe) {
		console.log("safe increasing")
	}
	return safe
}

function between(x: number) {
	const min: number = 1
	const max: number = 3

	if (x >= min && x <= max) {
		return true
	}
	return false
}

// // strictly increasing by less than 3
// function checkIfLinesSafe(lineArray: string[]): number {
// 	let safe: boolean
// 	let safeCounter: number = 0
// 	lineArray.forEach((line) => {
// 		if (Number(line.charAt(0)) < Number(line.charAt(1))) {
// 			console.log("increasing")
// 			console.log(line)
// 			safe = checkIfStrictlyIncreasing(line)
// 		} else if (Number(line.charAt(0)) > Number(line.charAt(1))) {
// 			console.log("deacresing")
// 			console.log(line)
// 			safe = checkifStrictlyDeacresing(line)
// 		} else {
// 			safe = false
// 		}
// 		if (safe) {
// 			safeCounter++
// 		}
// 	})
// 	console.log("Safe Counter: " + safeCounter)
// 	return safeCounter
// }

// function checkIfStrictlyIncreasing(line: string): boolean {
// 	let safe: boolean = true
// 	for (let i = 0; i < line.length - 1; i++) {
// 		safe = between(Number(line.charAt(i + 1)) - Number(line.charAt(i)))
// 		if (!safe) {
// 			break
// 		}
// 	}
// 	if (safe) {
// 		console.log("safe increasing")
// 	}
// 	return safe
// }

// function checkifStrictlyDeacresing(line: string) {
// 	let safe: boolean = true
// 	for (let i = 0; i < line.length - 1; i++) {
// 		safe = between(Number(line.charAt(i)) - Number(line.charAt(i + 1)))
// 		if (!safe) {
// 			break
// 		}
// 	}
// 	if (safe) {
// 		console.log("safe Decreasing")
// 	}
// 	return safe
// }

// function between(x: number) {
// 	const min: number = 1
// 	const max: number = 3
// 	console.log(x)

// 	if (x >= min && x <= max) {
// 		console.log("save number")
// 		return true
// 	}
// 	console.log("unsave number")
// 	return false
// }

function breakByLineIntoArray(fileContent: string): string[] {
	return fileContent.split("\r\n")
}

function readFileContent(path: string): string {
	const fileContent = fs.readFileSync(path)
	return fileContent.toString()
}
