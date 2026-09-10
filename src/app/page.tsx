import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assurance emprunteur à Montereau",
  description:
    "Comparez les assurances emprunteur avant de signer votre prêt, ou changez d'assurance en cours de crédit (loi Lemoine). Étude gratuite, sans engagement.",
};

const BENEFITS = [
  {
    title: "Jusqu'à plusieurs milliers d'euros économisés",
    text: "L'assurance de la banque n'est pas obligatoire : une délégation d'assurance équivalente coûte souvent bien moins cher sur la durée du prêt.",
  },
  {
    title: "Changement possible à tout moment",
    text: "Depuis la loi Lemoine, vous pouvez changer d'assurance emprunteur quand vous le souhaitez, sans frais ni pénalité.",
  },
  {
    title: "Zéro engagement",
    text: "L'étude de votre profil et la comparaison des offres sont gratuites et ne vous engagent à rien.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Vous nous transmettez votre contrat actuel",
    text: "Prêt en cours ou projet d'achat : on regarde les garanties exigées par votre banque.",
  },
  {
    step: "2",
    title: "On compare plusieurs assureurs",
    text: "En tant que courtier indépendant, on interroge plusieurs compagnies à garanties équivalentes.",
  },
  {
    step: "3",
    title: "On vérifie l'équivalence des garanties",
    text: "La nouvelle assurance doit offrir un niveau de garantie au moins équivalent à celui exigé par votre banque.",
  },
  {
    step: "4",
    title: "Votre banque ne peut pas refuser",
    text: "À garanties équivalentes, la banque doit accepter la délégation d'assurance, sans frais supplémentaires.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-orange">
              Assurance emprunteur
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Votre banque vous vend son assurance. Rien ne vous y oblige.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-neutral-900/80">
              On compare les assurances emprunteur de plusieurs compagnies, à
              garanties équivalentes à celles exigées par votre banque.
              Étude gratuite, sans engagement — que votre prêt soit en cours
              ou en projet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/simulateur"
                className="rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Comparer mon assurance emprunteur
              </Link>
              <a
                href="tel:+33164248345"
                className="rounded-full border border-navy px-6 py-3 font-heading font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Appeler le 01 64 24 83 45
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-neutral-900/70">
              <span className="text-orange" aria-hidden>
                ★★★★★
              </span>
              <span>5,0 / 5 — 84 avis Google</span>
            </div>
          </div>

          <div className="rounded-3xl bg-navy/5 p-8">
            <p className="font-heading font-semibold text-navy">
              Exemple de délégation d&apos;assurance
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-navy/10 pb-3">
                <dt className="text-neutral-900/70">Assurance de la banque</dt>
                <dd className="font-heading font-semibold text-neutral-900">
                  0,34 % du capital
                </dd>
              </div>
              <div className="flex items-center justify-between border-b border-navy/10 pb-3">
                <dt className="text-neutral-900/70">Délégation d&apos;assurance</dt>
                <dd className="font-heading font-semibold text-neutral-900">
                  0,12 % du capital
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-neutral-900/70">
                  Économie sur 20 ans
                  <span className="block text-xs text-neutral-900/50">
                    Pour un capital de 200 000 €
                  </span>
                </dt>
                <dd className="font-heading text-xl font-semibold text-orange">
                  8 800 €
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-neutral-900/50">
              Exemple illustratif, à titre indicatif. Le tarif dépend de
              l&apos;âge, de l&apos;état de santé et du capital emprunté.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <h2 className="font-heading font-semibold text-navy">
                {benefit.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-900/70">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
          Comment se passe le changement d&apos;assurance
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => (
            <div key={item.step}>
              <span className="font-heading text-3xl font-semibold text-orange">
                {item.step}
              </span>
              <h3 className="mt-2 font-heading font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-900/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-14 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold">
              Une assurance à comparer ?
            </h2>
            <p className="mt-1 text-white/80">
              Réponse sous 48h, sans engagement.
            </p>
          </div>
          <Link
            href="/simulateur"
            className="rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95"
          >
            Démarrer ma comparaison
          </Link>
        </div>
      </section>
    </>
  );
}
