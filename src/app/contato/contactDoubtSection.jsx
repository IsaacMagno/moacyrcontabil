import ContactForm from "@/components/layout/ContactForm";
import { MessageCircle, Phone } from "lucide-react";

const contacts = [
  {
    href: "https://wa.me/551938935794",
    label: "(19) 3893-5794 (Whatsapp Fiscal)",
    Icon: MessageCircle,
  },
  {
    href: "https://wa.me/551938935765",
    label: "(19) 3893-5765 (Whatsapp Contabil)",
    Icon: MessageCircle,
  },
  {
    href: "https://wa.me/551938935774",
    label: "(19) 3893-5774 (Whatsapp Trabalhista)",
    Icon: MessageCircle,
  },
  {
    href: "https://wa.me/551938932236",
    label: "(19) 3893-2236 (Whatsapp Recepção)",
    Icon: MessageCircle,
  },
  {
    href: "tel:+551989030762",
    label: "(19) 9-8903-0762",
    Icon: Phone,
  },
  {
    href: "tel:+551989023579",
    label: "(19) 9-8902-3579",
    Icon: Phone,
  },
];

const ContactDoubtSection = () => {
  return (
    <section className="w-full bg-[#E9E9E9] py-10 lg:py-14 xl:py-16">
      <div className="site-wrap flex flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-14">
        <section className="flex w-full min-w-0 flex-col lg:max-w-xl xl:max-w-2xl">
          <article className="flex flex-col gap-3">
            <p className="text-base leading-relaxed text-zinc-700 md:text-lg lg:text-xl">
              Está com alguma dúvida sobre legislação? Conosco você tem
              GRATUITAMENTE a vantagem de agendar uma visita presencial com um
              de nossos profissionais em sua empresa!
            </p>
            <ul className="flex flex-col gap-1.5 text-sm md:gap-2 md:text-base lg:text-lg">
              {contacts.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-start gap-2 rounded-md py-0.5 font-normal leading-snug text-zinc-700 transition-colors hover:text-brand-green"
                  >
                    <Icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark transition-colors group-hover:text-brand-green sm:h-[1.125rem] sm:w-[1.125rem]"
                      aria-hidden
                      strokeWidth={2}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>
        <div className="w-full shrink-0 lg:max-w-md">
          <ContactForm buttonName="Enviar Dúvida" hasMessage />
        </div>
      </div>
    </section>
  );
};

export default ContactDoubtSection;
