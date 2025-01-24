const createTablerow = ({ transaction }) => {
  return (
    <div className="h-[48px] py-[9px] px-[12px] flex items-center justify-between gap-[35px]">
      <p className="w-1/4 text-sm text-[#146EB4] font-medium">
        {transaction.orderId}
      </p>
      <p className="w-1/4 text-sm text-[#1A181E]">{transaction.orderDate}</p>
      <p className="w-1/4 text-sm text-[#1A181E] text-right">
        {transaction.orderAmount}
      </p>
      <p className="w-1/4 text-sm text-[#1A181E] text-right">
        {transaction.transactionFees}
      </p>
    </div>
  );
};

export default createTablerow;
