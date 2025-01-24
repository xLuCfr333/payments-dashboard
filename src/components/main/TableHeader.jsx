import down from "../../svgs/down.svg";
import info from "../../svgs/info.svg";

const TableHeader = () => {
  return (
    <div className="w-full h-[40px] py-[10px] px-[12px] bg-[#F2F2F2] flex items-center justify-between gap-[35px] text-[#4D4D4D] rounded-[4px]">
      <span className="w-1/4 text-sm ">Order ID</span>
      <span className="w-1/4 text-sm gap-[4px] flex items-center ">
        Order Date <img src={down} alt="down" />
      </span>
      <span className="w-1/4 text-sm  text-right">Order Amount</span>
      <span className="w-1/4 text-sm gap-[4px] flex items-center justify-end ">
        Transaction Fees
        <img src={info} alt="fees" />
      </span>
    </div>
  );
};

export default TableHeader;
