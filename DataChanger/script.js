//Reads txt document line by line prints out data for easier conversion to array.
document.getElementById('inputfile')
  .addEventListener('change', function () {

  var fr = new FileReader();
  fr.onload = function () {
    document.getElementById('output')
        .textContent = fr.result.replace(/\s/g, '", "');

  };

  fr.readAsText(this.files[0]);
});
