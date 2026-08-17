import { settings } from "@/settings/settings";
import "./rodapeMobile.scss";

import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import ScrollToTopMobile from "@/components/ui/ScrollToTopMobile";

const { siteName, ddd, whatsappApi, numeroTelefone, email } = settings;
const phoneDigits = `${ddd}${numeroTelefone}`.replace(/\D/g, "");

export default function RodapeMobile() {
  return (
    <div className="rodape-mobile" aria-label="Atalhos de contato">
      <div className="icones-rodape">
        <a
          className="phone icone"
          href={`tel:${phoneDigits}`}
          title="Telefone para contato"
          aria-label={`Ligar para ${siteName}`}
        >
          <FaPhoneAlt aria-hidden="true" />
        </a>

        <a
          className="envelope icone"
          href={`mailto:${email}`}
          title="Enviar e-mail"
          aria-label={`Enviar e-mail para ${siteName}`}
        >
          <FaEnvelope aria-hidden="true" />
        </a>

        <a
          className="whatsapp icone"
          href={whatsappApi}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title="WhatsApp"
          aria-label={`Falar com ${siteName} pelo WhatsApp`}
        >
          <FaWhatsapp aria-hidden="true" />
        </a>

        <ScrollToTopMobile />
      </div>
    </div>
  );
}
