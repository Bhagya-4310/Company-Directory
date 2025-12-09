import React, { useState, useEffect } from "react";

// Child Components
import Filters from "./Filters";
import CompanyCard from "./CompanyCard";
import CompanyTable from "./CompanyTable";
import Pagination from "./Pagination";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { FiHome } from "react-icons/fi";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [viewMode, setViewMode] = useState("card");

  // MOCK DATA
  const mockCompanies = [
    { _id: "1", name: "TechCorp Solutions", location: "San Francisco", industry: "Technology", employees: 250, founded: 2015 },
    { _id: "2", name: "Green Energy Inc", location: "Austin", industry: "Energy", employees: 180, founded: 2018 },
    { _id: "3", name: "HealthPlus Medical", location: "Boston", industry: "Healthcare", employees: 450, founded: 2012 },
    { _id: "4", name: "FinanceWise Group", location: "New York", industry: "Finance", employees: 320, founded: 2010 },
    { _id: "5", name: "EduTech Academy", location: "Seattle", industry: "Education", employees: 120, founded: 2019 },
    { _id: "6", name: "RetailMax", location: "Chicago", industry: "Retail", employees: 500, founded: 2008 },
    { _id: "7", name: "CloudNet Systems", location: "San Francisco", industry: "Technology", employees: 280, founded: 2016 },
    { _id: "8", name: "BioGen Research", location: "Boston", industry: "Healthcare", employees: 200, founded: 2014 },
    { _id: "9", name: "AutoDrive Motors", location: "Detroit", industry: "Automotive", employees: 600, founded: 2005 },
    { _id: "10", name: "FoodHub Delivery", location: "Los Angeles", industry: "Food & Beverage", employees: 350, founded: 2017 },
    { _id: "11", name: "SpaceX Ventures", location: "Houston", industry: "Aerospace", employees: 400, founded: 2011 },
    { _id: "12", name: "CyberSecure Pro", location: "Austin", industry: "Technology", employees: 150, founded: 2020 },
  ];

  // API SIMULATION
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCompanies(mockCompanies);
      setFilteredCompanies(mockCompanies);
      setLoading(false);
    }, 800);
  }, []);

  const industries = ["all", ...new Set(companies.map((c) => c.industry))];
  const locations = ["all", ...new Set(companies.map((c) => c.location))];

  // FILTER + SORT LOGIC
  useEffect(() => {
    let result = [...companies];

    if (searchTerm) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedIndustry !== "all") {
      result = result.filter((c) => c.industry === selectedIndustry);
    }

    if (selectedLocation !== "all") {
      result = result.filter((c) => c.location === selectedLocation);
    }

    // Sort
    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      return sortOrder === "asc"
        ? aVal > bVal
          ? 1
          : -1
        : aVal < bVal
        ? 1
        : -1;
    });

    setFilteredCompanies(result);
    setCurrentPage(1);
  }, [searchTerm, selectedIndustry, selectedLocation, sortField, sortOrder, companies]);

  // PAGINATION
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Company Directory</h1>
          <p className="text-gray-600">Browse and filter through our company database</p>
        </div>

        {/* Filters */}
        <Filters
          industries={industries}
          locations={locations}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          viewMode={viewMode}
          setViewMode={setViewMode}
          paginationInfo={{
            start: indexOfLastItem - itemsPerPage + 1,
            end: Math.min(indexOfLastItem, filteredCompanies.length),
            total: filteredCompanies.length,
          }}
        />

        {/* Results */}
        {filteredCompanies.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <FiHome className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl text-gray-800">No companies found</h3>
            <p className="text-gray-600">Try adjusting your filters or search</p>
          </div>
        ) : viewMode === "card" ? (
          <CompanyCard companies={currentCompanies} />
        ) : (
          <CompanyTable companies={currentCompanies} />
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CompanyManagement;