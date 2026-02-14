/**
 * @param {string} props.name - O texto do botão.
 * @param {string} props.href - O URL para o qual o botão direciona.
 * @param {string} [props.icon] - O ícone opcional para ser exibido ao lado do texto do botão.
 * @param {boolean} [props.hasBorder] - Define se o botão tem borda.
 * @param {boolean} [props.wppButton] - Define se o botão é específico para WhatsApp.
 * @param {function} [props.onClick] - Define a função que será chamada ao clicar.
 */

const LinkButton = ({ name, href, icon, wppButton, hasBorder, onClick, target }) => {
  return (
    <a
      onClick={onClick}
      href={href}
      target={target}
      className={`${
        !wppButton
          ? `bg-[#F6BE25] hover:text-[#F6BE25] ${
              hasBorder ? "hover:border hover:border-[#F6BE25]" : null
            }`
          : "bg-[#24B600] hover:text-[#24B600] flex-row-reverse"
      } inline-flex justify-center items-center border border-transparent rounded-3xl py-2 px-4 gap-2 hover:bg-[#323231] cursor-pointer lmd:p-3`}
    >
      {name}
      {icon ? <div className="w-4 lg:w-6">{icon}</div> : null}
    </a>
  );
};

export default LinkButton;
