'use strict';

const switchEl = document.getElementById("switch");
const annuallyEl = document.querySelectorAll(".annually");
const monthlyEl = document.querySelectorAll(".monthly");

// Add / Remove class "hidden" on change
function switchPaymentMethod(annuallyEl, monthlyEl, paymentMethod) {
  for (let i = 0; i < annuallyEl.length && i < monthlyEl.length; i++) {
    if (paymentMethod === "AnnualToMonthly") {
      annuallyEl[i].classList.add("hidden");
      monthlyEl[i].classList.remove("hidden");
    } else if (paymentMethod === "MonthlyToAnnual") {
      annuallyEl[i].classList.remove("hidden");
      monthlyEl[i].classList.add("hidden");
    }
  }
}

// check Annually or Monthly
function checkPaymentMethod() {
  if (switchEl.checked) {
    switchPaymentMethod(annuallyEl, monthlyEl, "AnnualToMonthly");
  } else {
    switchPaymentMethod(annuallyEl, monthlyEl, "MonthlyToAnnual");
  }
}

// Trigger switch movement
switchEl.oninput = function() {
  checkPaymentMethod();
}
