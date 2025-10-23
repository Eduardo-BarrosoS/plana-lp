import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-center bg-[#F9F5EC] px-4 py-4 shadow-md md:px-8 md:py-6 lg:px-12">
      <div className="flex w-full max-w-[1280px] items-center justify-between">
        <Link href="https://wa.me/5521983795251" className="flex items-center">
          <Image
            width={122}
            height={38}
            src="/logo.svg"
            alt="Plana AdHoc Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-8">
          <Link href="#" passHref>
            <Button className="bg-green-500 max-md:text-sm">
              <Image
                width={32}
                height={32}
                src="/whatsapp.svg"
                alt="whatsapp icon"
                className="h-5 w-5 invert"
              />
              Contato
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
