import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-center bg-[#F9F5EC] px-4 py-4 md:px-8 md:py-6 lg:px-12">
      <div className="flex w-full max-w-[1280px] items-center justify-between">
        <Image width={122} height={38} src="/logo.png" alt="Plana AdHoc Logo" />
        <Link href="/demo" passHref>
          <Button title="Teste Agora!" className="hidden md:block" />
        </Link>
      </div>
    </nav>
  );
}
