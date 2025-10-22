import { Button } from "./Button";

export default function Banner() {
  return (
    <div className="  bg-cover bg-[url('/banner.png')] w-full">
      <div className="lg:px-0 sm:px-4 px-4 max-w-[1280px] md:px-8 flex flex-col  text-white py-10 md:py-16 lg:py-20 gap-12 mx-auto items-center justify-center">
        <h2 className="font-bold text-4xl md:text-4xl lg:text-[42px] text-center">
          Pronto para revolucionar a experiência do seu cliente e seus
          resultados?
        </h2>
        <div className="flex flex-col justify-between md:flex-row gap-4 md:gap-8 w-full items-center md:items-end">
          <p className="w-full md:w-[500px] text-center md:text-left">
            Veja na{" "}
            <span className="font-bold italic">prática como a plataforma</span>{" "}
            Plana AdHoc se adapta perfeitamente ao seu empreendimento. A
            demonstração é rápida, objetiva e focada em como{" "}
            <span className="font-bold italic">
              podemos resolver seus desafios.
            </span>
          </p>
          <Button title="Agendar Demonstração pelo WhatsApp" />
        </div>
      </div>
    </div>
  );
}
