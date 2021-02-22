function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value); 
    var years = parseInt(document.getElementById("years").value); 

    if(principal <= 0 || isNaN(principal)) {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    } else {
        var interest = principal * years * rate / 100;
        var amount = principal + interest;

        yearInFuture = parseInt(2021 + years);

        result = document.getElementById("result");
        result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>at an interest rate of <mark>" + rate + "%</mark>.<br/>You will receive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + yearInFuture + "</mark>";
        
    }
    
}

function displayRateValue() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rateVal").innerHTML = rate + "%";

}