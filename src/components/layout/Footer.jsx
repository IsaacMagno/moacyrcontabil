import React from "react";
import Link from "next/link";

import { Mail } from "lucide-react";
import { navbarButtonList } from "@/helpers/navBarButtonText";
import { ClockIcon, LocationIcon, LogoIcon, PhoneIcon } from "../svgs";
import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#E9E9E9] gap-[0.625rem] py-[1.3125rem] px-8">
      <div className="flex flex-col items-center justify-center w-full gap-4 py-[0.625rem] lg:flex-row lg:justify-between xlg:px-32">
        <a href="/inicio" aria-label="Página inicial">
          <LogoIcon className="w-36 lmd:w-[14rem]" />
        </a>
        <LinkButton
          href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
          target="_blank"
          name="Solicite um orçamento"
        />
      </div>

      <div className="flex flex-col items-center py-4 gap-6 w-full border-t border-[#cbcbcb] lg:py-8 lg:gap-10 lmd:flex-row lmd:gap-[10rem] lmd:justify-center">
        <div className="flex flex-col items-start w-full gap-6 lg:flex-row lg:gap-32 lg:justify-center lmd:gap-16 lmd:h-[19.31rem] lmd:justify-between lmd:w-[36rem]">
          <div className="flex flex-col items-start gap-2 w-full lg:w-[19.5rem]">
            <h2>Gasparini Contabilidade</h2>
            <small>
              Almejamos impactar positivamente a vida dos nossos clientes,
              capacitando-os a contribuir significativamente para o progresso do
              Brasil.
            </small>
          </div>

          <div className="flex flex-col items-start gap-2 w-full lg:w-[18.5rem] lmd:w-[8.5rem]">
            <h2>Navegação</h2>
            <ul className="flex flex-col">
              {navbarButtonList.map((button, index) => (
                <li>
                  <Link href={button[index][1]}>
                    <small className="hover:text-[#6f6f6f]">
                      {button[index][0]}
                    </small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start w-full gap-6 lg:flex-row lg:gap-32 lg:justify-center lmd:gap-16 lmd:h-[19.31rem] lmd:justify-between lmd:w-[40rem]">
          <div className="flex flex-col items-start gap-2 w-full lg:w-[19.5rem]">
            <h2>Especialidades</h2>
            <div className="flex flex-col gap-1">
              <small>Prevenção de risco empresarial</small>
              <small>Planejamento e controle financeiro</small>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full lg:w-[18.5rem]">
            <h2>Como nos achar</h2>
            <section className="flex items-center gap-2">
              <span>
                <LocationIcon className="w-5 lmd:w-8" />
              </span>
              <div className="flex flex-col items-start">
                <small>Rua Cezira de Queiroz, 474 - Centro</small>
                <small>Pedreira - São Paulo</small>
                <small>CEP 13920-000</small>
              </div>
            </section>
            <small className="flex gap-2">
              <span className="w-5 lmd:w-8">
                <ClockIcon />
              </span>
              Segunda à Sexta das 7:00 ás 17:00
            </small>
            <small className="flex gap-2">
              <span className="w-5 lmd:w-8">
                <PhoneIcon />
              </span>
              (19) 3893 2236
            </small>
            <a
              className="flex gap-2 items-center group"
              href="mailto:atendimento01@moacyrcontabil.com.br?subject=Contato Moacyr Contabilidade do E-mail&body=Corpo do E-mail"
            >
              <Mail className="w-4 group-hover:text-[#6f6f6f] lmd:w-16 lmd:pr-[2rem]" />
              <small className="group-hover:text-[#6f6f6f] lg:hidden">
                Email de contato
              </small>
              <small className="hidden group-hover:text-[#6f6f6f] lg:block lmd:ml-[-2rem]">
                atendimento01@moacyrcontabil
              </small>
            </a>
          </div>
        </div>
      </div>

      <small className="w-[12.5rem] lg:w-full lg:text-center">
        &copy; 2024 Gasparini Contabilidade. Todos os direitos reservados.
      </small>
    </div>
  );
};

export default Footer;
