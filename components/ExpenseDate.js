function ExpenseDate(props) {
//  Extracting Day Month and Year 
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (

    <div className="font-medium pt-[8px] text-white bg-[#2a2a2a] flex flex-col w-[5.5rem] h-[5.5rem] border-2 rounded-lg border-[#ececec] items-center justify-center pb-2 ">

      <div className="font-bold text-[16px]">{month}</div>
      <div className="text-[16px]">{year}</div>
      <div className="font-bold text-[24px]">{day}</div>
    </div>
  );
}

export default ExpenseDate;
