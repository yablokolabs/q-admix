import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef();

  const navigation = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Resources", href: "/#resources" },
  ];

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (menuBtnEl.current && !menuBtnEl.current.contains(target)) {
        setState(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="relative">
      {/* Mobile header removed */}
      <nav
        className={`pb-5 md:text-sm md:static md:block ${
          state ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900" : "hidden"
        }`}
      >
        <div className="custom-screen items-center md:flex">
          {/* Header removed */}
          {/* Navigation removed as requested */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
