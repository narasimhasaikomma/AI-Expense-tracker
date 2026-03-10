function AIInsight({ expenses }) {

  if (expenses.length === 0) {
    return <p>No spending data yet.</p>;
  }

  const categoryTotals = {};

  expenses.forEach((expense) => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += Number(expense.amount);
    } else {
      categoryTotals[expense.category] = Number(expense.amount);
    }
  });

  let highestCategory = "";
  let highestAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>AI Insight</h2>

      <p>
        You spent most of your money on <b>{highestCategory}</b>.
      </p>

      <p>
        Consider reducing spending in this category to save more.
      </p>

    </div>
  );
}

export default AIInsight;