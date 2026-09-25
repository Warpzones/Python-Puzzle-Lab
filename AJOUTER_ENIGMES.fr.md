# Ajouter des énigmes

Les énoncés et les codes se modifient dans `puzzle-bank.js`. Les catégories, le menu des problèmes et les compteurs se mettent à jour automatiquement.

## Ajouter une énigme

Ajoute un objet dans le tableau `window.PUZZLES`. Chaque problème contient une catégorie, une source et les textes français et anglais :

```js
{
  category: "maths",
  difficulty: 10,
  sourceUrl: "https://projecteuler.net/problem=1",
  source: {
    fr: "Project Euler — Problème 1",
    en: "Project Euler — Problem 1",
  },
  modules: ["math"],
  fr: {
    title: "Titre français",
    prompt: "Énoncé du problème.",
    goal: "Indice qui aide à démarrer.",
    code: "import math\nprint(math.sqrt(4))",
  },
  en: {
    title: "English title",
    prompt: "Problem statement.",
    goal: "A hint to get started.",
    code: "import math\nprint(math.sqrt(4))",
  },
},
```

`modules` est facultatif. Indique les noms Python à importer dont le code a besoin, par exemple `math`. Omet ce champ ou utilise une liste vide si aucun import n'est nécessaire; la page affichera le statut correspondant.

`difficulty` est obligatoire et doit être un entier entre 1 (très facile) et 100 (très difficile). La fiche affiche cette note. Les niveaux utilisent des intervalles exclusifs : **Très facile (≤ 10)**, **Facile (10 < note ≤ 20)**, et ainsi de suite jusqu'à **Maître (90 < note ≤ 100)**. La numérotation et les compteurs suivent la catégorie et l'intervalle sélectionnés. Si une catégorie ne contient aucune énigme dans l'intervalle choisi, un message d'absence de résultats s'affiche. Le bouton aléatoire enlève le filtre de difficulté et continue de piocher dans tout le catalogue.

Pour un problème sans page source, retire `sourceUrl` et remplace le texte de `source` par son origine.

Ajoute ensuite le résultat final dans `puzzle-answers.js`, en utilisant exactement le titre français comme clé :

```js
"Titre français": { fr: "Résultat", en: "Answer" },
```

Le bouton **Indice** affiche `goal`, **Code** affiche `code` et **Solution** affiche seulement cette réponse finale.

## Ajouter une catégorie

Ajoute une entrée dans `window.PUZZLE_CATEGORIES` en haut de `puzzle-bank.js`, puis utilise son identifiant comme `category` dans les problèmes :

```js
window.PUZZLE_CATEGORIES = {
  maths: { fr: "Mathématiques", en: "Maths" },
  free: { fr: "Libre", en: "Open-ended" },
  science: { fr: "Sciences", en: "Science" },
};
```

La catégorie apparaît dès qu'elle possède au moins une énigme. Le numéro saisi et le compteur sont locaux à la catégorie sélectionnée; le bouton aléatoire, lui, pioche dans tout le catalogue. Les codes fournis n'utilisent pas de module Python externe.

La version anglaise principale est disponible dans [`README.md`](README.md) et [`AJOUTER_ENIGMES.md`](AJOUTER_ENIGMES.md).