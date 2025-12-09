import { FiSearch } from "react-icons/fi";

const Filters = ({
  industries,
  locations,
  searchTerm,
  setSearchTerm,
  selectedIndustry,
  setSelectedIndustry,
  selectedLocation,
  setSelectedLocation,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  viewMode,
  setViewMode,
  paginationInfo
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6 border border-gray-200">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Search */}
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-700 mb-2">Search Companies</label>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Industry</label>
          <select
            value={selectedIndustry}
            onChange={e => setSelectedIndustry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            {industries.map(ind => (
              <option key={ind} value={ind}>
                {ind === "all" ? "All Industries" : ind}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Location</label>
          <select
            value={selectedLocation}
            onChange={e => setSelectedLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            {locations.map(loc => (
              <option key={loc} value={loc}>
                {loc === "all" ? "All Locations" : loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-gray-200">

        <span className="text-sm text-gray-600">
          Showing {paginationInfo.start}-{paginationInfo.end} of {paginationInfo.total}
        </span>

        <div className="flex items-center space-x-3">

          <select
            value={sortField}
            onChange={e => setSortField(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
          >
            <option value="name">Sort by Name</option>
            <option value="employees">Sort by Employees</option>
            <option value="founded">Sort by Founded</option>
          </select>

          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-100"
          >
            {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
          </button>

          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("card")}
              className={`px-3 py-1 text-sm ${viewMode === "card" ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1 text-sm ${viewMode === "table" ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}
            >
              Table
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Filters;
