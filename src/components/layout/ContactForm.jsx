/**
 * @param {boolean} props.hasMessage - Define se o formulário inclui um campo de mensagem.
 * @param {string} props.buttonName - O texto a ser exibido no botão de envio.
 */
"use client";

import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { validateEmail } from "@/app/utils/validateEmail";
import { handleClick } from "@/app/utils/handleClick";
import Button from "./Button";

export const defaultData = {
  email: "",
  name: "",
  phone: "",
  message: "",
  agree: false,
};

const emailType = "Contact";

const ContactForm = ({ hasMessage, buttonName }) => {
  const [formData, setFormData] = useState(defaultData);
  const [error, setError] = useState({
    email: "",
    fields: "",
  });

  const submit = (e) => {
    if (e?.preventDefault) e.preventDefault();
    handleClick(formData, setFormData, setError, defaultData, emailType, {
      requireMessage: Boolean(hasMessage),
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") {
      const isValidEmail = validateEmail(value);
      setError((prevError) => ({
        ...prevError,
        email: isValidEmail ? "" : "Por favor, insira um e-mail válido.",
      }));
    }
  };

  return (
    <form
      className="mx-auto flex w-full max-w-md flex-col gap-3 rounded-xl border border-zinc-600/40 bg-[#323231] p-4 shadow-lg md:gap-4 md:p-5 lg:rounded-2xl"
      onSubmit={submit}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3">
        <Input
          type="text"
          placeholder="Digite seu nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="flex flex-col">
          <Input
            type="email"
            placeholder="exemplo@exemplo.com.br"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <small className="mt-1 min-h-[1.1rem] text-xs text-red-400">
            {error.email}
          </small>
        </div>
      </div>

      <Input
        type="tel"
        placeholder="(xx) x xxxx xxxx"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      {hasMessage ? (
        <Textarea
          placeholder="Digite sua mensagem"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      ) : null}

      <small className="text-xs text-white/90">
        (Todos campos são obrigatórios.)
      </small>

      <label className="flex cursor-pointer flex-row items-start gap-3">
        <span className="flex shrink-0 pt-0.5">
          <Input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
        </span>
        <small className="flex-1 text-xs leading-snug text-white/95">
          Aceito receber e-mails com ofertas e conteúdos. Prometemos não
          utilizar suas informações para spam, clique aqui e veja nossa Política
          de Dados
        </small>
      </label>

      <div className="flex w-full flex-col gap-1.5">
        <Button onClick={submit} name={buttonName} hasBorder />
        <small className="text-xs text-red-400">{error.fields}</small>
      </div>
    </form>
  );
};

export default ContactForm;
