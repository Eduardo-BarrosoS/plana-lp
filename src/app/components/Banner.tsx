import Image from "next/image";
import { Button } from "./Button";

export default function Banner({ id }: { id?: string }) {
  return (
    <div id={id} className="relative w-full bg-black">
      <Image
        alt="background banner"
        height={362}
        width={1280}
        src="/banner.png"
        className="absolute h-full w-full object-cover opacity-60"
      />
      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center justify-center gap-12 px-4 py-10 text-white text-shadow-lg max-md:gap-6 sm:px-4 md:px-8 md:py-16 lg:px-0 lg:py-20">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Pronto para{" "}
          <span className="text-[#F9B233]">revolucionar a experiência</span> do
          seu cliente e seus resultados?
        </h2>
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-end md:gap-8">
          <p className="w-full text-center md:w-[500px] md:text-left">
            Veja na <span className="font-bold">prática como a plataforma</span>{" "}
            Plana AdHoc se adapta perfeitamente ao seu empreendimento. A
            demonstração é rápida, objetiva e focada em como{" "}
            <span className="font-bold">podemos resolver seus desafios.</span>
          </p>
          <Button
            href="https://wa.me/5521983795251"
            title="Entrar em contato"
          />
        </div>
      </div>
    </div>
  );
}
