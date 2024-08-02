import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-around py-3 bg-gray-900 shadow-sm">
      <h1 className="text-white cursor-pointer">
        <Link to='/'>Social Network</Link>
      </h1>
      <button>
        <Link to="/login" className="text-white">
          Log in
        </Link>
      </button>
    </header>
  );
};

export default Header;
