var initialPrice = document.querySelector("#initial");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current");
var submit = document.querySelector("#submit");
var output = document.querySelector("#output");

submit.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(Quantity.value);
  var cur = Number(currentPrice.value);

  calculate(ip, qty, cur);
}

function calculate(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPer = (loss / initial) * 100;

    outputShow("Total loss is " + loss + "₹ and Loss percentage " + lossPer + " %");
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPer = (profit / initial) * 100;

    outputShow("Total profit is " + profit + "₹ and Profit percentage " + profitPer + " %");
  } else if(current = initial)
  {
    outputShow("No Profit No Loss");
  }
}
function outputShow(message) {
  output.innerHTML = message;
}