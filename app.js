//Selectors
const amtBudget = document.getElementById('amt-budget');
const myBudget = document.getElementById('my-budget');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const listExpenses = document.getElementsByClassName('list-expenses');
const expenseButton = document.getElementById('expense-button');
const listItems = document.getElementById('list-items');
const li = document.getElementById('add');
const addSpan = document.getElementById('add-span');
var amtLeft = document.getElementById('amt-left');


//Event Listeners
myBudget.addEventListener("keydown",getAmount);
expenseButton.addEventListener('click', addExpenseItem);


//Functions
function getAmount(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        amtBudget.textContent = "Budget:" + "$" + myBudget.value;
        amtLeft.textContent = "Left:" + "$" + myBudget.value;
        amtLeft.value = myBudget.value;
        myBudget.textContent = '';
       
    }
}


function addExpenseItem(){ 
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    newSpan.classList.add('amount')
    
    const newExpenseName = expenseName.value;
    const newExpenseAmount = expenseAmount.value;

    newSpan.append(newExpenseAmount);
    listItems.appendChild(newLi).append(newExpenseName,newSpan);
    
    trackBudget()
    expenseAmount.value = '';
    expenseName.value = '';
}

function trackBudget() {
    amtLeft -= expenseAmount.value;
    console.log(amtLeft)
}

