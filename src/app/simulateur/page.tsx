import type { Metadata } from "next";
import { RappelRapide } from "@/components/RappelRapide";
import { TrackOnView } from "@/components/TrackingEvents";

export const metadata: Metadata = {
  title: "Comparer mon assurance emprunteur",
  description:
    "Comparez gratuitement les offres d'assurance emprunteur du marché, à garanties équivalentes à celles exigées par votre banque.",
  alternates: { canonical: "/simulateur" },
};

const SIMULATEUR_URL = "https://cp-solutions.assurdistribution.fr/";

export default function SimulateurPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <TrackOnView event="simulateur_ouvert" />
      <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Comparer mon assurance emprunteur
      </h1>
      <p className="mt-4 text-neutral-900/70">
        Deux façons de faire : remplir vous-même le comparateur ci-dessous, ou laisser un conseiller
        CP Solutions s&apos;en charger avec vous au téléphone. Dans les deux cas, c&apos;est gratuit et
        sans engagement.
      </p>

      <div className="mt-6">
        <RappelRapide
          source="rappel-rapide-emprunteur"
          intro="Vous préférez qu'un conseiller s'en occupe ? Il vous rappelle et remplit le dossier avec vous."
        />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          ["5 étapes", "de la description de votre projet jusqu'au résultat"],
          ["Quelques minutes", "gratuit et sans engagement"],
          ["À portée de main", "votre offre de prêt ou votre tableau d'amortissement"],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl bg-neutral-50 p-4">
            <p className="font-heading font-semibold text-navy">{title}</p>
            <p className="mt-1 text-sm text-neutral-900/70">{text}</p>
          </div>
        ))}
      </div>

      <a
        href={SIMULATEUR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95 sm:hidden"
      >
        Ouvrir le comparateur en plein écran
      </a>

      <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-100">
        <iframe
          src={SIMULATEUR_URL}
          title="Comparateur d'assurance emprunteur CP Solutions"
          className="h-[900px] w-full"
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-sm text-neutral-900/60">
        Le comparateur ne s&apos;affiche pas correctement ?{" "}
        <a
          href={SIMULATEUR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy underline"
        >
          Ouvrez-le dans un nouvel onglet
        </a>
        .
      </p>
    </div>
  );
}
