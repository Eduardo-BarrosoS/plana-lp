import Image from "next/image";
import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="  w-full px-4 flex items-center justify-center md:px-8 lg:px-12 py-4 md:py-6 z-10 top-0 sticky  bg-[#F9F5EC]">
      <div className="flex items-center w-full max-w-[1280px] justify-between">
        <Image width={122} height={38} src="/logo.png" alt="Plana AdHoc Logo" />
        <Button title="Teste Agora!" className="hidden md:block" />
      </div>
    </nav>
  );
}
