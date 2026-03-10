function ExpenseList({ expenses, deleteExpense }) {

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>

          {expenses.map((expense) => (
            <li
              key={expense.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#222",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            >

              <span>
                {expense.title} - ₹{expense.amount} ({expense.category})
              </span>

              <button
                onClick={() => deleteExpense(expense.id)}
                style={{
                  background: "#ff4d4d",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>

            </li>
          ))}

        </ul>
      )}

    </div>
  );
}

export default ExpenseList;