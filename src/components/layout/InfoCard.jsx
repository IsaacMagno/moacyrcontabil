/**
 * @param {string} props.title - O título do cartão.
 * @param {Array} props.list - A lista de itens a serem exibidos no cartão.
 */

import { Clipboard } from "../svgs";

const InfoCard = ({ title, list }) => {
  return (
    <div
      // href="/servicos"
      // target="_blank"
      className="inline-flex items-start p-2 justify-center w-[16rem] h-[15.25rem] rounded-lg lmd:w-[25.625rem] lmd:h-[23rem] lmd:px-4 lmd:py-6 lmd:rounded-[1.25rem] hover:bg-[#F6BE25] cursor-pointer transition-colors duration-500"
    >
      <article className="flex flex-col items-start gap-6 w-[12.5rem] lmd:w-[19.625rem]">
        <h1 className="text-[#323231]">{title}</h1>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </article>
      <div className="w-10 lmd:w-20 self-end">
        <Clipboard />
      </div>
    </div>
  );
};

export default InfoCard;
