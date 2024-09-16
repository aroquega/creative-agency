import { useState } from "react";

import { Menu } from "../components/Menu";

import logo from "../assets/logo.svg";
import menu from "../assets/mobile/icon-hamburger.svg";
import close from "../assets/mobile/icon-cross.svg";
import { Button } from "../components/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex md:items-stretch relative">
      <div className="py-10 px-6 xl:pl-[165px] flex items-center justify-between flex-1 z-10 bg-white">
        <img src={logo} />
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={isOpen ? close : menu} />
        </button>
      </div>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <nav className="hidden md:block bg-red h-full py-[57px] pl-[33px] pr-10 xl:pl-[69px] lg:pr-[165px]">
        <ul className="flex h-full space-x-5 text-white items-center">
          <li className="hover:font-bold px-1">About</li>
          <li className="hover:font-bold px-1">Service</li>
          <li className="hover:font-bold px-1">Projects</li>
          <li>
            <Button variant="primary-2">Schedule a Call</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
