let userInputElement = document.getElementById("userInput")

function message() {
    let userInputValue = userInputElement.value;
    if (userInputValue.length < 10) {
        alert("Enter Valid Mobile Number");
    }
    if (userInputValue.length > 10) {
        alert("Enter Valid Mobile Number");
    }
    if (userInputValue.length === 10) {
        let openlink = "https://wa.me/" + "+91" + userInputValue;
        window.open(openlink, '_blank').focus();
    }
}
