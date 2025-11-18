const CompanyTable = ({ companies }) => {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold">Company</th>
              <th className="px-6 py-3 text-xs font-semibold">Industry</th>
              <th className="px-6 py-3 text-xs font-semibold">Location</th>
              <th className="px-6 py-3 text-xs font-semibold">Employees</th>
              <th className="px-6 py-3 text-xs font-semibold">Founded</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {companies.map(company => (
              <tr key={company._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{company.name}</td>
                <td className="px-6 py-4">{company.industry}</td>
                <td className="px-6 py-4">{company.location}</td>
                <td className="px-6 py-4">{company.employees}</td>
                <td className="px-6 py-4">{company.founded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;