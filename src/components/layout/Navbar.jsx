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
    <div className="sticky top-0 z-40 flex flex-col border-b border-zinc-800/90 bg-zinc-950/90 py-2 shadow-lg shadow-black/20 backdrop-blur-md md:py-2.5">
      <CSSTransition
        in={menuActive}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
      >
        <div
          className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-80"
          onClick={handleShowMenu}
        />
      </CSSTransition>

      <CSSTransition
        in={menuActive}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="fixed right-0 top-0 z-50 h-full w-64 overflow-auto border-l border-zinc-700 bg-zinc-900 p-5 shadow-xl">
          <div className="flex flex-col items-end ">
            <X
              className="h-5 w-5 cursor-pointer text-gray-300 transition-colors hover:text-brand-yellow"
              onClick={handleShowMenu}
            />
            <ul className="flex min-w-full flex-col gap-2">
              {navbarButtonList.map((button, index) => (
                <li
                  key={index}
                  className="flex flex-grow items-center justify-center gap-3 rounded-lg border border-zinc-700/80 bg-zinc-800 font-semibold text-gray-200 transition-colors hover:border-brand-yellow/40 hover:bg-zinc-700"
                >
                  <Link
                    href={button[index][1]}
                    className="flex h-12 w-full flex-row items-center justify-center rounded-lg px-2 hover:cursor-pointer hover:text-brand-yellow"
                    onClick={() => setMenuActive(false)}
                  >
                    <p className="text-center text-xs sm:text-sm">
                      {button[index][0]}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>

      {menuActive ? (
        <div className="absolute top-0 z-50 min-h-screen bg-black"></div>
      ) : null}
      <div className="site-wrap flex justify-between lg:items-center">
        <div className="flex flex-col gap-4">
          <Link
            href="/inicio"
            aria-label="Página inicial"
            className="block text-white"
          >
            <LogoIcon className="w-28 sm:w-32 lg:w-40" />
          </Link>
        </div>

        <div className="mt-2 block lg:mt-0 lg:hidden">
          <Menu
            onClick={handleShowMenu}
            className="h-6 w-6 cursor-pointer text-gray-200 transition-colors hover:text-brand-yellow"
            aria-expanded={menuActive}
            aria-label="Abrir menu"
          />
        </div>
        <ul className="hidden gap-4 lg:flex lg:gap-6">
          {navbarButtonList.map((button, index) => (
            <li key={index}>
              <Link
                href={button[index][1]}
                target={`${index === 0 ? "_blank" : ""}`}
              >
                <span className="text-sm font-medium text-gray-200 transition-colors hover:text-brand-yellow lg:text-base">
                  {button[index][0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
