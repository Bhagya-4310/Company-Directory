const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="mt-6 flex justify-center space-x-2">

      <button
        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 bg-gray-900 text-white"
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 border rounded-lg ${
            currentPage === i + 1
              ? "bg-gray-900 text-white"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 bg-gray-900 text-white"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;