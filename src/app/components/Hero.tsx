"use client";

import Image from "next/image";
import { Button } from "./Button";

export function Hero({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="text-neutral-900 p-[160px] flex justify-between  w-full relative min-h-[680px] overflow-hidden"
    >
      <div className=" ">
        <h1 className="text-neutral-900 w-[620px] text-3xl  font-medium">
          Acelere as <span className="italic">Vendas</span> do seu
          Empreendimento. Ofereça{" "}
          <span className="font-bold">Personalização Sem Complicações.</span>
        </h1>
        {/* <Image
          alt="hero-image"
          src="/hero-image1.png"
          width={1006}
          height={1006}
          className="absolute left-0 -bottom-30"
        /> */}
      </div>
      <div className="flex flex-col gap-4 justify-end items-end text-end text-sm">
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
