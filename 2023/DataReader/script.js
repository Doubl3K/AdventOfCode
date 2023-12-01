//Reads txt document line by line prints out data for easier conversion to array.
document.getElementById("inputfile").addEventListener("change", function () {
	var fr = new FileReader();
	fr.onload = function () {
		let text = '["' + fr.result.replace(/\n/g, '","') + '"]';
		text =  text.replace(/\s/g, "")
		document.getElementById("output").textContent =
			text
	};

	fr.readAsText(this.files[0]);
});
