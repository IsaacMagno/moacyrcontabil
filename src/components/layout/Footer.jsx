import React from "react";
import Link from "next/link";

import { Mail } from "lucide-react";
import { navbarButtonList } from "@/helpers/navBarButtonText";
import { ClockIcon, LocationIcon, LogoIcon, PhoneIcon } from "../svgs";
import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 border-t border-gray-200 bg-[#E9E9E9] py-8 lg:gap-6 lg:py-10">
      <div className="site-wrap flex flex-col items-center gap-4">
      <div className="flex w-full max-w-6xl flex-col gap-8 border-t border-gray-200/90 py-6 text-center lg:flex-row lg:justify-center lg:gap-16 lg:py-8 lg:text-left">
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-between lg:gap-20">
          <div className="flex w-full flex-col items-center justify-center gap-4 lg:w-auto lg:items-start lg:justify-start">
            <a
              href="/inicio"
              aria-label="Página inicial"
              className="text-brand-dark lg:translate-x-6"
            >
              <LogoIcon className="w-36 lmd:w-[14rem]" />
            </a>
            <div className="lg:self-start">
              <LinkButton
                href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
                target="_blank"
                name="Solicite um orçamento"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 lg:w-48 lg:items-start">
            <h2 className="text-gray-900">Navegação</h2>
            <ul className="flex flex-col gap-1">
              {navbarButtonList.map((button, index) => (
                <li key={index}>
                  <Link href={button[index][1]}>
                    <small className="text-gray-700 hover:text-[#6f6f6f]">
                      {button[index][0]}
                    </small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6 lg:max-w-md lg:items-start">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h2 className="text-gray-900">Como nos achar</h2>
            <section className="flex items-start justify-center gap-2 lg:justify-start">
              <span>
                <LocationIcon className="w-5 lmd:w-8" />
              </span>
              <div className="flex flex-col items-center lg:items-start">
                <small className="text-gray-700">
                  Rua Cezira de Queiroz, 474 - Centro
                </small>
                <small className="text-gray-700">Pedreira - São Paulo</small>
                <small className="text-gray-700">CEP 13920-000</small>
              </div>
            </section>
            <small className="flex items-center justify-center gap-2 text-gray-700 lg:justify-start">
              <span className="w-5 lmd:w-8">
                <ClockIcon />
              </span>
              Segunda à Sexta das 7:00 ás 17:00
            </small>
            <small className="flex items-center justify-center gap-2 text-gray-700 lg:justify-start">
              <span className="w-5 lmd:w-8">
                <PhoneIcon />
              </span>
              (19) 3893 2236
            </small>
            <a
              className="group flex items-center justify-center gap-2 text-gray-700 hover:text-[#6f6f6f] lg:justify-start"
              href="mailto:atendimento01@moacyrcontabil.com.br?subject=Contato Moacyr Contabilidade do E-mail&body=Corpo do E-mail"
            >
              <Mail className="w-4 lmd:w-16 lmd:pr-[2rem]" />
              <small className="lg:hidden">
                Email de contato
              </small>
              <small className="hidden lg:block lmd:ml-[-2rem]">
                atendimento01@moacyrcontabil
              </small>
            </a>
          </div>
        </div>
      </div>

      <small className="w-full max-w-6xl text-center text-gray-600 lg:text-sm">
        &copy; 2026 Gasparini Contabilidade. Todos os direitos reservados.
      </small>
      </div>
    </div>
  );
};

export default Footer;
