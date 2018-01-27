var form = document.querySelector("#form");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    var outputs = document.querySelector("#outputs");
    outputs.innerHTML = "";


    var num1Value = document.querySelector("#num1").value,
        num2Value = document.querySelector("#num2").value;
    
    var num = listSquared(Number(num1Value), Number(num2Value));

    var noOutput = document.querySelector("#no-output");


    num.forEach(function (current) {
        var newLi = document.createElement("li");
        newLi.textContent = "number: " + current[0] + " the sum of the squared divisors: " + current[1];
        outputs.appendChild(newLi);
    })

    if (num.length == 0) {
        noOutput.classList = "";
    } else {
        noOutput.classList = "no-outputs";
    }

});