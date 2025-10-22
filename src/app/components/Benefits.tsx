import Image from "next/image";

const benefits = [
  {
    icon: "/piechart.png",
    title: "Controle Total e Visão Estratégica",
    description:
      "Empreendimentos com personalização digital são o desejo do cliente moderno. Ofereça uma experiência de compra inesquecível, aumente o ticket médio por unidade e posicione seu projeto como a primeira opção do mercado.",
  },
  {
    icon: "/Money.png",
    title: "Reduza Drasticamente os Custos Operacionais",
    description:
      "Com nosso dashboard, tenha uma visão completa do progresso das personalizações, metas alcançadas e contratos assinados. Tome decisões baseadas em dados e tenha previsibilidade sobre sua receita.",
  },
  {
    icon: "/Rocket.png",
    title: "Aumente o VGV e Venda Mais Rápido",
    description:
      "Elimine horas de atendimento, e-mails e burocracia. Nossa plataforma automatiza as escolhas, orçamentos e contratos, liberando sua equipe comercial e de arquitetura para focar no que realmente importa.",
  },
  {
    icon: "/trophy.png",
    title: "Fortaleça sua Marca e a Satisfação do Cliente",
    description:
      "Entregue o apartamento dos sonhos, evite o estresse das obras pós-entrega e transforme compradores em promotores da sua marca. Posicione sua incorporadora como líder em inovação e foco no cliente.",
  },
];

export default function Benefits({ id }: { id?: string }) {
  return (
    <div id={id} className="bg-cover bg-[url('/Background.svg')] w-full">
      <div className="container  w-full mx-auto max-w-[1000px] px-4 md:px-8 lg:px-0 py-10 md:py-16 lg:py-20">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-[42px] text-center mb-10 md:mb-16 lg:mb-20">
          Transforme a{" "}
          <span className="text-[#F9B233] italic">Personalização</span> em sua
          Maior Vantagem Competitiva
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="gap-4 bg-[#FFFFFF]/80 shadow backdrop-blur-4xl rounded-[12px] flex flex-col py-4 px-5 md:py-5 md:px-7"
            >
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={64}
                height={64}
                className="mb-4 md:mb-6"
              />
              <h3 className="text-[20px] font-bold text-[#0A0A0A] ">
                {benefit.title}
              </h3>
              <p className=" text-[#0A0A0A] ">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
