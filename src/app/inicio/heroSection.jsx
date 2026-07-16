"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/../../public/meeting.png";
import AdminLogoGate from "@/components/layout/AdminLogoGate";

const HeroSection = () => {
  return (
    <section
      className="relative isolate flex w-full min-h-[88dvh] flex-col overflow-hidden py-10 text-center md:min-h-[86dvh] md:py-12"
      aria-labelledby="hero-heading"
    >
      <Image
        src={heroBackground}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-zinc-950/80" aria-hidden />
      <div className="relative z-10 flex min-h-[88dvh] w-full flex-col md:min-h-[86dvh]">
        <div className="site-wrap flex flex-1 flex-col items-center justify-center gap-4 md:gap-5">
          <div className="flex max-w-5xl flex-col items-center gap-5 md:gap-6 lg:gap-8">
            <AdminLogoGate
              homeHref={null}
              aria-label="Moacyr Contábil"
              className="mb-12 w-72 text-white sm:mb-14 sm:w-80 md:mb-[4.5rem] md:w-[28rem] lg:mb-24 lg:w-[34rem]"
            />
            <h1
              id="hero-heading"
              className="text-balance px-2 !text-xl !font-bold leading-[1.08] tracking-tight text-white sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-5xl"
            >
              60 anos cuidando de empresas
            </h1>
          </div>
        </div>
        <div className="mt-auto flex justify-center pb-8">
          <a
            href="#servicos"
            aria-label="Rolar para serviços"
            className="inline-flex text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
          >
            <ChevronDown
              className="h-8 w-8 animate-bounce"
              aria-hidden
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
