import { ChartPie, CircleDollarSign, Rocket, Trophy } from "lucide-react";

const benefits = [
  {
    icon: ChartPie,
    title: "Controle Total e Visão Estratégica",
    description:
      "Empreendimentos com personalização digital são o desejo do cliente moderno. Ofereça uma experiência de compra inesquecível, aumente o ticket médio por unidade e posicione seu projeto como a primeira opção do mercado.",
  },
  {
    icon: CircleDollarSign,
    title: "Reduza Drasticamente os Custos Operacionais",
    description:
      "Com nosso dashboard, tenha uma visão completa do progresso das personalizações, metas alcançadas e contratos assinados. Tome decisões baseadas em dados e tenha previsibilidade sobre sua receita.",
  },
  {
    icon: Rocket,
    title: "Aumente o VGV e Venda Mais Rápido",
    description:
      "Elimine horas de atendimento, e-mails e burocracia. Nossa plataforma automatiza as escolhas, orçamentos e contratos, liberando sua equipe comercial e de arquitetura para focar no que realmente importa.",
  },
  {
    icon: Trophy,
    title: "Fortaleça sua Marca e a Satisfação do Cliente",
    description:
      "Entregue o apartamento dos sonhos, evite o estresse das obras pós-entrega e transforme compradores em promotores da sua marca. Posicione sua incorporadora como líder em inovação e foco no cliente.",
  },
];

export default function Benefits({ id }: { id?: string }) {
  return (
    <div id={id} className="w-full bg-[url('/Background.svg')] bg-cover">
      <div className="container mx-auto w-full max-w-[1000px] px-4 py-10 md:px-8 md:py-16 lg:px-0 lg:py-20">
        <h2 className="mb-10 text-center text-2xl font-bold md:mb-16 md:text-3xl lg:mb-20 lg:text-[42px]">
          Transforme a{" "}
          <span className="text-[#F9B233] italic">Personalização</span> em sua
          Maior Vantagem Competitiva
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="backdrop-blur-4xl flex flex-col gap-4 rounded-[12px] bg-[#FFFFFF]/80 px-5 py-4 shadow md:px-7 md:py-5"
            >
              <h3 className="flex items-start gap-3 text-[20px] font-bold text-[#0A0A0A]">
                <benefit.icon className="h-8 w-8" />
                {benefit.title}
              </h3>
              <p className="text-[#0A0A0A]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
