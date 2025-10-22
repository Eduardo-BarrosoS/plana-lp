import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

const content = [
  {
    title: "Atendimento lento e repetitivo:",
    description:
      "Sua equipe de vendas e arquitetura responde às mesmas perguntas dezenas de vezes.",
  },
  {
    title: "Processos manuais e erros:",
    description:
      "Sua equipe de vendas e arquitetura responde às mesmas perguntas dezenas de vezes.",
  },
  {
    title: "Perda de vendas:",
    description:
      "Clientes que desistem da compra pela falta de flexibilidade ou pela complexidade do processo.",
  },
  {
    title: "Caos pós-entrega:",
    description:
      "Clientes que desistem da compra pela falta de flexibilidade ou pela complexidade do processo.",
  },
];

export default function Section1({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="mx-auto flex w-full items-center justify-center bg-[#0A0A0A]"
    >
      <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-8 px-4 py-10 sm:px-4 md:px-8 md:py-16 lg:flex-row lg:gap-12 lg:px-0 lg:py-20">
        <div className="flex flex-col justify-center gap-6 py-6">
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            O Processo De Personalização De Imóveis Está{" "}
            <span className="text-[#FE9A00]">Travando Seus Resultados?</span>
          </h2>
          <p className="text-white">
            Se sua equipe ainda gasta horas em reuniões, planilhas e contratos
            manuais para gerenciar alterações de acabamentos, você está perdendo
            eficiência e dinheiro.
          </p>
        </div>
        <div className="flex w-full items-stretch justify-center gap-3 rounded-xl bg-gradient-to-t from-[#F0EFEC] to-[#F4EAD5] px-4 py-3 md:px-6 md:py-4 lg:w-auto">
          <div className="flex min-w-12 flex-col items-center justify-around gap-3 py-8 max-md:gap-1">
            {content.map((_, index) => (
              <>
                <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-red-600">
                  <X strokeWidth={3} className="text-md text-black" />
                </div>

                {index < content.length - 1 && (
                  <div className="h-full min-h-3 w-1 rounded-2xl bg-red-600"></div>
                )}
              </>
            ))}
          </div>

          <div className="flex w-full flex-col justify-around gap-3 py-8">
            {content.map((item) => (
              <div className="flex flex-col" key={item.title}>
                <h3 className="text-md font-bold text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#0A0A0A]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
