"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { Menu, X } from "lucide-react";
import { navbarButtonList } from "@/helpers/navBarButtonText";
import { LogoIcon } from "../svgs";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleShowMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="flex flex-col bg-[#E9E9E9] px-10 py-4 z-50">
      <CSSTransition
        in={menuActive}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
      >
        <div
          className="min-h-screen bg-black bg-opacity-80 fixed inset-0 z-50"
          onClick={handleShowMenu}
        />
      </CSSTransition>

      <CSSTransition
        in={menuActive}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="bg-[zinc-600] fixed h-full right-0 top-0 z-50 w-64 p-5 overflow-auto">
          <div className="flex flex-col  items-end ">
            <X
              className="navbar-contact-buttons text-zinc-100"
              onClick={handleShowMenu}
            />
            <ul className="flex flex-col min-w-full gap-2">
              {navbarButtonList.map((button, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-center justify-center bg-zinc-300 hover:opacity-80 flex-grow rounded font-semibold"
                >
                  <Link
                    href={button[index][1]}
                    className="flex items-center justify-center flex-row w-full h-12 rounded-md hover:cursor-pointer"
                    onClick={() => setMenuActive(false)}
                  >
                    <p>{button[index][0]}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>

      {/* NavBar Buttons */}
      {menuActive ? (
        <div className="min-h-screen bg-black absolute top-0 z-50"></div>
      ) : null}
      <div className="flex justify-between lg:items-center">
        <div className="flex flex-col gap-4 0">
          <Link href="/inicio" aria-label="Página inicial">
            <LogoIcon className="w-36 lg:w-[12rem] lmd:w-[18.3rem]" />
          </Link>
        </div>

        <div className="block mt-2 lg:mt-0 lg:hidden">
          <Menu onClick={handleShowMenu} className="navbar-contact-buttons" />
        </div>
        <ul className="hidden lg:flex gap-6 xlg:gap-12">
          {navbarButtonList.map((button, index) => (
            <li key={index}>
              <Link
                href={button[index][1]}
                target={`${index === 0 ? "_blank" : ""}`}
              >
                <h2 className="hover:text-[#6f6f6f]">{button[index][0]}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
