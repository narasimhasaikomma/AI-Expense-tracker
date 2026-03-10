import { useState } from "react";

function ExpenseForm({ addExpense }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Item Name (Pizza, Bus Ticket, Netflix)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
        </select>

        <br /><br />

        <button type="submit">Add Expense</button>

      </form>
    </div>
  );
}

export default ExpenseForm;