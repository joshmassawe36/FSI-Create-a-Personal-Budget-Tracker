let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here


for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + response
}

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + response
}

for(let i = 0; i < annualExpenseQuestions.length; i++){
    let response = parseInt(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + response
}