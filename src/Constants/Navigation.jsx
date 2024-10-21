import { MdHomeFilled } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <FaTv />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiCameraMovie />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <MdHomeFilled />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
