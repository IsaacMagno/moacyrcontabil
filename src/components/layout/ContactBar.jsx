"use client";
import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

import Link from "next/link";
import { WhatsappIcon } from "../svgs";

const ContactBar = () => {
  return (
    <div className="min-w-full border-b border-zinc-800 bg-zinc-900">
      <div className="site-wrap flex flex-wrap items-center justify-between gap-2 py-1.5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 lg:gap-8 lmd:gap-16">
        <span className="group hidden items-center gap-1 sm:flex">
          <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400 transition-colors group-hover:text-brand-yellow" />
          <a href="mailto:atendimento01@moacyrcontabil.com.br?subject=Contato Moacyr Contabilidade do E-mail&body=Corpo do E-mail">
            <span className="text-xs text-gray-300 transition-colors group-hover:text-brand-yellow">
              atendimento01@moacyrcontabil.com.br
            </span>
          </a>
        </span>

        <span className="group flex items-center gap-1">
          <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400 transition-colors group-hover:text-brand-yellow" />
          <a href="tel:+551938932236">
            <span className="text-xs text-gray-300 transition-colors group-hover:text-brand-yellow">
              (19) 3893 2236
            </span>
          </a>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="https://www.instagram.com/moacyrgasparinicontabilidade/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-colors hover:text-brand-yellow"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-colors hover:text-brand-yellow"
          aria-label="WhatsApp"
        >
          <WhatsappIcon className="w-6" />
        </Link>
        <Link
          href="https://www.facebook.com/moacyrcontabil/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-colors hover:text-brand-yellow"
          aria-label="Facebook"
        >
          <Facebook className="w-6" />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ContactBar;
