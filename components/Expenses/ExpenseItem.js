import Wrapper from "../UI/Wrapper";
import ExpenseDate from "./ExpenseDate";

// import React from "react";


function ExpenseItem(props) {
  
  return (
    // Parent Container 

    <div className="flex justify-between align-center shadow-md p-3 my-4 rounded-lg bg-gray-700">
      {/* Date */}
      
      <ExpenseDate date={props.date} />    

      {/* Item Name and Price */}
      <div className="flex flex-1 justify-between font-semibold items-center">
        <h2 className="text-lg text-white mx-6 flex-1">{props.title}</h2>

        <div className="text-lg border-[2px] bg-purple-700 rounded-md text-white border-white p-1">
          ${props.amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
