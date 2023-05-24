"use client";

import Wrapper from "../UI/Wrapper";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const SaveExpenseDataHandler = (expense) => {

    const Expense = {
        ...expense,
        id: Math.random().toString()
    };
    console.log("In NewExpense");
    console.log(Expense);

    // Forwarding data to Page.js 
    props.onAddExpense(Expense)
    
  };

  return (
    <Wrapper>
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </Wrapper>
  );
};

export default NewExpense;
