"use client";

const results = [
  {
    title: "+12 anos",
    description: "atuação no mercado imobiliário",
  },
  {
    title: "+3.000 ",
    description: "unidades personalizadas com sucesso",
  },
  {
    title: "+15",
    description:
      "empreendimentos de sucesso transformados por nossa plataforma",
  },
];

import { HorizontalCarousel } from "./HorizontalCarousel";

export function Results() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-0 max-w-[1280px] overflow-hidden flex flex-col gap-10 md:gap-16 lg:gap-20 py-10 md:py-16 lg:py-20 items-start">
      <div className="flex flex-col lg:flex-row  items-center gap-8 lg:gap-24">
        <div className="flex w-full lg:w-[45%] flex-col gap-3 text-center lg:text-left">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-[42px]">
            Confiança e Experiência que Geram Resultados
          </h2>
          <p className="text-base md:text-lg">
            Não somos novos nisso. Nossa tecnologia já foi testada e aprovada
            pelo mercado, garantindo segurança e performance para o seu negócio.
          </p>
        </div>
        <HorizontalCarousel />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto justify-between items-center gap-8 md:gap-0">
        {results.map((result, index) => (
          <div
            className={`flex flex-col text-center justify-center items-center  p-3 gap-3 ${
              index === 1 ? "border-x border-[#D4D4D4]" : ""
            }`}
            key={index}
          >
            <h3 className="font-medium text-3xl md:text-4xl text-[#2C2C2C]">
              {result.title}
            </h3>
            <p className="font-medium text-base md:text-lg text-[#A3A3A3]">
              {result.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
