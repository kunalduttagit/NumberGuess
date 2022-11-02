//Function to print on webpage
function print(anyvalue) {
    let output = document.createElement('absolute.style.bottom:20px')
    output.innerHTML = anyvalue + ' '
    document.body.appendChild(output)
}

const num = Math.floor(Math.random() * 10 + 1);
let count = 0;

document.getElementById("submitBtn").onclick = function() {
    let guess = document.getElementById("textbox").value;
    count+=1;
    if(count == 6) {
        document.getElementById("result").innerHTML = "Sorry, No. of tries exeeded";
    }
    if(guess == num) {
        let text = `Congrats, you've guessed it in ${count} guesses.`;
        document.getElementById("result").innerHTML = text;
        document.getElementById("Hint").innerHTML = " ";
    }
    else if(num < guess) {
        let text = `The number is smaller`;
        document.getElementById("textbox").value = "";
        document.getElementById("textbox").placeholder = "Try Again!";
        document.getElementById("verdict").innerHTML = text;
    }
    else {
        let text = `The number is larger`;
        document.getElementById("textbox").value = "";
        document.getElementById("textbox").placeholder = "Try Again!";
        document.getElementById("verdict").innerHTML = text;
    }
}

var menu = document.querySelector('.hamburgerMenu');
const offScreen = document.querySelector('.offScreenMenu');
menu.addEventListener('click',() => {
    var userAgent = navigator.userAgent.toLowerCase();
    var Android = userAgent.indexOf("android") > -1;
    if(Android) {
        navigator.vibrate(70);
    }
    menu.classList.toggle('active');
    offScreen.classList.toggle('active');
});
