function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value); 
    var years = parseInt(document.getElementById("years").value); 

    if(principal <= 0) {
        alert("Please enter a positive number");
    } else {
        var interest = principal * years * rate / 100;
        var amount = principal + interest;

        yearInFuture = parseInt(2021 + years);

        result = document.getElementById("result");
        result.innerHTML = "If you deposit " + principal + ",<br/>at an interest rate of " + rate + "%.<br/>You will receive an amount of " + interest + ",<br/>in the year " + yearInFuture;

    }
    
}

function displayRateValue() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rateVal").innerHTML = rate + "%";

}