"use client";

import React, { useState, useEffect, useCallback } from "react";
import { fetchTransactions } from "../mock/transactionsMock";
import { Transaction } from "../types";
import TransactionTable from "../components/TransactionList";
import DateFilter from "../components/TransactionFilter";
import Summary from "../components/Summary";
import Pagination from "../components/Pagination";

const DashboardPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filtered, setFiltered] = useState<Transaction[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const recordsPerPage = 5;

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setFiltered(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };
    loadTransactions();
  }, []);

  const filterByDate = useCallback(
    (start: string, end: string) => {
      const filteredData = transactions.filter(
        (tx) => tx.date >= start && tx.date <= end
      );
      setFiltered(filteredData);
      setPage(1);
    },
    [transactions]
  );

  const sortTransactions = useCallback(
    (column: keyof Transaction) => {
      const sortedData = [...filtered].sort((a, b) =>
        a[column] < b[column] ? -1 : 1
      );
      setFiltered(sortedData);
    },
    [filtered]
  );

  const totalPages = Math.ceil(filtered.length / recordsPerPage);
  const currentData = filtered.slice(
    (page - 1) * recordsPerPage,
    page * recordsPerPage
  );

  const totalSum = filtered.reduce((acc, tx) => acc + tx.amount, 0);

  if (error) {
    return (
      <section className="error-section text-red-500 text-center py-4">
        {error}
      </section>
    );
  }

  return (
    <section className="dashboard-wrapper px-4 py-6">
      <DateFilter onFilter={filterByDate} />
      <Summary transactionCount={filtered.length} totalAmount={totalSum} />
      <TransactionTable transactions={currentData} onSort={sortTransactions} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
};

export default DashboardPage;
