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
          {/* <p>
            Com uma trajetória de excelência que ultrapassa 50 anos, nosso
            escritório contábil se dedica a oferecer um atendimento excepcional
            e serviços de qualidade inigualável. Nosso compromisso com a
            precisão, a inovação e a satisfação total do cliente nos posiciona
            como líderes na entrega de soluções contábeis personalizadas e
            eficazes.
          </p> */}
          <span className="flex flex-col gap-4">
            <p>
              Está com alguma dúvida sobre legislação? Conosco você tem
              GRATUITAMENTE a vantagem de agendar uma visita presencial com um
              de nossos profissionais em sua empresa!
            </p>
            <p>
              Além disso, nossos canais digitais estão diariamente disponíveis
              para ajudar você cliente:
            </p>
            <ul>
              <li>
                <a href="https://wa.me/551938935794" target="_blank">
                  • (19) 3893-5794 (Whatsapp Fiscal)
                </a>
              </li>
              <li>
                <a href="https://wa.me/551938935765" target="_blank">
                  • (19) 3893-5765 (Whatsapp Contabil)
                </a>
              </li>
              <li>
                <a href="https://wa.me/551938935774" target="_blank">
                  • (19) 3893-5774 (Whatsapp Trabalhista)
                </a>
              </li>
              <li>
                <a href="https://wa.me/551938932236" target="_blank">
                  • (19) 3893-2236 (Whatsapp Recepção)
                </a>
              </li>
              <li>
                <a href="tel:+551989030762">• (19) 9-8903-0762</a>
              </li>
              <li>
                <a href="tel:+551989023579">• (19) 9-8902-3579</a>
              </li>
            </ul>
          </span>
        </article>
        {/* <div className="flex justify-center">
          <LinkButton
            wppButton
            href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
            target="_blank"
            icon={<WhatsappIcon />}
            name="Contatar via WhatsApp"
          />
        </div> */}
      </section>
      <ContactForm buttonName="Enviar Dúvida" hasMessage />
    </section>
  );
};

export default ContactDoubtSection;
