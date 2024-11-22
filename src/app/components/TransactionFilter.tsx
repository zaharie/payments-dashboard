import React, { useState } from "react";

interface RangeFilterProps {
  onFilter: (startDate: string, endDate: string) => void;
}

const DateFilter: React.FC<RangeFilterProps> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const applyFilter = () => {
    if (startDate && endDate) {
      onFilter(startDate, endDate);
    }
  };

  return (
    <section className=" flex flex-col lg:flex-row items-center gap-5 py-4 bg-gray-50 rounded-md shadow-sm">
      <div className="filter-item flex flex-col">
        <label
          htmlFor="start-date"
          className="text-sm  font-medium text-gray-700"
        >
          From:
        </label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input-field mt-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="filter-item flex flex-col">
        <label htmlFor="end-date" className="text-sm font-medium text-gray-700">
          To:
        </label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input-field mt-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        onClick={applyFilter}
        className="filter-button bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Filter
      </button>
    </section>
  );
};

export default DateFilter;
