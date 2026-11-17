/**
 * Pages locales « assurance emprunteur à <ville> », pour le référencement de
 * proximité autour de l'agence de Montereau-Fault-Yonne. Chaque page traite un
 * angle différent de l'assurance emprunteur, pour ne pas dupliquer le contenu
 * ni les pages ville de cpsolutions77.com.
 */

export type Section = {
  titre: string;
  paragraphes: string[];
  liste?: string[];
};

export type Ville = {
  slug: string;
  nom: string;
  /** Balise title (le suffixe du site est ajouté par le layout). */
  titre: string;
  description: string;
  h1: string;
  chapeau: string;
  sections: Section[];
  /** Accès à l'agence depuis la ville. */
  trajet: string;
  faq: { question: string; reponse: string }[];
};

export const VILLES: Ville[] = [
  {
    slug: "montereau-fault-yonne",
    nom: "Montereau-Fault-Yonne",
    titre: "Assurance emprunteur à Montereau-Fault-Yonne",
    description:
      "Comparez votre assurance emprunteur avec un courtier installé à Montereau-Fault-Yonne, 35 rue Jean Jaurès. Délégation, changement de contrat, étude sans engagement.",
    h1: "Votre assurance emprunteur à Montereau-Fault-Yonne",
    chapeau:
      "Mon Prêt Assuré est le service d'assurance emprunteur de CP Solutions, cabinet de courtage installé rue Jean Jaurès, en centre-ville de Montereau. Vous pouvez tout faire en ligne, ou passer nous voir avec votre offre de prêt.",
    sections: [
      {
        titre: "Comparer avant de signer votre prêt",
        paragraphes: [
          "Quand votre banque vous remet son offre de prêt, l'assurance qu'elle propose n'est qu'une option. La loi vous permet de choisir un autre assureur dès la signature, à condition que les garanties soient équivalentes à celles qu'elle exige : c'est la délégation d'assurance.",
          "Le bon moment pour nous appeler, c'est avant d'accepter l'offre. Nous comparons plusieurs assureurs sur votre profil, vérifions l'équivalence des garanties et transmettons à la banque un dossier complet.",
        ],
      },
      {
        titre: "Changer de contrat sur un prêt en cours",
        paragraphes: [
          "Depuis la loi Lemoine, vous pouvez changer d'assurance emprunteur à tout moment, sans frais. Il suffit d'un nouveau contrat aux garanties équivalentes. Votre banque dispose de dix jours ouvrés pour répondre à la demande de substitution.",
          "Apportez à l'agence votre tableau d'amortissement et votre contrat actuel, ou envoyez-les par e-mail : nous vous disons si un changement est intéressant pour vous, chiffres à l'appui.",
        ],
      },
      {
        titre: "Les documents à préparer",
        paragraphes: ["Pour une étude rapide, rassemblez :"],
        liste: [
          "l'offre de prêt ou le tableau d'amortissement ;",
          "la fiche standardisée d'information remise par la banque, qui liste les garanties exigées ;",
          "votre contrat d'assurance actuel, si vous avez déjà un prêt en cours.",
        ],
      },
    ],
    trajet:
      "L'agence est en centre-ville, au 35 rue Jean Jaurès, à une dizaine de minutes à pied de la gare. Stationnement en zone bleue devant l'agence.",
    faq: [
      {
        question: "Puis-je venir à l'agence sans rendez-vous ?",
        reponse:
          "Oui, l'agence est ouverte du lundi au samedi. Pour être sûr qu'un courtier soit disponible, appelez avant de passer ou prenez rendez-vous.",
      },
      {
        question: "Ma banque peut-elle refuser l'assurance que je lui propose ?",
        reponse:
          "Seulement si les garanties du nouveau contrat ne sont pas équivalentes à celles qu'elle exige. Elle doit motiver son refus par écrit. C'est pourquoi nous vérifions l'équivalence avant d'envoyer le dossier.",
      },
      {
        question: "Combien de temps prend un changement d'assurance emprunteur ?",
        reponse:
          "La banque a dix jours ouvrés pour répondre une fois le dossier complet reçu. Le nouveau contrat prend ensuite effet à une échéance prochaine du prêt. Un dossier complet dès le départ évite les allers-retours.",
      },
    ],
  },
  {
    slug: "fontainebleau",
    nom: "Fontainebleau",
    titre: "Assurance emprunteur à Fontainebleau et Avon",
    description:
      "Gros prêt immobilier à Fontainebleau ou Avon ? Comparez votre assurance emprunteur et choisissez la bonne quotité avec un courtier indépendant. Étude sans engagement.",
    h1: "Assurance emprunteur à Fontainebleau : sur un gros prêt, chaque point compte",
    chapeau:
      "À Fontainebleau et à Avon, les montants empruntés sont souvent élevés. Plus le capital assuré est important, plus l'écart entre l'assurance de la banque et une assurance individuelle peut peser sur le coût total du crédit.",
    sections: [
      {
        titre: "Pourquoi l'écart grandit avec le montant emprunté",
        paragraphes: [
          "L'assurance emprunteur est calculée sur le capital emprunté ou sur le capital restant dû. Sur un prêt important, une différence de taux d'assurance qui paraît faible se traduit par plusieurs milliers d'euros sur la durée du crédit.",
          "L'assurance groupe de la banque applique souvent un tarif moyen à tous ses clients. Une assurance individuelle tarifie votre profil réel : âge, état de santé, profession. C'est là que la comparaison prend tout son sens.",
        ],
      },
      {
        titre: "Bien choisir la quotité quand on emprunte à deux",
        paragraphes: [
          "La quotité, c'est la part du prêt couverte pour chaque emprunteur. À deux, on peut se couvrir à 50 % chacun, à 100 % chacun, ou dans une autre répartition, selon les revenus de chacun.",
          "Une quotité à 100 % sur chaque tête protège mieux le conjoint survivant, mais coûte plus cher. Une répartition proportionnelle aux revenus est souvent un bon équilibre. Votre banque peut imposer un minimum : nous construisons la répartition avec vous, dans ce cadre.",
        ],
      },
      {
        titre: "Au-delà de 200 000 euros par personne",
        paragraphes: [
          "Le questionnaire de santé n'est supprimé que si la part assurée ne dépasse pas 200 000 euros par emprunteur et que le prêt se termine avant vos 60 ans. Au-delà, l'assureur vous interroge sur votre santé. Nous vous aidons à remplir ce questionnaire correctement et à choisir des assureurs adaptés à votre situation.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 25 minutes en voiture de Fontainebleau, et Fontainebleau-Avon est reliée à Montereau par la ligne R du Transilien. Tout peut aussi se faire à distance.",
    faq: [
      {
        question: "Faut-il assurer chaque emprunteur à 100 % ?",
        reponse:
          "Ce n'est pas obligatoire, sauf si la banque l'exige. Une couverture à 100 % sur chaque tête protège davantage le co-emprunteur, mais coûte plus cher. Le bon choix dépend des revenus de chacun et de ce que vous voulez protéger.",
      },
      {
        question: "Mon prêt dépasse 200 000 euros : vais-je devoir remplir un questionnaire de santé ?",
        reponse:
          "Oui, si la part assurée sur votre tête dépasse 200 000 euros ou si le prêt se termine après vos 60 ans. Le plafond s'apprécie par emprunteur, selon sa quotité.",
      },
      {
        question: "Peut-on changer d'assurance pour un seul des deux emprunteurs ?",
        reponse:
          "Oui. Chaque emprunteur peut changer de contrat indépendamment, tant que les garanties restent équivalentes à celles exigées par la banque.",
      },
    ],
  },
  {
    slug: "melun",
    nom: "Melun",
    titre: "Assurance emprunteur à Melun : métiers à risque, gendarmes, policiers",
    description:
      "Gendarme, policier, pompier ou métier à risque à Melun ? Évitez les surprimes et les exclusions sur votre assurance emprunteur grâce à un courtier indépendant.",
    h1: "Assurance emprunteur à Melun, y compris pour les métiers à risque",
    chapeau:
      "Melun accueille notamment l'École des officiers de la gendarmerie nationale, et de nombreux agents de la sécurité et des secours vivent dans l'agglomération. Pour ces professions, l'assurance emprunteur de la banque applique souvent des surprimes ou des exclusions.",
    sections: [
      {
        titre: "Pourquoi certains métiers paient plus cher",
        paragraphes: [
          "Gendarmes, policiers, sapeurs-pompiers, militaires, agents de sécurité, mais aussi professions du bâtiment ou personnes qui se déplacent beaucoup : l'assureur estime que le risque d'accident est plus élevé et le fait payer, par une surprime ou par l'exclusion de certaines situations.",
          "Les assureurs n'ont pas tous la même politique. Certains couvrent les risques liés au métier sans surprime, d'autres les excluent purement et simplement. La comparaison porte donc autant sur les garanties que sur le prix.",
        ],
      },
      {
        titre: "Ce qu'il faut vérifier dans le contrat",
        paragraphes: ["Pour une profession exposée, lisez de près :"],
        liste: [
          "les exclusions liées au métier, notamment pendant les interventions ou les missions ;",
          "la couverture des sports ou activités pratiqués dans le cadre professionnel ;",
          "la définition de l'incapacité de travail : par rapport à votre métier, ou à toute activité ;",
          "les éventuelles surprimes et leur durée.",
        ],
      },
      {
        titre: "Et si votre contrat actuel vous pénalise",
        paragraphes: [
          "Vous avez accepté l'assurance de la banque avec une surprime ou une exclusion liée à votre métier ? Grâce à la loi Lemoine, vous pouvez en changer à tout moment, sans frais, dès lors que le nouveau contrat offre des garanties équivalentes. Nous cherchons un assureur qui couvre votre activité dans de meilleures conditions.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 35 minutes en voiture de Melun, et les deux villes sont reliées par la ligne R du Transilien. La plupart des dossiers se traitent par téléphone et par e-mail.",
    faq: [
      {
        question: "Mon assurance couvre-t-elle un accident en intervention ?",
        reponse:
          "Pas toujours. Certains contrats excluent les accidents survenus pendant les missions ou les interventions. C'est le premier point à vérifier si vous exercez un métier de la sécurité ou des secours.",
      },
      {
        question: "Une surprime liée à mon métier est-elle définitive ?",
        reponse:
          "Non. Vous pouvez changer d'assurance emprunteur à tout moment avec la loi Lemoine. Un autre assureur peut accepter votre profession sans surprime, ou avec une surprime plus faible.",
      },
      {
        question: "Dois-je déclarer mon métier exact à l'assureur ?",
        reponse:
          "Oui, et précisément. Une déclaration inexacte peut entraîner un refus d'indemnisation au moment d'un sinistre. Mieux vaut un contrat bien choisi pour votre métier qu'une déclaration approximative.",
      },
    ],
  },
  {
    slug: "nemours",
    nom: "Nemours",
    titre: "Assurance emprunteur à Nemours : après 50 ans, santé, droit à l'oubli",
    description:
      "Emprunter après 50 ans ou avec un problème de santé à Nemours : questionnaire médical, convention AERAS, droit à l'oubli. Un courtier indépendant vous accompagne.",
    h1: "Assurance emprunteur à Nemours, après 50 ans ou avec un problème de santé",
    chapeau:
      "Changer de logement à la retraite, acheter une résidence plus petite, financer des travaux : à Nemours comme ailleurs, on emprunte de plus en plus tard. L'assurance emprunteur devient alors le point délicat du dossier.",
    sections: [
      {
        titre: "Emprunter après 50 ans",
        paragraphes: [
          "Avec l'âge, le tarif de l'assurance emprunteur augmente, et le questionnaire de santé devient souvent obligatoire : il n'est supprimé que si le prêt se termine avant vos 60 ans et que la part assurée ne dépasse pas 200 000 euros.",
          "Les assureurs n'ont pas tous la même approche des emprunteurs seniors. Certains acceptent des âges de fin de prêt plus élevés, d'autres tarifient mieux certaines tranches d'âge. Comparer plusieurs offres fait souvent une vraie différence.",
        ],
      },
      {
        titre: "Avec un problème de santé : la convention AERAS",
        paragraphes: [
          "La convention AERAS, pour « s'assurer et emprunter avec un risque aggravé de santé », organise l'examen des dossiers présentant un risque de santé particulier. Elle prévoit plusieurs niveaux d'examen quand le premier assureur refuse ou propose des conditions très défavorables.",
          "Notre rôle est de présenter votre dossier aux assureurs les plus adaptés à votre situation, et de vous aider à comprendre les surprimes ou exclusions proposées avant de vous engager.",
        ],
      },
      {
        titre: "Le droit à l'oubli",
        paragraphes: [
          "Si vous avez eu un cancer ou une hépatite C, le droit à l'oubli vous dispense de le déclarer lorsque le protocole thérapeutique est terminé depuis cinq ans, sans rechute. Pour certaines autres pathologies, une grille de référence prévoit un accès à l'assurance sans surprime ni exclusion au-delà de certains délais.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 30 minutes en voiture de Nemours. Si vous préférez ne pas vous déplacer, tout peut se faire par téléphone, par e-mail ou par courrier.",
    faq: [
      {
        question: "Jusqu'à quel âge peut-on assurer un prêt immobilier ?",
        reponse:
          "Cela dépend des assureurs : les âges limites de souscription et de fin de couverture varient d'un contrat à l'autre, et certaines garanties s'arrêtent plus tôt que d'autres. C'est l'un des premiers points que nous comparons.",
      },
      {
        question: "Que faire si un assureur refuse de me couvrir ?",
        reponse:
          "Un refus d'un assureur ne signifie pas un refus de tous. Votre dossier peut être présenté à d'autres assureurs et, si besoin, examiné dans le cadre de la convention AERAS.",
      },
      {
        question: "Dois-je déclarer un cancer guéri ?",
        reponse:
          "Non, si votre protocole thérapeutique est terminé depuis plus de cinq ans sans rechute : c'est le droit à l'oubli. L'assureur ne peut pas vous interroger sur cette maladie ni en tenir compte.",
      },
    ],
  },
  {
    slug: "sens",
    nom: "Sens",
    titre: "Assurance emprunteur à Sens : changer de contrat sur un prêt en cours",
    description:
      "Vous remboursez un prêt immobilier à Sens ou dans le Sénonais ? Changez d'assurance emprunteur à tout moment avec la loi Lemoine. Démarches gérées par un courtier.",
    h1: "Assurance emprunteur à Sens : changer de contrat sur un prêt en cours",
    chapeau:
      "Beaucoup d'emprunteurs du Sénonais ont signé l'assurance proposée par leur banque sans la comparer. Elle peut pourtant être remplacée à tout moment, et la démarche est plus simple qu'on ne le croit.",
    sections: [
      {
        titre: "Ce que permet la loi Lemoine",
        paragraphes: [
          "Depuis 2022, vous pouvez résilier votre assurance emprunteur à tout moment, quelle que soit la date de signature de votre prêt, sans frais ni pénalité. La seule condition : que le nouveau contrat offre des garanties équivalentes à celles exigées par votre banque.",
          "Votre banque ne peut pas modifier le taux de votre prêt en contrepartie du changement d'assurance.",
        ],
      },
      {
        titre: "Les étapes d'un changement d'assurance",
        paragraphes: ["Concrètement, voici comment se déroule une substitution :"],
        liste: [
          "nous comparons votre contrat actuel avec plusieurs offres, à garanties équivalentes ;",
          "vous souscrivez le nouveau contrat, qui ne prend effet qu'une fois accepté par la banque ;",
          "la demande de substitution est envoyée à la banque, qui a dix jours ouvrés pour répondre ;",
          "en cas d'accord, la banque émet un avenant au prêt et l'ancien contrat est résilié.",
        ],
      },
      {
        titre: "Le bon moment pour comparer",
        paragraphes: [
          "L'assurance est souvent calculée sur le capital initial : vous payez alors la même cotisation du début à la fin, même quand il reste peu à rembourser. Changer tôt dans la vie du prêt maximise l'économie, mais une comparaison reste utile à tout moment.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 35 minutes en voiture de Sens, et les deux villes sont sur la ligne Paris-Sens. Un changement d'assurance se gère très bien à distance.",
    faq: [
      {
        question: "Mon prêt a été signé il y a plusieurs années, puis-je quand même changer ?",
        reponse:
          "Oui. La loi Lemoine s'applique à tous les prêts immobiliers en cours, quelle que soit leur date de signature.",
      },
      {
        question: "Que se passe-t-il si la banque refuse ?",
        reponse:
          "Elle doit motiver son refus par écrit, en indiquant les garanties manquantes. On peut alors ajuster le nouveau contrat pour atteindre l'équivalence, puis représenter la demande.",
      },
      {
        question: "Vais-je rester couvert pendant le changement ?",
        reponse:
          "Oui. L'ancien contrat reste en vigueur jusqu'à la date d'effet du nouveau, fixée une fois la substitution acceptée. Il n'y a pas de période sans assurance.",
      },
    ],
  },
  {
    slug: "provins",
    nom: "Provins",
    titre: "Assurance emprunteur à Provins : indépendants, commerçants, investisseurs",
    description:
      "Commerçant, indépendant ou investisseur à Provins ? Choisissez une assurance emprunteur adaptée : garanties forfaitaires, franchises, prêt locatif. Étude sans engagement.",
    h1: "Assurance emprunteur à Provins, pour les indépendants et les investisseurs",
    chapeau:
      "Commerçants, artisans, professions libérales, investisseurs dans l'ancien : à Provins, beaucoup d'emprunteurs ne sont pas salariés ou achètent pour louer. Leur assurance emprunteur mérite une attention particulière.",
    sections: [
      {
        titre: "Indépendants : forfaitaire ou indemnitaire",
        paragraphes: [
          "En cas d'arrêt de travail, deux logiques existent. Avec une garantie indemnitaire, l'assureur compense votre perte réelle de revenus : si vous ne perdez rien, il ne verse rien. Avec une garantie forfaitaire, il prend en charge les mensualités prévues, quelle que soit votre perte de revenus.",
          "Pour un indépendant, dont les revenus varient et dont la protection sociale est plus limitée, une garantie forfaitaire est souvent plus protectrice. C'est l'un des points que nous comparons en priorité.",
        ],
      },
      {
        titre: "Les franchises, à regarder de près",
        paragraphes: [
          "La franchise est la période pendant laquelle l'assureur ne verse rien au début d'un arrêt de travail, souvent 30, 60 ou 90 jours. Pour un commerçant qui ne peut pas s'arrêter longtemps sans perdre son chiffre d'affaires, une franchise courte peut valoir le surcoût.",
        ],
      },
      {
        titre: "Investissement locatif",
        paragraphes: [
          "Pour un prêt locatif, la banque exige en général les garanties décès et invalidité, et parfois moins de garanties liées à l'arrêt de travail que pour une résidence principale. Ajuster les garanties à ce qui est réellement exigé permet souvent de réduire la cotisation.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 40 minutes en voiture de Provins. Pour la plupart de nos clients provinois, tout se fait par téléphone et par e-mail.",
    faq: [
      {
        question: "Je suis travailleur indépendant, quelle garantie choisir ?",
        reponse:
          "Une garantie forfaitaire, qui prend en charge vos mensualités sans tenir compte de votre perte de revenus, est souvent mieux adaptée aux revenus variables des indépendants. Elle doit toutefois être acceptée par votre banque.",
      },
      {
        question: "Faut-il les mêmes garanties pour un prêt locatif ?",
        reponse:
          "Pas forcément. Les garanties exigées sont fixées par la banque et peuvent être moins nombreuses que pour une résidence principale. Nous vérifions ce qui est réellement demandé avant de comparer.",
      },
      {
        question: "Qu'est-ce que la franchise en arrêt de travail ?",
        reponse:
          "C'est le délai pendant lequel l'assureur ne verse rien au début d'un arrêt, souvent 30, 60 ou 90 jours. Plus elle est courte, plus la cotisation est élevée, mais plus vous êtes protégé rapidement.",
      },
    ],
  },
];

export function getVille(slug: string): Ville | undefined {
  return VILLES.find((v) => v.slug === slug);
}
