"use client";

import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import LinkButton from "./LinkButton";
import Dropdown from "./Dropdown";
import { Attach } from "../svgs";
import { validateEmail } from "@/app/utils/validateEmail";
import FileButton from "./FileButton";
import { handleClick } from "@/app/utils/handleClick";
import Button from "./Button";

const ResumeForm = () => {
  const values = ["Trabalhista", "Fiscal", "Contábil", "Auxiliar"];
  const defaultData = {
    email: "",
    name: "",
    address: "",
    city: "",
    maritalStatus: "",
    age: "",
    numberChildren: "",
    phone: "",
    technicalFormation: "",
    higherEducation: "",
    practicesComment: "",
    role: "",
    about: "",
    file: null,
  };

  const emailType = "Resume";
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

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  return (
    <form className="flex flex-col gap-6 rounded-lg bg-[#323231] lmd:w-full">
      <section className="flex flex-col gap-2 items-start w-full">
        <p className="text-white">Currículo (formato.pdf)</p>
        <FileButton onChange={handleFileChange} />
      </section>
      <section className="flex flex-col gap-6 w-[20.5rem] lg:w-[54rem] lmd:w-full">
        <p className="text-white mb-[-1rem]">Dados pessoais:</p>
        <small className="text-white mt-[-0.5rem]">
          (Todos campos são obrigatórios.)
        </small>
        <Input
          name="name"
          value={formData.name}
          type="text"
          placeholder="Nome"
          onChange={handleChange}
        />
        <Textarea
          name="address"
          value={formData.address}
          type="email"
          placeholder="Endereço"
          onChange={handleChange}
        />
        <div className="flex flex-col gap-6 w-[13rem] lg:flex-row lg:w-full">
          <Input
            name="city"
            value={formData.city}
            type="text"
            placeholder="Cidade"
            onChange={handleChange}
          />
          <Input
            name="maritalStatus"
            value={formData.maritalStatus}
            type="text"
            placeholder="Estado Civil"
            onChange={handleChange}
          />
          <Input
            name="age"
            value={formData.age}
            type="number"
            placeholder="Idade"
            onChange={handleChange}
          />
          <Input
            name="numberChildren"
            value={formData.numberChildren}
            type="number"
            placeholder="Número de Filhos"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <small className="text-red-400 mb-[-0.5rem]">{error.email}</small>
        </div>

        <div className="w-[13rem]">
          <Input
            name="phone"
            value={formData.phone}
            type="tel"
            placeholder="(xx) x xxxx xxxx"
            onChange={handleChange}
          />
        </div>
      </section>
      <section className="flex flex-col gap-6 w-[20.5rem] lg:w-[54rem] lmd:w-full">
        <p className="text-white mb-[-1rem]">Informações técnicas:</p>
        <Textarea
          name="technicalFormation"
          value={formData.technicalFormation}
          type="text"
          placeholder="Formação Técnica"
          onChange={handleChange}
        />
        <Textarea
          name="higherEducation"
          value={formData.higherEducation}
          type="text"
          placeholder="Formação Superior"
          onChange={handleChange}
        />
        <Textarea
          name="practicesComment"
          value={formData.practicesComment}
          type="text"
          placeholder="Comentário de suas práticas"
          onChange={handleChange}
        />
        <label htmlFor="role" className="w-[13rem]" aria-label="Cargo pretendido">
          <Dropdown
            name={"role"}
            value={formData.role}
            type="email"
            placeholder="Cargo pretendido"
            values={values}
            onChange={handleChange}
          />
        </label>
        <Textarea
          name="about"
          value={formData.about}
          type="text"
          placeholder="Mais sobre o cargo pretendido"
          onChange={handleChange}
        />
      </section>
      <div className="flex flex-col gap-2">
        <div>
          <Button
            name="Enviar informações"
            onClick={() =>
              handleClick(formData, setFormData, setError, defaultData, emailType)
            }
            hasBorder
          />
        </div>
        <small className="text-red-400">{error.fields}</small>
      </div>
    </form>
  );
};

export default ResumeForm;
