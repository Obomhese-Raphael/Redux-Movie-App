import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../Constants/Navigation";

const MobileNavigation = () => {
  return (
    <div className="lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-3xl fixed bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full text-neutral-400 ">
        {mobileNavigation.map((nav, index) => (
          <NavLink
            to={nav.href}
            href={nav.url}
            key={nav.label + "mobilenavigation"}
            className={(isActive) =>
              `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`
            }
          >
            <div className="text-xl">{nav.icon}</div>
            <p className="text-sm">{nav.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
