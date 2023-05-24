"use client";

import { useState } from "react";

const ExpenseForm = (props) => {


  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


// Submit Handler

  const SubmitHandler = (event) => {
    // Preventing Reload
    event.preventDefault();

    // if (enteredAmount != "" && enteredDate != "" && enteredName != "") {}

      const expense = {
        title: enteredName,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      
    props.onSaveExpenseData(expense);
    
    setEnteredName("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col gap-8 font-semibold font-[22px] "
      >
        {/* First Row */}

        <div className="flex justify-evenly md:justify-between gap-4 ">
          <div className="">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              className=" w-[150px] md:w-[300px] rounded-lg md:h-[34px] p-2 ml-4"
              type="text"
              id="name"
              onChange={NameChangeHandler}
              value={enteredName}
            />
          </div>

          <div>
            <label htmlFor="price" className="text-white">
              Price $
            </label>
            <input
              type="number"
              className="sm:[100px] md:w-[300px] w-[150px] rounded-lg p-2 md:h-[34px] ml-4"
              id="price"
              min="0.1"
              step="0.1"
              onChange={AmountChangeHandler}
              value={enteredAmount}
            />
          </div>
        </div>

        {/* First Row Ends\*/}

        {/* Second Row \*/}

        <div className="flex justify-evenly md:justify-between gap-4 ">
          <div className="">
            <label htmlFor="date" className="text-white">
              Date
            </label>
            <input
              className="w-[150px] p-2 sm:[100px] md:w-[300px] rounded-lg md:h-[34px] ml-6"
              type="date"
              id="date"
              onChange={DateChangeHandler}
              value={enteredDate}
            />
          </div>

          <div className="">
            <button className=" hover:scale-105 duration-150 focus:bg-purple-500 bg-purple-800 text-white md:w-[300px] rounded-lg md:h-[38px] w-[150px] sm:[100px]">
              Add Expense
            </button>
          </div>
        </div>

        {/* Second Row Ends\*/}
      </form>
    </div>
  );
};

export default ExpenseForm;
