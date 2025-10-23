"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual é o modelo de precificação da plataforma Plana AdHoc?",
    answer: "",
  },
  {
    question:
      "Quanto tempo leva para implementar a plataforma no meu empreendimento?",
    answer:
      "O prazo de implementação é, em média, de 1 a 2 meses. Este tempo pode ser confirmado e ajustado após um planejamento de escopo inicial, que é essencial para avaliar o tamanho do empreendimento e a quantidade de personalizações desejadas.",
  },
  {
    question:
      "Minha equipe (comercial, arquitetura) precisa de algum treinamento específico para usar o sistema?",
    answer:
      "Não, a curva de aprendizado é muito rápida. Nossa plataforma foi desenvolvida para ser altamente intuitiva e didática. Um simples overview (visão geral) da plataforma é geralmente suficiente para que suas equipes de Comercial e Arquitetura possam utilizar o sistema com total eficiência. Oferecemos este treinamento introdutório para garantir o início imediato das operações.",
  },
  {
    question:
      "Como funciona o cadastro dos materiais, acabamentos e fornecedores específicos do meu projeto?",
    answer:
      "Nós cuidamos de toda a estruturação e customização da plataforma para você! Após recebermos todas as informações essenciais — incluindo listas de materiais, acabamentos, dados de fornecedores e as especificações de preços e regras de uso (customizações) do seu projeto —, nossa equipe realiza todo o processo de cadastro e parametrização dentro do sistema.",
  },
  {
    question:
      "Os contratos gerados e assinados digitalmente na plataforma têm validade jurídica?",
    answer: "",
  },
  {
    question:
      "A plataforma se integra com outros sistemas (ERP, CRM) que minha empresa já utiliza?",
    answer:
      "A possibilidade de integração com sistemas externos (como ERPs e CRMs) depende de uma análise técnica prévia. Nosso objetivo é manter a eficiência e a escalabilidade da plataforma. Por isso, a integração só será considerada se for tecnicamente viável sem a necessidade de desenvolver um produto customizado para cada cliente, garantindo a padronização e a sustentabilidade do sistema para todos os usuários.",
  },
  {
    question:
      "Que tipo de suporte técnico vocês oferecem após a implementação da plataforma?",
    answer:
      "Oferecemos suporte técnico completo após a implementação, garantindo que sua operação continue fluida. O atendimento é realizado via e-mail e WhatsApp/telefone durante o horário comercial. Para questões que exigem maior profundidade ou planejamento, também realizamos reuniões de acompanhamento, agendadas com antecedência.",
  },
  //   {
  //     question:
  //       "Além da personalização de acabamentos, posso usar a plataforma para vender itens adicionais, como kits de automação ou ar condicionado?",
  //     answer:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
];

export function FAQSection({ id }: { id?: string }) {
  return (
    <section id={id} className="container mx-auto max-w-[1000px] px-6 py-20">
      <div className="flex flex-col items-center lg:flex-row lg:gap-28">
        <div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-2 text-2xl font-bold md:mb-4 md:text-3xl">
              Perguntas Frequentes (FAQ)
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-600 md:mb-10">
              Separamos as dúvidas mais comuns de nossos parceiros
              incorporadores para ajudar na sua decisão.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-900 md:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-3 text-sm leading-relaxed text-gray-700 md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* <div className=" flex justify-end items-end">
          <Image
            src="/faq-image.png"
            alt="FAQ Image"
            width={500}
            height={500}
          />
        </div> */}
      </div>
    </section>
  );
}
