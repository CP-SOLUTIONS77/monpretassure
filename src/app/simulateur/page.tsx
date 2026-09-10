import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparer mon assurance emprunteur",
  description:
    "Comparez gratuitement les offres d'assurance emprunteur du marché, à garanties équivalentes à celles exigées par votre banque.",
};

const SIMULATEUR_URL = "https://cp-solutions.assurdistribution.fr/";

export default function SimulateurPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Comparer mon assurance emprunteur
      </h1>
      <p className="mt-4 text-neutral-900/70">
        Le comparateur ci-dessous est le même outil que celui utilisé par le
        cabinet CP Solutions. Comptez quelques minutes pour répondre aux
        questions, sans engagement.
      </p>

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
