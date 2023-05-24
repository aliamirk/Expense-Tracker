"use client";

import { useState } from "react";
import ExpenseItem from "../components/Expenses/ExpenseItem";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import Wrapper from "../components/UI/Wrapper";

// Iniatializing Dummy Expenses

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


export default function Home() {

  // Using state to add new expense
  const [NewExpenses, setNewExpenses] = useState(expenses);


  // Recieving new expense
  const AddExpenseHandler = (NewExpenseData) => {
    console.log("New Expense Recieved In Page.js");
    console.log(NewExpenseData);


    // Adding New Expense To expenses array
    setNewExpenses((prevExpenses) => {      
      return [NewExpenseData, ...prevExpenses];
    });
    
    console.log("After Added");
    console.log(NewExpenses);
  };

  return (
    <>
      <Wrapper>
        <NewExpense onAddExpense={AddExpenseHandler} />
      </Wrapper>

      <Wrapper>
        {/* Forwarding Expenses to expenses components */}
        <Expenses items={NewExpenses} />
      </Wrapper>
    </>
  );
}
