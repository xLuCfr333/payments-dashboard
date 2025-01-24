import Previous from "../../svgs/Previous.svg";
import Next from "../../svgs/Next.svg";
const TableFooter = ({
  onPrevClick,
  onNextClick,
  changeCurrentPage,
  currentPageData,
  pagination,
}) => {
  return (
    <div className="mt-[24px] mx-auto flex justify-between lg:justify-center flex-row gap-[20px] max-w-full overflow-auto h-[32px]">
      <button
        onClick={onPrevClick}
        className="w-[120px] py-[6px] px-[12px] rounded flex flex-row gap-[16px] items-center justify-center border-[1px]  border-[#D9D9D9] font-medium text-[#4D4D4D]"
      >
        <img src={Previous} alt="prev-page" />
        Previous
      </button>
      <div className="flex flex-row gap-[8px] items-center h-full">
        {pagination.map((n) => (
          <button
            key={n}
            onClick={() => changeCurrentPage(n)}
            className={
              currentPageData === n
                ? "w-[28px] h-[28px] py-[2px] rounded-[4px] text-sm bg-[#146EB4] text-[#FFFFFF]"
                : "w-[28px] h-[28px] py-[2px] rounded-[4px] text-sm text-[#4D4D4D]"
            }
          >
            {n}
          </button>
        ))}
      </div>
      <button
        onClick={onNextClick}
        className="w-[100px] py-[6px] px-[12px] rounded flex flex-row gap-[16px] items-center justify-center border-[1px]  border-[#D9D9D9] font-medium text-[#4D4D4D]"
      >
        Next
        <img src={Next} alt="next-page" />
      </button>
    </div>
  );
};

export default TableFooter;
