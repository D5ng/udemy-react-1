import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expense({ items }) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => setFilterYear(selectedYear);

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filterYear}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
