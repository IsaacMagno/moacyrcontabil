/**
 * @param {string[]} props.guides - Um array de strings representando os nomes das guias.
 * @param {React.ElementType[]} props.icons - Um array de ícones associados a cada guia.
 * @param {Function} props.onClick - Uma função de retorno de chamada para lidar com cliques nas guias.
 * @param {number} props.selectedGuide - O índice da guia atualmente selecionada.
 */

import React from "react";

const GuideBar = ({ guides, icons, onClick, selectedGuide }) => {
  return (
    <nav className="w-full border-b-4 border-[#F6BE25]">
      <ul className="flex px-4 justify-between lg:h-10 lg:px-20 lmd:h-14">
        {guides.map((guide, index) => (
          <li
            key={index}
            className={`w-[5.5rem] text-center cursor-pointer border-b-2 lg:w-[8.7rem] lmd:w-[12.5rem] lmd:border-b-4 ${
              selectedGuide === index
                ? "border-[#F6BE25]"
                : "border-transparent"
            }`}
            onClick={() => onClick(index)}
          >
            <h2 className="flex items-center justify-center gap-2">
              <span className="hidden lg:block lg:w-8 lmd:w-12">
                {React.createElement(icons[index])}
              </span>
              {guide}
            </h2>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuideBar;
