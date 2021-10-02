var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}
function clickHandler() {
    var inputText = txtInput.value; //taking input
    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
}
btnTranslate.addEventListener("click", clickHandler);
