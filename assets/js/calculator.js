const submitBtn = document.querySelector(".calculate-btn");
const errorTexts = document.querySelectorAll(".hidden");
const defaultFooter = document.querySelector(".default");
const resultFooter = document.querySelector(".footer-inner");
const iconTexts = document.querySelectorAll(".bg");
submitBtn.addEventListener("click", handleclick);
clearBtn.addEventListener("click", handleClear);
console.log(submitBtn);

function handleclick() {
  errors();
  calculate();
}


function calculate() {
  
  const totalAmount = amountInput.value;
  const yearTerm = yearsInput.value;
  const interest = rateInput.value;
  
  const monthlyInterest = ((interest / 100) / 12);
  const totalPayment = (yearTerm * 12);


  const monthlyPayment = (totalAmount * monthlyInterest) / (1 - Math.pow(1 +  monthlyInterest, -totalPayment));
  const totalRepayment = monthlyPayment * totalPayment;

  monthlyResult.innerText = "£" + Number(monthlyPayment.toFixed(2)).toLocaleString();
  totalResult.innerText = "£" + Number(totalRepayment.toFixed(2)).toLocaleString();
  resultFooter.style.display = "block";
  defaultFooter.style.display = "none";
}


function handleClear() {
  amountInput.value = "";
  yearsInput.value = "";
  rateInput.value = "";
  resultFooter.style.display = "none"
  defaultFooter.style.display = "block";
  hiddenBlock.style.display = "none";
  hiddenBlock2.style.display = "none";
  hiddenBlock3.style.display = "none";
}


function errors () {
  if (amountInput.value.trim() === "") {
    hiddenBlock.style.display = "block";
  }

  if (yearsInput.value.trim() === "") {
    hiddenBlock2.style.display = "block";
    bgg.style.backgroundColor = "rgba(215, 51, 40, 1)";
    bgg.style.color = "white";
  }

  if (rateInput.value.trim() === "") {
    hiddenBlock3.style.display = "block";
  }
}
