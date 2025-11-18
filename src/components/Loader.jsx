import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <FiLoader className="w-12 h-12 text-gray-700 animate-spin mx-auto mb-4" />
      <p className="text-gray-700">Loading companies...</p>
    </div>
  );
};

export default Loader;