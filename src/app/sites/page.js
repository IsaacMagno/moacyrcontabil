import React from "react";
import BannerSites from "./bannerSites";
import { metadataSites } from "../../helpers/metadata";

export const metadata = metadataSites;

let Sites = [
  {
    nome: "Caixa Econômica Federal",
    link: "https://www.caixa.gov.br/Paginas/home-caixa.aspx",
  },
  {
    nome: "CADIN – Estadual",
    link: "https://www.fazenda.sp.gov.br/cadin_estadual/pages/publ/cadin.aspx",
  },
  {
    nome: "CRCE – Cadastro de Regularidade de Entidades",
    link: "http://www.cadastrodeentidades.sp.gov.br/(S(1lafrrrinfurtp2gjrvifpb5))/CertificadoPublico.aspx",
  },
  {
    nome: "Como emitir uma nota fiscal",
    link: "https://www.sitecontabil.com.br/notasfiscais",
  },
  {
    nome: "Calendário de Obrigações",
    link: "https://www.sitecontabil.com.br/agendas_obrigacoes",
  },
  {
    nome: "e-CAC Receita Federal",
    link: "https://cav.receita.fazenda.gov.br/autenticacao/login/index",
  },
  {
    nome: "Índices Econômicos",
    link: "https://www.portalbrasil.net/",
  },
  {
    nome: "MEI – Micro Empreendedor Individual",
    link: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei",
  },
  {
    nome: "Nota Fiscal Paulista",
    link: "https://www.nfp.fazenda.sp.gov.br/login.aspx?ReturnUrl=%2F",
  },
  {
    nome: "Nota Fiscal Eletronica",
    link: "https://hom.nfe.fazenda.gov.br/portal/principal.aspx",
  },
  {
    nome: "Previdência Social",
    link: "https://www.gov.br/previdencia/pt-br",
  },
  {
    nome: "Posto Fiscal Eletrônico",
    link: "https://www3.fazenda.sp.gov.br/CAWEB/Account/Login.aspx/",
  },
  {
    nome: "Receita Federal",
    link: "https://www.gov.br/receitafederal/pt-br",
  },
  {
    nome: "Sped – Sistema Publico de Escrituração Digital",
    link: "http://sped.rfb.gov.br/",
  },
  {
    nome: "Sintegra",
    link: "http://www.sintegra.gov.br/",
  },
  {
    nome: "Simples Nacional",
    link: "https://www8.receita.fazenda.gov.br/SimplesNacional/",
  },
  {
    nome: "Tabelas Diversas",
    link: "https://www.sitecontabil.com.br/tabelas_praticas",
  },
];

let CND = [
  {
    nome: "Emissão do CNPJ",
    link: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp",
  },
  {
    nome: "CND Receita Federal / INSS",
    link: "https://servicos.receitafederal.gov.br/servico/certidoes/#/home/cnpj",
  },
  {
    nome: "CND Pessoa Fisica",
    link: "https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir",
  },
  {
    nome: "CND do ITR",
    link: "https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/ITR/Emitir",
  },
  {
    nome: "CND do Ibama",
    link: "https://servicos.ibama.gov.br/sicafiext/",
  },
  {
    nome: "CND Prefeitura de Pedreira",
    link: "http://intranet.pedreira.sp.gov.br:5661/servicosweb/home.jsf",
  },
  {
    nome: "CND Estadual",
    link: "https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx",
  },
  {
    nome: "CND Estadual Divida Ativa",
    link: "https://www.dividaativa.pge.sp.gov.br/sc/pages/crda/emitirCrda.jsf",
  },
  {
    nome: "CND do FGTS",
    link: "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf",
  },
  {
    nome: "CND Trabalhista",
    link: "https://www.tst.jus.br/certidao",
  },
  {
    nome: "CND Falencia e Concordata",
    link: "https://esaj.tjsp.jus.br/sco/abrirCadastro.do",
  },
  {
    nome: "Emissão do CCIR",
    link: "https://sncr.serpro.gov.br/ccir/emissao;jsessionid=7MsCbfWeSeIdpWqPrLQmTJuS.ccir4?windowId=58c",
  },
];

const page = () => {
  return (
    <div>
      <BannerSites />
      <div className="flex flex-col lg:flex-row justify-center gap-20 items-start py-20 bg-[#E9E9E9]">
        <div className="px-4  flex flex-col justify-center">
          <h1 className="my-4">Sites</h1>
          <ul>
            {Sites.map((site, index) => (
              <li key={index}>
                <a href={site.link} target="_onBlank">
                  <p className="hover:text-yellow-500">- {site.nome}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4  flex flex-col justify-center">
          <h1 className="my-4 lg:my-0 lg:mb-4">Certidão Negativa</h1>
          <ul>
            {CND.map((cnd, index) => (
              <li key={index}>
                <a href={cnd.link} target="_onBlank">
                  <p className="hover:text-yellow-500">- {cnd.nome}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
