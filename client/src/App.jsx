import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Dashboard from "./components/Dashboard";
import AIInsight from "./components/AIInsight";

function App() {

  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter((expense) => expense.id !== id);
    setExpenses(updated);
  };

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="container">

      <header className="header">
        <h1>AI Expense Tracker</h1>
        <p>Track your daily expenses easily</p>
        <h2>Total Expense: ₹{total}</h2>
      </header>

      <div className="dashboard">

        <div className="left">
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
          />
        </div>

        <div className="right">
          <Dashboard expenses={expenses} />
          <AIInsight expenses={expenses} />
        </div>

      </div>

    </div>
  );
}

export default App;