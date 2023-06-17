import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expense</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
