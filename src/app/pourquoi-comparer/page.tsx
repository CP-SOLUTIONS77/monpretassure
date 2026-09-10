import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi comparer son assurance emprunteur",
  description:
    "L'assurance de la banque n'est pas obligatoire. La délégation d'assurance permet souvent d'économiser plusieurs milliers d'euros sur la durée du prêt.",
};

export default function PourquoiComparerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-orange">
        Délégation d&apos;assurance
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Pourquoi comparer son assurance emprunteur
      </h1>
      <p className="mt-4 text-neutral-900/70">
        Quand vous signez un prêt immobilier, votre banque vous propose son
        contrat d&apos;assurance emprunteur. Ce n&apos;est qu&apos;une
        proposition parmi d&apos;autres : la loi vous autorise à choisir un
        autre assureur, à garanties équivalentes.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold text-navy">
        Ce que dit la loi
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-neutral-900/70">
        {[
          "Loi Lagarde (2010) : liberté de choisir son assureur dès la souscription du prêt",
          "Loi Hamon (2014) : possibilité de changer d'assurance pendant la première année du prêt",
          "Loi Lemoine (2022) : possibilité de changer d'assurance à tout moment, sans frais",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 text-orange" aria-hidden>
              •
            </span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-heading text-xl font-semibold text-navy">
        Pourquoi les tarifs varient autant
      </h2>
      <p className="mt-3 text-sm text-neutral-900/70">
        L&apos;assurance groupe de la banque applique en général un tarif
        identique pour tous ses clients, quel que soit leur âge ou leur état
        de santé. Une délégation d&apos;assurance individualise le tarif selon
        votre profil : plus vous êtes jeune et en bonne santé, plus
        l&apos;écart est important.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold text-navy">
        La seule condition : l&apos;équivalence des garanties
      </h2>
      <p className="mt-3 text-sm text-neutral-900/70">
        Votre banque peut exiger un niveau de garantie minimum (décès,
        invalidité, incapacité de travail). Tant que le nouveau contrat
        respecte ce niveau, elle ne peut pas refuser la délégation
        d&apos;assurance ni appliquer de frais supplémentaires.
      </p>

      <Link
        href="/simulateur"
        className="mt-8 inline-block rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95"
      >
        Comparer mon assurance emprunteur
      </Link>
    </div>
  );
}
