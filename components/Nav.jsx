import React from "react";
import { headerLogo } from "../public/assets/images";
import { hamburger } from "../public/assets/icons";
import Image from "next/image";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="logo" height={29} width={130} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href="item.href"
                className="font-motserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
