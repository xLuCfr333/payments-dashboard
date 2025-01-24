import { overviewData } from "../../data/static";

// svgs
import question from "../../svgs/question.svg";
import Arrow from "../../svgs/Arrow.svg";
import downArrow from "../../svgs/downArrow.svg";
import whiteQuestionMark from "../../svgs/whiteQuestionMark.svg";
export const RevenueCard = () => {
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h5 className="font-medium text-xl">Overview</h5>
          <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
            This Month <img src={downArrow} alt="dropdown" />
          </button>
        </div>
        <div className="flex gap-7 justify-between flex-wrap mb-4">
          {overviewData.map((data) => (
            <div
              key={data?.id}
              className={
                data?.nxtPayment
                  ? "flex-grow hover:bg-[#0E4F82] bg-[#146EB4] rounded-md text-white min-w-[300px]"
                  : "flex-grow bg-[#FFFFF] rounded-md min-w-[300px]"
              }
            >
              <div className="shadow-md p-4 flex-grow rounded-md min-w-[300px]">
                <div className=" pb-[12px] flex gap-2">
                  <p>{data.content}</p>{" "}
                  {data?.nxtPayment ? (
                    <img src={whiteQuestionMark} alt="questionmark" />
                  ) : (
                    <img src={question} alt="questionmark" />
                  )}
                </div>
                <div className="flex justify-between">
                  <p>{data.amt}</p>
                  {data?.orderCount ? (
                    <p className="flex items-center font-medium text-base underline">
                      {data.orderCount} Orders{" "}
                      <img className="pt-[3px]" src={Arrow} alt="rightArrow" />
                    </p>
                  ) : null}
                </div>
              </div>
              {data?.nxtPayment ? (
                <div className="px-6 py-2 bg-[#0E4F82] flex justify-between text-[#F2F2F2] rounded-[8px]">
                  <p>Next Payment Date:</p>
                  <p>{data.nxtPayment}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
