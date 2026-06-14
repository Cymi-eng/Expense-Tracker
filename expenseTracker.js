class Expense {
    constructor(description, amount, category) {
        this.description = description;
        this.amount = amount;
        this.category = category;
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }

    addExpense(description, amount, category) {
        const expense = new Expense(description, amount, category);

        this.expenses = [...this.expenses, expense];

        return expense;
    }

    removeExpense(description) {
        this.expenses = this.expenses.filter(
            expense => expense.description !== description
        );
    }

    getTotalExpenses() {
        return this.expenses.reduce(
            (total, expense) => total + expense.amount,
            0
        );
    }

    filterByCategory(category) {
        return this.expenses.filter(
            expense => expense.category === category
        );
    }

     addMultipleExpenses(...expenses) {
        this.expenses = [...this.expenses, ...expenses];
    }

    getAllExpenses() {
        return this.expenses;
    }
}

module.exports = { Expense, ExpenseTracker};