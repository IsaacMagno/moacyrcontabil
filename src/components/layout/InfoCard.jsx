/**
 * @param {string} props.title - O título do cartão.
 * @param {Array} props.list - A lista de itens a serem exibidos no cartão.
 */

import { Clipboard } from "../svgs";

const InfoCard = ({ title, list }) => {
  return (
    <div className="flex w-full items-start justify-between gap-2 rounded-lg p-3 hover:bg-[#F6BE25] cursor-pointer transition-colors duration-500 lg:p-4 lmd:p-5 lmd:rounded-[1.25rem]">
      <article className="flex flex-col items-start gap-3 lg:gap-4">
        <h3 className="text-[#323231] text-base font-semibold lg:text-lg lmd:text-xl">
          {title}
        </h3>
        <ul className="space-y-0.5 lg:space-y-1">
          {list.map((item, index) => (
            <li key={index}>
              <p className="text-sm lg:text-sm lmd:text-base">{item}</p>
            </li>
          ))}
        </ul>
      </article>
      <div className="w-8 shrink-0 self-end lg:w-10 lmd:w-14">
        <Clipboard />
      </div>
    </div>
  );
};

export default InfoCard;
