import ContactForm from "@/components/layout/ContactForm";
import LinkButton from "@/components/layout/LinkButton";
import { WhatsappIcon } from "@/components/svgs";

const ContactDoubtSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 bg-[#E9E9E9] lg:flex-row lg:justify-between lg:px-20 lg:py-16 lg:gap-32 lmd:py-32 lmd:gap-20 xlg:px-[16rem] xlg:py-[11.5rem] xlg:gap-[17rem]">
      <section className="flex flex-col gap-6 lg:items-start">
        <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
          <section>
            <strong>Faça mais pelo seu negócio.</strong>
            <h1>Deixe nossa equipe contábil guià-lo!</h1>
          </section>
          <p>
            Com uma trajetória de excelência que ultrapassa 50 anos, nosso
            escritório contábil se dedica a oferecer um atendimento excepcional
            e serviços de qualidade inigualável. Nosso compromisso com a
            precisão, a inovação e a satisfação total do cliente nos posiciona
            como líderes na entrega de soluções contábeis personalizadas e
            eficazes.
          </p>
        </article>
        <div className="flex justify-center">
          <LinkButton
            wppButton
            icon={<WhatsappIcon />}
            name="Contatar via WhatsApp"
          />
        </div>
      </section>
      <ContactForm buttonName="Enviar Dúvida" hasMessage />
    </section>
  );
};

export default ContactDoubtSection;
