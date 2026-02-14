"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import vector from "/public/vector.png";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";
import LinkButton from "@/components/layout/LinkButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 lg:flex-row-reverse lg:justify-between h-[10rem] lg:h-[0.1rem] lmd:h-[1rem] xlg:h-[35rem]">
      {/* Desktop view */}
      {/* <div className="relative w-60 h-60 lg:w-[25rem] lg:h-[25rem] lmd:w-[38rem] lmd:h-[38rem] xlg:w-[45rem] xlg:h-[45rem] hidden lg:block">
        <Image src={vector} fill className="opacity-70" />
        <span className="flex flex-col text-center absolute top-[5rem] right-[-3.2rem] lg:top-[9.5rem] lg:right-[1.5rem] lmd:top-[14rem] lmd:right-[3.3rem] xlg:top-[17rem] xlg:right-28 w-[20rem] lmd:w-[30.6rem]">
          <strong>Gasparini Contabilidade,</strong>
          <mark>há mais de 50 anos</mark>
          <strong>ajudando empresas!</strong>
        </span>
      </div> */}

      {/* Mobile view */}
      {/* <div className="relative w-full max-w-xs h-60 lg:max-w-xl lg:h-80 lmd:max-w-2xl lmd:h-96 xlg:max-w-3xl xlg:h-[30rem] mx-auto block lg:hidden">
        <Image
          src={vector || "/placeholder.svg"}
          fill
          className="opacity-70 object-contain"
          alt="Vector background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex flex-col text-center w-full max-w-xs lg:max-w-md lmd:max-w-lg px-4 ">
            <strong className="text-2xl">Gasparini Contabilidade,</strong>
            <mark className="bg-transparent text-2xl">há mais de 50 anos</mark>
            <strong className="text-2xl">ajudando empresas!</strong>
          </span>
        </div>
      </div> */}

      <section className="flex flex-col items-center justify-center gap-6 lg:items-start">
        {/* <mark className="absolute top-0 left-10">Presencial e a distância</mark> */}

        <span className="flex flex-col absolute top-10 left-5 lg:left-10">
          <mark>Somos referência no setor contábil,</mark>
          <strong>há mais de 50 anos, comprometidos com a ética,</strong>
          <mark>a transparência e o compromisso.</mark>
        </span>
        {/* <div className="flex flex-col items-center justify-center gap-6 lmd:flex-row">
          <LinkButton
            href="/servicos"
            name="Conheça soluções presenciais e online"
          />
          <Link
            href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
            target="_blank"
            className="flex gap-2 items-center hover:opacity-80"
          >
            <h3>Fale com um especialista</h3>
            <ArrowRight />
          </Link>
        </div> */}
      </section>
    </section>
  );
};

export default HeroSection;
