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

export function Results({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="container mx-auto flex max-w-[1000px] flex-col items-start gap-10 overflow-hidden px-4 py-10 md:gap-16 md:px-8 md:py-16 lg:gap-20 lg:px-0 lg:py-20"
    >
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-24">
        <div className="flex w-full flex-col gap-3 text-center lg:w-[45%] lg:text-left">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-[42px]">
            Confiança e Experiência que Geram Resultados
          </h2>
          <p className="text-base md:text-lg">
            Não somos novos nisso. Nossa tecnologia já foi testada e aprovada
            pelo mercado, garantindo segurança e performance para o seu negócio.
          </p>
        </div>
        <HorizontalCarousel />
      </div>
      <div className="mx-auto flex w-full flex-row flex-wrap items-center justify-center gap-8 md:gap-0">
        {results.map((result, index) => (
          <div
            className={`flex flex-col items-center justify-center gap-1 p-3 text-center ${
              index === 1 ? "border-x border-[#D4D4D4] max-md:border-none" : ""
            }`}
            key={index}
          >
            <h3 className="text-2xl font-medium text-[#2C2C2C] md:text-3xl">
              {result.title}
            </h3>
            <p className="max-w-48 text-base font-medium text-[#A3A3A3]">
              {result.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
