import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <nav className="flex justify-center mt-8 gap-3">
      {pageNumbers.map((pageNumber) => (
        <button
          key={`page-${pageNumber}`}
          onClick={() => onPageChange(pageNumber)}
          disabled={pageNumber === currentPage}
          className={`py-2 px-4  rounded-md  ${
            pageNumber === currentPage
              ? "bg-indigo-600 text-white"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
