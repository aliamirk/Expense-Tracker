const ExpenseForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-8 font-semibold font-[22px] text-white">

        {/* First Row */}

        <div className="flex justify-evenly md:justify-between gap-4 ">
          <div className="">
            <label htmlFor="name">Name</label>
            <input
              className=" w-[150px] md:w-[300px] rounded-lg md:h-[34px] ml-4"
              type="text"
              id="name"
            />
          </div>

          <div>
            <label htmlFor="">Price</label>
            <input
              type="number"
              className="sm:[100px] md:w-[300px] w-[150px] rounded-lg md:h-[34px] ml-4"
              id="price"
              min="0.1"
              step="0.1"
            />
          </div>
        </div>

        {/* First Row Ends\*/}

        {/* Second Row \*/}
        
        <div className="flex justify-evenly md:justify-between gap-4 ">

          <div className="">
            <label htmlFor="date">Date</label>
            <input
              className="w-[150px] sm:[100px] md:w-[300px] rounded-lg md:h-[34px] ml-6"
              type="date"
              id="date"
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
