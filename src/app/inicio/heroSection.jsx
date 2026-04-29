"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/../../public/meeting.png";

const HeroSection = () => {
  return (
    <section
      className="relative isolate flex w-full min-h-[84dvh] flex-col overflow-hidden py-10 text-center md:min-h-[86dvh] md:py-12"
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
      <div className="relative z-10 flex min-h-[84dvh] w-full flex-col md:min-h-[86dvh]">
        <div className="site-wrap flex flex-1 flex-col items-center justify-center gap-4 md:gap-5">
          <div className="flex max-w-5xl flex-col items-center gap-5 md:gap-6 lg:gap-8">
            <h1
              id="hero-heading"
              className="text-balance px-2 !text-4xl !font-bold leading-[1.08] tracking-tight text-white sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl"
            >
              60 anos cuidando de empresas
            </h1>
            <p className="max-w-4xl px-3 !text-lg !font-medium leading-relaxed text-white sm:!text-xl md:!text-2xl lg:!text-3xl">
              Somos referência no setor contábil. Ética, transparência e
              compromisso com o seu negócio.
            </p>
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
