import CreateTablerow from "./CreateTablerow";

const DataTable = ({ data }) => {
  return data.map((transaction) => (
    <CreateTablerow key={transaction.orderId} transaction={transaction} />
  ));
};

export default DataTable;
