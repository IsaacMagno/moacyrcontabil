"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import { createPortal } from "react-dom";
import { navbarButtonList } from "@/helpers/navBarButtonText";
import { WhatsappIcon } from "../svgs";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuActive]);

  return (
    <div className="sticky top-0 z-40 flex flex-col border-b border-zinc-800/90 bg-zinc-950/90 py-2 shadow-lg shadow-black/20 backdrop-blur-md md:py-2.5">
      {mounted && menuActive
        ? createPortal(
            <>
              <div
                className="fixed inset-0 z-[90] min-h-screen bg-black/80 lg:hidden"
                onClick={() => setMenuActive(false)}
              />
              <div className="fixed left-0 top-0 z-[91] h-full w-72 max-w-[85vw] overflow-auto border-r border-zinc-700 bg-zinc-900 p-4 shadow-xl lg:hidden">
                <div className="mb-4 flex w-full items-center justify-end">
                  <button
                    type="button"
                    className="rounded-md p-1 text-gray-300 transition-colors hover:text-brand-yellow"
                    onClick={() => setMenuActive(false)}
                    aria-label="Fechar menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <ul className="flex w-full flex-col gap-2">
                  {navbarButtonList.map((button, index) => (
                    <li key={index}>
                      <Link
                        href={button[index][1]}
                        target={index === 1 ? "_blank" : undefined}
                        className="flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-800 px-2 text-sm font-semibold text-gray-200 transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
                        onClick={() => setMenuActive(false)}
                      >
                        {button[index][0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>,
            document.body
          )
        : null}
      <div className="site-wrap flex items-center justify-between">
        <ul className="hidden gap-4 lg:flex lg:gap-6">
          {navbarButtonList.map((button, index) => (
            <li key={index}>
              <Link
                href={button[index][1]}
                target={`${index === 1 ? "_blank" : ""}`}
              >
                <span className="text-sm font-medium text-gray-200 transition-colors hover:text-brand-yellow lg:text-base">
                  {button[index][0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+551938932236"
            className="flex items-center gap-1 text-gray-300 transition-colors hover:text-brand-yellow"
            aria-label="Telefone"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">(19) 3893 2236</span>
          </a>
          <Link
            href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-brand-yellow"
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/moacyrgasparinicontabilidade/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-brand-yellow"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.facebook.com/moacyrcontabil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-brand-yellow"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-2 block lg:mt-0 lg:hidden">
          <Menu
            onClick={() => setMenuActive(true)}
            className="h-6 w-6 cursor-pointer text-gray-200 transition-colors hover:text-brand-yellow"
            aria-expanded={menuActive}
            aria-label="Abrir menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
