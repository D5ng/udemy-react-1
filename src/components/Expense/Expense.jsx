import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";

function Expense({ items }) {
  return (
    <Card className="expenses">
      <ExpensesFilter />
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expense;
