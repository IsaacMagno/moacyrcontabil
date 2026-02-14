/**
 * @param {string} props.placeholder - O texto do placeholder da textarea.
 * @param {name} props.name - O nome do input.
 * @param {string} props.value - O valor atual do conteúdo da textarea.
 * @param {function} props.onChange - A função a ser chamada quando o conteúdo da textarea é alterado.
 */

const Textarea = ({ placeholder, value, onChange, name }) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      className="w-full h-full p-2 rounded-lg lmd:px-4 lmd:py-3"
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
