import React from "react";

interface SummaryDetails {
  transactionCount: number;
  totalAmount: number;
}

const Summary: React.FC<SummaryDetails> = ({
  transactionCount,
  totalAmount,
}) => {
  return (
    <section className="mt-5 p-4 bg-gray-50 rounded-md shadow-sm">
      <header>
        <h3 className="text-lg font-semibold  text-gray-800">Summary</h3>
      </header>
      <div className="summary-content mt-2 text-gray-700">
        <p>
          <span className="font-medium">Transactions:</span> {transactionCount}
        </p>
        <p>
          <span className="font-medium">Total:</span> ${totalAmount.toFixed(2)}
        </p>
      </div>
    </section>
  );
};

export default Summary;
