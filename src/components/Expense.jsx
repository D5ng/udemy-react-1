import ExpenseItem from './ExpenseItem'
import "./Expense.css"

function Expense({ items }) {
  return (
    <div className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div >
  );
}

export default Expense