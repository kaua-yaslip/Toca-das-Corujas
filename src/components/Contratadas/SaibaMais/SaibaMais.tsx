import Link from "next/link";

export default function SaibaMais({ title }: { title: string }) {
  return (
    <div className="saiba-mais">
      <h3>Saiba mais sobre {title}</h3>
      <Link href="/contato">Saiba Mais</Link>
    </div>
  );
} 