"use client";

import Image from "next/image";
import { Button } from "./Button";

export function Hero({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="relative w-full bg-linear-to-t from-[#F4E9D3] to-[#FCFBF7] text-neutral-900"
    >
      <Image
        alt="hero-image"
        src="/paisagem-urbana-background.jpg"
        width={1006}
        height={1006}
        priority
        className="absolute bottom-0 left-0"
      />
      <div className="mx-auto flex min-h-[680px] w-full max-w-[1000px] py-[60px] max-lg:flex-col max-lg:items-center max-lg:px-4 sm:py-[60px] md:py-[100px] lg:py-[160px]">
        <div>
          <h1 className="w-full max-w-[620px] text-3xl font-medium text-neutral-900 max-lg:text-center max-md:text-2xl">
            Acelere as <span className="italic">Vendas</span> do seu
            Empreendimento. Ofereça{" "}
            <span className="font-bold">Personalização Sem Complicações.</span>
          </h1>
        </div>
        <div className="relative flex flex-col items-end justify-end gap-4 rounded-xl p-2 text-end text-sm max-lg:justify-center max-lg:text-center">
          <p className="w-[305px]">
            A Plana AdHoc é a plataforma white-label que automatiza o processo
            de personalização de unidades. Aumente seu VGV, reduza custos
            operacionais e encante seus clientes com uma experiência de compra
            100% digital.
          </p>
          <Button
            href="https://wa.me/5521983795251"
            title="Entrar em contato"
          />
          <Button href="/demo" title="Demonstração" variant="outline" />
        </div>
      </div>
    </div>
  );
}
