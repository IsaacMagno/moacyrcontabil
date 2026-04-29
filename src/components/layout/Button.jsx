/**
 * Botão primário do site (ação em formulários). Estilo alinhado ao amarelo Gasparini + texto escuro.
 */

const Button = ({ name, hasBorder: _legacy, onClick, icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-3xl border border-transparent bg-[#F6BE25] px-4 py-2 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6BE25] group lmd:p-2.5"
    >
      {name}
      {icon ? <div className="w-4">{icon}</div> : null}
    </button>
  );
};

export default Button;
