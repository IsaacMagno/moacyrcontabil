import { validateEmail } from "./validateEmail";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://moacyrcontabil.vercel.app";

export const handleClick = (
  formData,
  setFormData,
  setError,
  defaultData,
  emailType
) => {
  const requiredFields = Object.keys(defaultData);
  const isFormValid = requiredFields.every((field) => {
    if (field === "message") {
      return true;
    }
    const value = formData[field];
    return value !== undefined && value !== "";
  });
  const isValidEmail = validateEmail(formData.email);

  if (!isFormValid || !isValidEmail) {
    setError((prevError) => ({
      ...prevError,
      fields: "Por favor, preencha todos os campos corretamente.",
    }));
    return;
  }

  const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (key === "file") {
      formDataToSend.append(key, value[0]); // Adicione o arquivo ao FormData
    } else {
      formDataToSend.append(key, value);
    }
  });
  formDataToSend.append("emailType", emailType); // Adicione o tipo de e-mail

  fetch(`${BASE_URL}/api/send`, {
    method: "POST",
    body: formDataToSend,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });

  setFormData(defaultData);
  setError({ email: "", fields: "" });
};
