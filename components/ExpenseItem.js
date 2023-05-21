import Wrapper from "./Wrapper";
function ExpenseItem() {
  return (
    
    // Container
    
    <div className="flex justify-between align-center shadow-md p-3 my-4 rounded-lg bg-gray-700">

      {/* Date */}
      <div className="font-medium pt-[8px]">18 August 2018</div>

      {/* Item Name and Price */}
      <div className="flex flex-1 justify-between font-semibold items-center">

        <h2 className="text-lg text-white mx-6 flex-1">Car Insurance</h2>
        <div className="text-lg border-2 bg-purple-700 rounded-md text-white border-black p-1">$493.90</div>

      </div>
    </div>
  );
}

export default ExpenseItem;
