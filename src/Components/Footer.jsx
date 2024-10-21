import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-40 text-neutral-400 py-2">
      <div className="flex items-center justify-center gap-4">
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <p className="text-sm">
        The content used in this website is intended for educational and
        informational purposes only
      </p>
    </footer>
  );
};

export default Footer;
