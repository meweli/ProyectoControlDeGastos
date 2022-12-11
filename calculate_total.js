function calculateTotal(incomes, expenses) {
    // Create a variable named total that initializes to 0
    let total = 0;
  
    // Use a for loop to iterate over the incomes array
    for (let i = 0; i < incomes.length; i++) {
      // Use the add_amount function to add the income amount to the total
      total = add_amount("income", incomes[i], total);
    }
  
    // Use another for loop to iterate over the expenses array
    for (let i = 0; i < expenses.length; i++) {
      // Use the add_amount function to subtract the expense amount from the total
      total = add_amount("expense", expenses[i], total);
    }
  
    // Return the total
    return total;
  }

  const total = calculateTotal(incomes, expenses);
