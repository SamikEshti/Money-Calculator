function myFunction(){
    var rentExpense = Number(rent.value);
    var foodExpense = Number(food.value);
    var clothesExpense = Number(clothes.value);

    if (rentExpense < 0 || foodExpense <0 || clothesExpense <0)
    {
        console.log("error");
        break;
    }
    else{
        continue;
    }
    
    var sumIncome = Number(income.value);
    var sumExpense = rentExpense + foodExpense + clothesExpense;
    var balance = Number(sumIncome-sumExpense);

    document.getElementById("totalExpenses").innerHTML = "Total Expense: " + sumExpense ;
    document.getElementById("totalBalance").innerHTML = "Balance: " + balance ;
}

function percentCal(){
    var rentExpense = Number(rent.value);
    var foodExpense = Number(food.value);
    var clothesExpense = Number(clothes.value);
    
    var sumIncome = Number(income.value);
    var sumExpense = rentExpense + foodExpense + clothesExpense;
    var balance = Number(sumIncome-sumExpense);
    
    var percentValue = Number(percent.value);
    var totalSaving = (percentValue/100)*sumIncome;
    var finalSaving = balance - totalSaving;

    document.getElementById("saving").innerHTML = "Saving Amount: " + totalSaving ;
    document.getElementById("remaining").innerHTML = "Remaining Balance: " + finalSaving ;
}