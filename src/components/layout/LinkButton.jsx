/**
 * @param {string} props.name - O texto do botão.
 * @param {string} props.href - O URL para o qual o botão direciona.
 * @param {string} [props.icon] - O ícone opcional para ser lado do texto.
 * @param {boolean} [props.hasBorder] - Legado; CTAs usam estilo único.
 * @param {boolean} [props.wppButton] - Botão específico para WhatsApp (verde).
 * @param {function} [props.onClick] - Callback opcional ao clicar.
 */

const LinkButton = ({
  name,
  href,
  icon,
  wppButton,
  hasBorder: _legacyHasBorder,
  onClick,
  target,
}) => {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-3xl border border-transparent px-4 py-2 font-semibold transition-all duration-200 lmd:px-5 lmd:py-3";

  const ctaClasses =
    "bg-[#F6BE25] text-gray-900 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]";

  const wppClasses =
    "flex-row-reverse bg-[#24B600] text-white hover:bg-[#209900] hover:brightness-105 active:scale-[0.98]";

  return (
    <a
      onClick={onClick}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${wppButton ? wppClasses : ctaClasses}`}
    >
      {name}
      {icon ? <div className="w-4 shrink-0 lg:w-6">{icon}</div> : null}
    </a>
  );
};

export default LinkButton;
