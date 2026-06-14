const { Expense, ExpenseTracker } = require('./expenseTracker');

describe('Expense Tracker Tests', () => {

    let tracker;

    beforeEach(() => {
        tracker = new ExpenseTracker();
    });

    test('adds an expense', () => {
        tracker.addExpense('Lunch', 500, 'Food');

        expect(tracker.expenses.length).toBe(1);
    });

    test('removes an expense', () => {
        tracker.addExpense('Lunch', 500, 'Food');

        tracker.removeExpense('Lunch');

        expect(tracker.expenses.length).toBe(0);
    });

    test('calculates total expenses', () => {
        tracker.addExpense('Lunch', 500, 'Food');
        tracker.addExpense('Transport', 300, 'Travel');

        expect(tracker.getTotalExpenses()).toBe(800);
    });

    test('filters expenses by category', () => {
        tracker.addExpense('Lunch', 500, 'Food');
        tracker.addExpense('Bus', 300, 'Travel');

        const foodExpenses =
            tracker.filterByCategory('Food');

        expect(foodExpenses.length).toBe(1);
    });
});