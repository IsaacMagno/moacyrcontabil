import { validateEmail } from "./validateEmail";

export const handleClick = async (
  formData,
  setFormData,
  setError,
  defaultData,
  emailType,
  options = {}
) => {
  const requireMessage =
    typeof options.requireMessage === "boolean"
      ? options.requireMessage
      : emailType === "Contact";

  const requiredFields = Object.keys(defaultData);
  const isFormValid = requiredFields.every((field) => {
    if (field === "message") {
      if (emailType !== "Contact" || !requireMessage) {
        return true;
      }
      const msg = formData.message;
      return typeof msg === "string" && msg.trim() !== "";
    }
    if (field === "agree") {
      return formData.agree === true;
    }
    const value = formData[field];
    if (field === "file") {
      return value instanceof File && value.size > 0;
    }
    return (
      value !== undefined && value !== null && value !== ""
    );
  });
  const isValidEmail = validateEmail(formData.email);

  if (!isFormValid || !isValidEmail) {
    setError((prevError) => ({
      ...prevError,
      fields:
        emailType === "Resume" && !(formData.file instanceof File)
          ? "Anexe um currículo em PDF."
          : emailType === "Contact" && formData.agree !== true
            ? "É necessário aceitar os termos para enviar."
            : "Por favor, preencha todos os campos corretamente.",
    }));
    return;
  }

  const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (key === "file" && value instanceof File) {
      formDataToSend.append(key, value);
      return;
    }

    formDataToSend.append(key, String(value));
  });

  formDataToSend.append("emailType", emailType);

  try {
    const response = await fetch("/api/send", {
      method: "POST",
      body: formDataToSend,
    });

    if (!response.ok) {
      let detail = "Falha ao enviar formulário.";
      try {
        const body = await response.json();
        if (body?.error) detail = body.error;
      } catch {
        /* ignore */
      }
      throw new Error(detail);
    }

    setFormData(defaultData);
    setError({ email: "", fields: "" });
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    const msg =
      error instanceof Error ? error.message : String(error);
    setError((prevError) => ({
      ...prevError,
      fields:
        msg.length > 0 && msg !== "Error"
          ? msg
          : "Não foi possível enviar agora. Tente novamente em instantes.",
    }));
  }
};
