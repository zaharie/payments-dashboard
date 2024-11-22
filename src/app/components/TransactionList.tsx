import React from "react";
import { Transaction } from "../types";

interface TableProps {
  transactions: Transaction[];
  onSort: (column: keyof Transaction) => void;
}

const TransactionTable: React.FC<TableProps> = ({ transactions, onSort }) => {
  return (
    <section className="overflow-hidden shadow-lg rounded-md border border-gray-300 ">
      <table className="transaction-table w-full bg-gray-50">
        <thead>
          <tr className="table-header-row bg-gray-200">
            <th
              className="table-header px-5 py-3 text-sm font-semibold text-gray-800 cursor-pointer hover:text-indigo-600"
              onClick={() => onSort("id")}
            >
              ID
            </th>
            <th
              className="table-header px-5 py-3  text-sm font-semibold text-gray-800 cursor-pointer hover:text-indigo-600"
              onClick={() => onSort("date")}
            >
              Date
            </th>
            <th className="table-header px-5 py-3 text-sm font-semibold text-gray-800 ">
              Description
            </th>
            <th
              className="table-header px-5 py-3 text-sm font-semibold text-gray-800 cursor-pointer hover:text-indigo-600"
              onClick={() => onSort("amount")}
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr
              key={transaction.id}
              className={`table-row ${
                i % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200`}
            >
              <td className="table-cell px-5 py-4 text-sm text-gray-700">
                {transaction.id}
              </td>
              <td className="table-cell px-5 py-4 text-sm text-gray-700">
                {transaction.date}
              </td>
              <td className="table-cell px-5 py-4 text-sm text-gray-700">
                {transaction.description}
              </td>
              <td className="table-cell px-5 py-4 text-sm text-gray-700">
                ${transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionTable;
