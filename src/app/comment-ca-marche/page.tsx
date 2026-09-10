import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Les étapes pour comparer ou changer d'assurance emprunteur : envoi des documents, comparaison, vérification d'équivalence, réponse de la banque.",
};

const STEPS = [
  {
    title: "1. Un premier échange, sans engagement",
    text: "Par téléphone au 01 64 24 83 45 ou en agence, on regarde votre situation : prêt en cours ou projet d'achat, montant, âge, état de santé général. Cet échange est gratuit et ne vous engage à rien.",
  },
  {
    title: "2. La collecte des documents",
    text: "Si le prêt est en cours : le tableau d'amortissement et les conditions générales de votre assurance actuelle. Si c'est un projet : l'offre de prêt de la banque avec les garanties exigées.",
  },
  {
    title: "3. La comparaison entre plusieurs assureurs",
    text: "En tant que courtier indépendant, on interroge plusieurs compagnies d'assurance, à garanties équivalentes à celles exigées par votre banque.",
  },
  {
    title: "4. La vérification d'équivalence des garanties",
    text: "Chaque offre est vérifiée pour s'assurer qu'elle respecte le niveau de garantie minimum exigé par votre établissement prêteur (grille de référence du CCSF).",
  },
  {
    title: "5. L'envoi à la banque",
    text: "Le nouveau contrat est transmis à votre banque, qui doit répondre dans un délai de 10 jours ouvrés.",
  },
  {
    title: "6. La prise d'effet",
    text: "Une fois acceptée, la nouvelle assurance prend effet à la date convenue, sans frais de résiliation de l'ancien contrat depuis la loi Lemoine.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Comment se passe le changement d&apos;assurance emprunteur
      </h1>
      <p className="mt-4 text-neutral-900/70">
        Depuis la loi Lemoine, vous pouvez changer d&apos;assurance emprunteur à
        tout moment, sans frais. Voici les étapes concrètes.
      </p>

      <div className="mt-10 space-y-8">
        {STEPS.map((step) => (
          <div key={step.title} className="border-l-2 border-orange pl-5">
            <h2 className="font-heading font-semibold text-navy">
              {step.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-900/70">{step.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-neutral-900/60">
        Délai moyen entre la première demande et la prise d&apos;effet de la
        nouvelle assurance : généralement entre 2 et 4 semaines.
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
