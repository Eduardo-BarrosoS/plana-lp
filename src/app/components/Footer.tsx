import Link from "next/link";
import { MessageCircle, Mail, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground w-full flex justify-center items-center text-background py-12 md:py-16">
      <div className="container  px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="space-y-4">
            <Image
              src={"/plana-footer.svg"}
              alt="Plana AdHoc Logo"
              width={122}
              height={38}
              className="mb-4"
            />
            <p className="text-sm text-background/70 leading-relaxed">
              Sua solução para personalização de unidades imobiliárias.
            </p>
          </div>

          <div className="space-y-4 ">
            <h3 className="font-semibold text-lg">Produto</h3>
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

          <div className="space-y-4  ">
            <h3 className="font-semibold text-lg">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5511999999999" // Placeholder, update with actual number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@planalp.com.br" // Placeholder, update with actual email
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@planalp.com.br
                </a>
              </li>
            </ul>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>© 2025 Plana LP. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
