let expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

const descriptionInput =
    document.getElementById("description");

const amountInput =
    document.getElementById("amount");

const categoryInput =
    document.getElementById("category");

const expenseList =
    document.getElementById("expenseList");

const totalDisplay =
    document.getElementById("total");

function saveExpenses() {
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

function renderExpenses() {

    expenseList.innerHTML = "";

    expenses.forEach(({ description, amount, category }) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${description} -
            KES ${amount} -
            ${category}
            <button onclick="deleteExpense('${description}')">
                Delete
            </button>
        `;

        expenseList.appendChild(li);
    });

    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    totalDisplay.textContent = total;

    saveExpenses();
}

document.getElementById("addBtn")
.addEventListener("click", () => {

    const expense = {
        description: descriptionInput.value,
        amount: Number(amountInput.value),
        category: categoryInput.value
    };

    expenses.push(expense);

    renderExpenses();

    descriptionInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
});

function deleteExpense(description) {

    expenses = expenses.filter(
        expense => expense.description !== description
    );

    renderExpenses();
}

renderExpenses();