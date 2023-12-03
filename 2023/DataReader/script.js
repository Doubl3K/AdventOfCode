async function changeAlgorithm(srciptToRun){
	let key = document.getElementById("scriptPicker").value;
	let text = null;
	switch (key) {
		case "LineBreakTextToArray":
				text = await lineBreakTextToArray();				
				console.log(text);
			break;
	
		default:
			alert("There is something wrong with the selected refactorer")
			break;
	}
	if (text != null) {
		await appendToOutput(text)	
	}else{
		alert("No readable text file")
	}
	
}

async function lineBreakTextToArray() {
	let fileValue = document.getElementById("inputfile").files[0]
	let fr = new FileReader();
	let test; 
	fr.onload=function() {
		text = '["' + fr.result.replace(/\n/g, '","') + '"]';
		text =  text.replace(/\s/g, "");
		test = fr.result;
	}
	fr.readAsText(fileValue)
	
	await appendToOutput(fr.result)
	
	//fr does have a result property that holds the data that i need but fr.result is null ...
}


async function appendToOutput(text) {
	document.getElementById("output").append(text);
}