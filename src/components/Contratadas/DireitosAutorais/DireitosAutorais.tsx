import Link from "next/link";

export default function DireitosAutorais({title}: {title: string}) {
  return (
    <div className="direitos-autorais-conteudo">
      O texto acima &quot;<strong>{title}</strong>&quot; é de
      direito reservado. Sua reprodução, parcial ou total, mesmo citando nossos
      links, é proibida sem a autorização do autor. Plágio é crime e está
      previsto no artigo 184 do Código Penal. –{" "}
      <Link
        rel="nofollow"
        href="http://www.planalto.gov.br/Ccivil_03/Leis/L9610.htm"
        target="_blank"
      >
        Lei n° 9.610-98 sobre os Direitos Autorais.
      </Link>
    </div>
  );
}
