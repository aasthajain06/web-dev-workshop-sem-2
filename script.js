function checkNumber() {
let number = document.getElementById("numberInput").value;
if (number === "") {
document.getElementById("result").innerText = "Please enter a number!";
 return;
    }
if (number % 2 === 0) {
        document.getElementById("result").innerText = number + " is Even";
    }
 else{
       document.getElementById("result").innerText = number + " is Odd";
    }
}



