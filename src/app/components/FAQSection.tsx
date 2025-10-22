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
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Quanto tempo leva para implementar a plataforma no meu empreendimento?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Minha equipe (comercial, arquitetura) precisa de algum treinamento específico para usar o sistema?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Como funciona o cadastro dos materiais, acabamentos e fornecedores específicos do meu projeto?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Os contratos gerados e assinados digitalmente na plataforma têm validade jurídica?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "A plataforma se integra com outros sistemas (ERP, CRM) que minha empresa já utiliza?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Que tipo de suporte técnico vocês oferecem após a implementação da plataforma?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Além da personalização de acabamentos, posso usar a plataforma para vender itens adicionais, como kits de automação ou ar condicionado?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function FAQSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="container max-w-[1000px] mx-auto py-20 px-4 md:px-8 lg:px-0 "
    >
      <div className="flex flex-col lg:flex-row lg:gap-28 items-center">
        <div>
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-[42px]  mb-6 md:mb-4 lg:mb-6">
              Perguntas Frequentes (FAQ)
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 leading-relaxed">
              Separamos as dúvidas mais comuns de nossos parceiros
              incorporadores para ajudar na sua decisão.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 py-4"
              >
                <AccordionTrigger className="text-left text-xl font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 pb-4 leading-relaxed">
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
