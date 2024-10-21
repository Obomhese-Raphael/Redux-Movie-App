import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../Constants/Navigation";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(location.search.slice(3));
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [navigate, searchInput]);

  return (
    <header
      className="fixed top-0 w-full h-16 bg-black 
    bg-opacity-75 z-40"
    >
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to="/">
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className=" hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                  key={nav.label}
                  to={nav.href}
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <form className="flex items-center gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-transparent py-1 px-4 hidden lg:block"
              placeholder="Search here..."
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white cursor-pointer">
              <IoSearchOutline />
            </button>
          </form>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} alt="user_icon" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
