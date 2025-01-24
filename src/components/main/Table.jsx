import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableNav from "./TableNav";
import DataTable from "./DataTable";
import TableFooter from "./TableFooter";

// importing data
import { tableData } from "../../data/static";
const Table = () => {
  const [currentPageData, setCurrentPageData] = useState(1);
  const rowsPerPage = 20;

  const lastIndex = currentPageData * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const records = tableData.slice(firstIndex, lastIndex);

  const numberOfPages = Math.ceil(tableData.length / rowsPerPage);
  const pagination = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  const onPrevClick = () => {
    if (currentPageData !== firstIndex) setCurrentPageData(currentPageData - 1);
  };

  const onNextClick = () => {
    if (currentPageData !== lastIndex) setCurrentPageData(currentPageData + 1);
  };

  const changeCurrentPage = (id) => {
    setCurrentPageData(id);
    console.log(id);
  };

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <p className="font-medium text-xl">Transactions | This Month</p>
      <div
        className="p-3 pb-6 rounded-lg bg-white"
        style={{
          boxShadow: "0px 2px 6px 0px #1A181E0A",
        }}
      >
        <div className="flex flex-col gap-3 w-full">
          <TableNav />
          <TableHeader />
          <DataTable data={records} />
        </div>
        <TableFooter
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
          currentPageData={currentPageData}
          changeCurrentPage={changeCurrentPage}
          pagination={pagination}
        />
      </div>
    </div>
  );
};

export default Table;
