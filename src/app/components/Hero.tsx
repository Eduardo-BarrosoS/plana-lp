"use client";

import Image from "next/image";
import { Button } from "./Button";

export function Hero({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="relative flex min-h-[680px] w-full justify-between overflow-hidden p-[160px] text-neutral-900"
    >
      <div>
        <h1 className="w-[620px] text-3xl font-medium text-neutral-900">
          Acelere as <span className="italic">Vendas</span> do seu
          Empreendimento. Ofereça{" "}
          <span className="font-bold">Personalização Sem Complicações.</span>
        </h1>
        <Image
          alt="hero-image"
          src="/paisagem-urbana-background.jpg"
          width={1006}
          height={1006}
          className="absolute bottom-0 left-0"
        />
      </div>
      <div className="flex flex-col items-end justify-end gap-4 text-end text-sm">
        <p className="w-[305px]">
          A Plana AdHoc é a plataforma white-label que automatiza o processo de
          personalização de unidades. Aumente seu VGV, reduza custos
          operacionais e encante seus clientes com uma experiência de compra
          100% digital.
        </p>
        <Button title="Agendar Demonstração pelo WhatsApp" />
      </div>
    </div>
  );
}
