/**
 * @param {string} props.placeholder - O texto do placeholder.
 * @param {name} props.name - O nome do input.
 * @param {string} [props.type] - O tipo de input (por exemplo, 'text', 'password', 'email', etc.).
 * @param {string} [props.value] - O valor atual do input.
 * @param {string} [props.checked] - O valor atual do input com tipo checkbox.
 * @param {function} [props.onChange] - A função a ser chamada quando o valor do input é alterado.
 */

import React from "react";
import InputMask from "@mona-health/react-input-mask";

const Input = ({ placeholder, type, name, value, checked, onChange }) => {
  const mask = type === "tel" ? "(99) 9 9999 9999" : undefined;

  const fieldClass =
    type === "checkbox"
      ? "h-4 w-4 shrink-0 rounded border-zinc-500 accent-brand-yellow"
      : "w-full rounded-lg border-0 bg-white px-2 py-2 text-xs text-zinc-900 outline-none ring-1 ring-zinc-400/30 focus:ring-2 focus:ring-brand-yellow";

  return (
    <InputMask
      mask={mask}
      maskPlaceholder=""
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={fieldClass}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Input;
