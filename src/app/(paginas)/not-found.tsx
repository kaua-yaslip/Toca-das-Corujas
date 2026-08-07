import { settings } from "@/settings/settings";
import "@/styles/Scss/error.scss";
import Link from "next/link";

const { siteName } = settings;

export default function notFound() {
  return (
    <main>
      <div className="error-404">
        <h1>Ooops... Error 404</h1>
        <h4>Lamentamos, mas a página que você está procurando não existe.</h4>
        <span> Verifique o endereço digitado e tente novamente ou</span>
        <div className="botao-voltar">
          <p>
            <Link href="/" title={siteName}>
              volte para homepage
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
