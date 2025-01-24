import question from "../svgs/question.svg";
import Search from "../svgs/Search.svg";
import Menu from "../svgs/Menu.svg";
import Menu2 from "../svgs/Menu2.svg";
import Hamburger from "../svgs/Hamburger.svg";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sm:gap-4  gap-2 sm:px-8 px-4 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#FFFFFF]">
      <button className="sm:hidden">
        <img src={Hamburger} alt="" />
      </button>
      <div className="w-1/3 flex gap-2 sm:gap-4 items-center sm:flex-grow">
        <h5 className="text-[#1A181E] font-medium text-xl">Payouts</h5>
        <div className="flex flex-row gap-[6px] text-xs text-[#4D4D4D] items-center">
          <img src={question} alt="help" />
          <p className="hidden md:block text-xs">How it works</p>
        </div>
      </div>
      <div className="w-1/3 flex bg-[#F2F2F2] rounded-md px-4 py-[9px] text-[#808080] text-[15px] leading-[22px] gap-[8px]">
        <img src={Search} alt="search" />
        <input
          className="w-full bg-[#F2F2F2] outline-none"
          type="text"
          placeholder="Search feature, tutorials, etc"
        />
      </div>
      <div className="w-1/3 flex gap-4 flex-grow justify-end">
        <img src={Menu} />
        <img src={Menu2} />
      </div>
    </header>
  );
};

export default Navbar;
