import { FiMapPin, FiBriefcase } from "react-icons/fi";

const CompanyCard = ({ companies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map(company => (
        <div
          key={company._id}
          className="bg-white rounded-lg shadow border border-gray-200 hover:shadow-xl"
        >
          <div className="bg-gray-900 p-4">
            <h3 className="text-xl font-bold text-white">{company.name}</h3>
            <span className="inline-block bg-gray-700 text-white text-xs px-2 py-1 rounded">
              {company.industry}
            </span>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center text-gray-700">
              <FiMapPin className="w-4 h-4 mr-2" />
              <span>{company.location}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FiBriefcase className="w-4 h-4 mr-2" />
              <span>{company.employees} employees</span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <span className="text-xs text-gray-500">
                Founded in {company.founded}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCard;
