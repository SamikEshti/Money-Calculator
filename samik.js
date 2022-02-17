function myCalculator(){
    var rentExpense = Number(rent.value);
    var foodExpense = Number(food.value);
    var clothesExpense = Number(clothes.value);
    
    var sumIncome = Number(income.value);
    var balance = Number(sumIncome-sumExpense);

    if(sumIncome>=0 && rentExpense>=0 && foodExpense>=0 && clothesExpense>=0){
        var sumExpense = rentExpense + foodExpense + clothesExpense;
        var balance = Number(sumIncome-sumExpense);

        document.getElementById("totalExpenses").innerHTML = "Total Expense: " + sumExpense ;
        document.getElementById("totalBalance").innerHTML = "Balance: " + balance ;
    }
    else{
        document.getElementById("error").innerHTML="Negative values are not acceptable";
        document.getElementById("totalExpenses").style.display = "none" ;
        document.getElementById("totalBalance").style.display = "none" ;
    }

    document.getElementById("totalExpenses").innerHTML = "Total Expense: " + sumExpense ;
    document.getElementById("totalBalance").innerHTML = "Balance: " + balance ;
}

function percentCalculation(){
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