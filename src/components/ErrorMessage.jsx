import { FiAlertCircle } from "react-icons/fi";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <FiAlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 text-center">Error</h2>
        <p className="text-gray-600 text-center">{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;