import Profile from "../svgs/Profile.svg";
import ChevronDown from "../svgs/ChevronDown.svg";
import { sidebarData } from "../data/static";
import wallet from "../svgs/wallet.svg";

const Sidebar = () => {
  return (
    <>
      <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
        <img src={Profile} alt="Nishyan" />
        <div className="flex flex-col gap-1 w-[108px] justify-center">
          <h5 className="font-medium text-[15px] leading-[22px]">Nishyan</h5>
          <p className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]">
            Visit Store
          </p>
        </div>
        <img src={ChevronDown} alt="" />
      </div>
      <div className="flex flex-col gap-[4px]">
        {sidebarData.map((data) => (
          <button
            className={
              data.id === 7
                ? "w-full px-[16px] py-[8px] flex flex-row gap-[12px] opacity-80 font-medium bg-[#FFFFFF1A] rounded-[4px]"
                : "w-full px-[16px] py-[8px] flex gap-[12px] opacity-80 font-medium hover:bg-[#FFFFFF1A] rounded-[4px]"
            }
            key={data.id}
          >
            <img src={data.logo} alt={data.title} />
            <span className="text-[14px] leading-5">{data.title}</span>
          </button>
        ))}
      </div>
      <button className="bg-[#353C53] h-[54px] w-[192px] rounded py-[6px] px-[12px]">
        <div className="h-[42px] flex flex-row w-[149px] items-center gap-[8px]">
          <img src={wallet} alt="" />
          <div className="flex flex-col gap-[2px] h-full opacity-80 items-start">
            <span className="text-[13px] leading-[16px]">
              Available Credits
            </span>
            <span className="text-base">425.11</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default Sidebar;
