//Function to print on webpage
function print(anyvalue) {
    let output = document.createElement('absolute.style.bottom:20px')
    output.innerHTML = anyvalue + ' '
    document.body.appendChild(output)
}

const svgContainer = document.getElementById('svg');

 play = function(){
    const animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: false,
        autoplay: false,
        //path: 'https://assets8.lottiefiles.com/packages/lf20_tkeaajkc.json'
        path: 'https://assets8.lottiefiles.com/packages/lf20_wys2rrr6.json', 
    });
    animItem.goToAndPlay(0,true);
    document.getElementById('svg').innerHTML = '';
     svgContainer.classList.remove('hide');
     animItem.addEventListener('complete', () => {
              svgContainer.classList.add('hide');
     });
 }

let num = Math.floor(Math.random() * 9 + 1);
let count = 0;

document.getElementById("submitBtn").onclick = function() {

    let guess = document.getElementById("textbox").value;
    count+=1;
    if(count == 6) {
        document.getElementById("verdict").style.display="none";    //hide verdict    
        document.getElementById("result").style.display = ""; //show result
        document.getElementById("result").innerHTML = "Sorry, No. of tries exeeded";
        document.getElementById("submitBtn").innerHTML = "Try Again!";
        console.log(`count : ${count} and guess : ${guess} and number : ${num}`);
        num = Math.floor(Math.random() * 9 + 1); count = 0;
    }
    else if(guess == num) {
        document.getElementById("textbox").value = "";
        document.getElementById("textbox").placeholder = "Enter";
        let text = `Congrats, you've guess it in ${count} guesses.`;
        document.getElementById("result").style.display = "";            //show result
        document.getElementById("verdict").style.display = "none";       //hide verict using none
        document.getElementById("result").innerHTML = ("Result: " + text); //print result
        document.getElementById("submitBtn").innerHTML = "Play Again!";
        console.log(`count : ${count} and guess : ${guess} and number : ${num}`);
        var userAgent = navigator.userAgent.toLowerCase();
        var Android = userAgent.indexOf("android") > -1;
        if(Android) {
            navigator.vibrate([130, 70, 50, 70, 120]);
        }
        play();
        num = Math.floor(Math.random() * 9 + 1); count = 0;
    }
    else if(num < guess) {
        document.getElementById("submitBtn").innerHTML = "Submit";
        let text = `The number is smaller`;
        document.getElementById("textbox").value = "";
        document.getElementById("textbox").placeholder = "Try Again!";
        document.getElementById("result").style.display = "none";       //hide result
        document.getElementById("verdict").style.display = "";          //show verdict
        document.getElementById("verdict").innerHTML = ("Verdict: " + text);    //print verdict
        console.log(`count : ${count} and guess : ${guess} and number : ${num}`);
    }
    else {
        document.getElementById("submitBtn").innerHTML = "Submit";
        let text = `The number is larger`;
        document.getElementById("textbox").value = "";
        document.getElementById("textbox").placeholder = "Try Again!";
        document.getElementById("result").style.display = "none";   //hide result
        document.getElementById("verdict").style.display = "";      //show verdict
        document.getElementById("verdict").innerHTML = ("Verdict: " + text);  //print result
        console.log(`count : ${count} and guess : ${guess} and number : ${num}`);
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

function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
