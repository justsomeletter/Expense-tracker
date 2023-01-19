import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Nike Alligance Man City FC",
    amount: 295,
    date: new Date(2022, 1, 5),
  },
  {
    id: "e2",
    title: "Apple Charger",
    amount: 230.9,
    date: new Date(2021, 5, 13),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 63.7,
    date: new Date(2021, 7, 11),
  },
  {
    id: "e4",
    title: "Poha",
    amount: 82,
    date: new Date(2022, 9, 25),
  },
];

export default function App() {
  //let's add a state to this
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense]; // here we update the state depending upon the previous state, therefore use
    }); // use special function form inside the setExpenses. ty.... :)
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}
