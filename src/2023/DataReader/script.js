const prompt = require("prompt-sync")({sigint: true})

const test = prompt()
console.log("Script is running");
console.log(test);



function lineBreakTextToArray() {
	let fileValue = document.getElementById("inputfile").files[0]
	let fr = new FileReader();
	let test; 
	fr.onload=function() {
		text = '["' + fr.result.replace(/\n/g, '","') + '"]';
		text =  text.replace(/\s/g, "");
		test = fr.result;
	}
	fr.readAsText(fileValue)
	
	appendToOutput(fr.result)
	
	//fr does have a result property that holds the data that i need but fr.result is null ...
}


function appendToOutput(text) {
	document.getElementById("output").append(text);
}