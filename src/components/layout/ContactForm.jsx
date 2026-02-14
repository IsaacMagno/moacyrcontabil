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
    <form className="flex flex-col p-6 gap-8 rounded-lg max-w-[25rem] bg-[#323231] lmd:p-10 lmd:gap-10 lg:rounded-3xl">
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
        <small className="text-red-400 pt-2 mb-[-0.5rem]">{error.email}</small>
      </div>
      <Input
        type="tel"
        placeholder="(xx) x xxxx xxxx"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {hasMessage ? (
        <div className="h-[4.5rem] lmd:h-[8rem]">
          <Textarea
            placeholder="Digite sua mensagem"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      ) : null}
      <small className="text-white mt-[-1.5rem] mb-[-1rem]">
        (Todos campos são obrigatórios.)
      </small>
      <div className="flex gap-2 items-center">
        <label htmlFor="agree" aria-label="Aceitar termos">
          <Input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
        </label>
        <small className="text-white">
          Aceito receber e-mails com ofertas e conteúdos. Prometemos não
          utilizar suas informações para spam, clique aqui e veja nossa Política
          de Dados
        </small>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Button
          onClick={() =>
            handleClick(formData, setFormData, setError, defaultData, emailType)
          }
          name={buttonName}
          hasBorder
        />
        <small className="text-red-400">{error.fields}</small>
      </div>
    </form>
  );
};

export default ContactForm;
