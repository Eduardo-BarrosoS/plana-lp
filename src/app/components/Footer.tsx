import Link from "next/link";
import { MessageCircle, Mail, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-background flex w-full items-center justify-center py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Image
              src={"/plana-footer.svg"}
              alt="Plana AdHoc Logo"
              width={122}
              height={38}
              className="mb-4"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Sua solução para personalização de unidades imobiliárias.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#solucao"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Solução
                </Link>
              </li>
              <li>
                <Link
                  href="#como-funciona"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#beneficios"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Benefícios
                </Link>
              </li>
              <li>
                <Link
                  href="#resultados"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Resultados
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5521983795251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@planaadhoc.com.br"
                  className="text-background/70 hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  comercial@planaadhoc.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-background/20 text-background/70 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Plana Adhoc. Todos os direitos
            reservados.
          </p>
          {/* <div className="flex gap-6"> */}
          {/*   <div className="hover:text-primary transition-colors"> */}
          {/*     Privacidade */}
          {/*   </div> */}
          {/*   <div className="hover:text-primary pointer transition-colors"> */}
          {/*     Termos de Uso */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}
