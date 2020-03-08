//Selectors
const amtBudget = document.getElementById('amt-budget');
const myBudget = document.getElementById('my-budget');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const listExpenses = document.getElementsByClassName('list-expenses');

//Event Listeners
myBudget.addEventListener("keydown",getAmount)

//Functions
function getAmount(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        amtBudget.textContent = "Budget:" + "$" + myBudget.value;
        myBudget.value = '';
    }
}