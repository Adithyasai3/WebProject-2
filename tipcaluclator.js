let billAmountInput = document.getElementById("billAmount");
 let percentageTipInput = document.getElementById("percentageTip");
 let tipAmountInput = document.getElementById("tipAmount");
 let totalAmountInput = document.getElementById("totalAmount");
 let errorMessage = document.getElementById("errorMessage");
 let calculateButton = document.getElementById("calculateButton");

 calculateButton.addEventListener("click", function() {
     let billAmount = billAmountInput.value.trim();
     let percentageTip = percentageTipInput.value.trim();

     if (billAmount === "" && percentageTip === "") {
         errorMessage.textContent = "Please enter Bill Amount and Tip Percentage.";
         return;
     } else if (billAmount === "") {
         errorMessage.textContent = "Please enter Bill Amount.";
         return;
     } else if (percentageTip === "") {
         errorMessage.textContent = "Please enter Tip Percentage.";
         return;
     }

     errorMessage.textContent = "";

     let bill = parseFloat(billAmount);
     let tipPercentage = parseFloat(percentageTip);

     let calculatedTip = (tipPercentage / 100) * bill;
     let totalAmount = bill + calculatedTip;

     tipAmountInput.value = calculatedTip.toFixed(2);
     totalAmountInput.value = totalAmount.toFixed(2);
 });