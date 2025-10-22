import { X } from "lucide-react";

export default function Section1({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="mx-auto bg-[#0A0A0A] flex items-center  w-full justify-center"
    >
      <div className="  lg:px-0 px-4 sm:px-4 md:px-8  w-full max-w-[1000px] py-10 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">
        <div className="flex flex-col gap-2.5 py-6 ">
          <h2 className="text-white text-3xl md:text-3xl lg:text-[42px] leading-tight md:leading-12 font-bold">
            O Processo De Personalização De Imóveis Está{" "}
            <span className="text-[#FE9A00]">Travando Seus Resultados?</span>
          </h2>
          <p className="text-white capitalize">
            Se sua equipe ainda gasta horas em reuniões, planilhas e contratos
            manuais para gerenciar alterações de acabamentos, você está perdendo
            eficiência e dinheiro.
          </p>
        </div>
        <div className="rounded-xl bg-gradient-to-t from-[#F0EFEC] to-[#F4EAD5] px-4 py-3 md:px-6 md:py-4 flex flex-col w-full lg:w-auto">
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
            <div className="min-w-[32px] min-h-[32px] rounded-full bg-red-600 flex items-center justify-center">
              <X className="text-black font-extrabold text-lg" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#0A0A0A]  font-bold">
                Atendimento lento e repetitivo:
              </h3>
              <p className="text-[#0A0A0A] text-sm">
                Sua equipe de vendas e arquitetura responde às mesmas perguntas
                dezenas de vezes.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
            <div className="min-w-[32px] min-h-[32px] rounded-full bg-red-600 flex items-center justify-center">
              <X className="text-black font-extrabold text-lg" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#0A0A0A] font-bold">
                Processos manuais e erros:
              </h3>
              <p className="text-[#0A0A0A] text-sm">
                Sua equipe de vendas e arquitetura responde às mesmas perguntas
                dezenas de vezes.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
            <div className="min-w-[32px] min-h-[32px] rounded-full bg-red-600 flex items-center justify-center">
              <X className="text-black font-extrabold text-lg" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#0A0A0A]  font-bold">Perda de vendas:</h3>
              <p className="text-[#0A0A0A] text-sm">
                Clientes que desistem da compra pela falta de flexibilidade ou
                pela complexidade do processo.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
            <div className="min-w-[32px] min-h-[32px] rounded-full bg-red-600 flex items-center justify-center">
              <X className="text-black font-extrabold text-lg" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#0A0A0A]  font-bold">Caos pós-entrega:</h3>
              <p className="text-[#0A0A0A] text-sm">
                Clientes que desistem da compra pela falta de flexibilidade ou
                pela complexidade do processo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
