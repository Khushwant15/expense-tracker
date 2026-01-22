import { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");

  const addExpense = () => {
    if (text === "" || amount === "") return;

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        text,
        amount: Number(amount),
        category,
      },
    ]);

    setText("");
    setAmount("");
    setCategory("");
  };

  const showExpenses = filter
    ? expenses.filter((e) => e.category === filter)
    : expenses;

  const total = showExpenses.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="container">
      <h3>Expense Tracker</h3>

      <input
        placeholder="name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={addExpense}>add</button>

      <input
        placeholder="filter category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {showExpenses.map((e) => (
          <li key={e.id}>
            {e.text} {e.amount}
            <button
              onClick={() =>
                setExpenses(expenses.filter((x) => x.id !== e.id))
              }
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <p>total: {total}</p>
    </div>
  );
}

export default App;
