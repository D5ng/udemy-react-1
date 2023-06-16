import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const { enteredTitle, enteredAmount, enteredDate } = userInput;

  const titleChangeHandler = (event) =>
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  const amountChangeHandler = (event) =>
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: event.target.value,
    }));
  const dateChangeHandler = (event) =>
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
