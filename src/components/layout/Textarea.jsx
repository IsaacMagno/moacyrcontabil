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
      rows={3}
      className="min-h-[6rem] w-full resize-y rounded-lg border-0 bg-white px-2 py-2 text-xs text-zinc-900 outline-none ring-1 ring-zinc-400/30 focus:ring-2 focus:ring-brand-yellow"
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
