"use client";
import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

import Link from "next/link";
import { WhatsappIcon } from "../svgs";

const ContactBar = () => {
  return (
    <div className="flex min-w-full bg-[#E9E9E9] justify-between py-2 px-8 border-b border-[#cbcbcb] items-center">
      <div className="flex lg:gap-8 lmd:gap-16 ">
        <span className="flex items-center gap-1 group">
          <Mail className="w-4 mt-1 group-hover:text-[#6f6f6f]" />
          <a href="mailto:atendimento01@moacyrcontabil.com.br?subject=Contato Moacyr Contabilidade do E-mail&body=Corpo do E-mail">
            <small className="group-hover:text-[#6f6f6f]">
              atendimento01@moacyrcontabil.com.br
            </small>
          </a>
        </span>

        <span className="flex items-center gap-1 group">
          <Phone className="w-4 mt-1 group-hover:text-[#6f6f6f]" />
          <a href="tel:+551938932236">
            <small className="group-hover:text-[#6f6f6f]">(19) 3893 2236</small>
          </a>
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <Link
          href="https://www.instagram.com/moacyrgasparinicontabilidade/"
          target="_blank"
          className="hover:text-[#6f6f6f]"
        >
          <Instagram className="w-8" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
          target="_blank"
          className="hover:text-[#6f6f6f]"
        >
          <WhatsappIcon className="w-6" />
        </Link>
        <Link
          href="https://www.facebook.com/moacyrcontabil/"
          target="_blank"
          className="hover:text-[#6f6f6f]"
        >
          <Facebook className="w-6" />
        </Link>
      </div>
    </div>
  );
};

export default ContactBar;
