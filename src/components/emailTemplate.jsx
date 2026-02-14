import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({
  email,
  name,
  phone,
  message,
  agree,
  emailType,
  city,
  maritalStatus,
  age,
  numberChildren,
  technicalFormation,
  higherEducation,
  practicesComment,
  role,
  about,
}) => {
  if (emailType === "Contact")
    return (
      <Html>
        <Head />
        <Preview>Nova solicitação de contato</Preview>
        <Body style={main}>
          <Container style={container}>
            <p>Email: {email}</p>
            <p>Nome: {name}</p>
            <p>Contato: {phone}</p>
            {message && <p>Mensagem: {message}</p>}
            <p>Aceitou termos: {agree ? "Sim" : "Não"}</p>
          </Container>
        </Body>
      </Html>
    );

  if (emailType === "Resume")
    return (
      <Html>
        <Head />
        <Preview>Novo candidato</Preview>
        <Body style={main}>
          <Container style={container}>
            <p>Email: {email}</p>
            <p>Nome: {name}</p>
            <p>Contato: {phone}</p>
            <p>Cidade: {city}</p>
            <p>Estado Civil: {maritalStatus}</p>
            <p>Idade: {age}</p>
            <p>Número de filhos: {numberChildren}</p>
            <p>Formação Técnica: {technicalFormation}</p>
            <p>Formação Superior: {higherEducation}</p>
            <p>Comentário de suas práticas: {practicesComment}</p>
            <p>Cargo pretendido: {role}</p>
            <p>Mais sobre o cargo pretendido: {about}</p>
          </Container>
        </Body>
      </Html>
    );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "68px 20px 130px",
};
