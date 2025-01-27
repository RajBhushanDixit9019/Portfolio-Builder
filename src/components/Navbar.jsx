import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">
            Portfolio Builder
          </Link>
          <div className="flex gap-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              to="/editor/new"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Create New
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 