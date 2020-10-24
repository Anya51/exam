class TextReader {
  constructor() {
    var _buffer = new FileReader()
    this.setBuffer = function (myFile) { _buffer.readAsBinaryString(myFile) }
    this.getBuffer = function () { return _buffer; }
    this.getText = function () { return _buffer.result; }
  }
}

function drawForm () {
    var input = document.getElementById("myFile");
    var output = document.getElementById("output");
    var textReader = new TextReader()

    input.addEventListener("change", function () {
      if (this.files && this.files[0]) {
        textReader.setBuffer(this.files[0])


        textReader.getBuffer().addEventListener('load', function (e) {
          output.textContent = e.target.result;
        });

        textReader.setBuffer(textReader.getText())
      }
    });
}