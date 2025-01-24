import React from "react";
import { RevenueCard } from "./main/RevenueCard";
import Table from "./main/Table";

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#FAFAFA] flex flex-col gap-[24px] justify-center">
      <RevenueCard />
      <Table />
    </div>
  );
};

export default Dashboard;
