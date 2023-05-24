import ExpenseItem from "./ExpenseItem";

const items = (props) => {
  // Rendering Expenses Components
  return (
    <>
      {/* Alternative Way Using Mapping Function   */}

      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  );
};

export default items;
