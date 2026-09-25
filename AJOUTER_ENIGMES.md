# Ajouter des énigmes

Les énoncés et les codes se modifient dans `puzzle-bank.js`. Les catégories, le menu des problèmes et les compteurs se mettent à jour automatiquement.

## Ajouter une énigme

Ajoute un objet dans le tableau `window.PUZZLES`. Chaque problème contient une catégorie, une source et les textes français et anglais :

```js
{
  category: "maths",
  sourceUrl: "https://projecteuler.net/problem=1",
  source: {
    fr: "Project Euler — Problème 1",
    en: "Project Euler — Problem 1",
  },
  fr: {
    title: "Titre français",
    prompt: "Énoncé du problème.",
    goal: "Indice qui aide à démarrer.",
    code: "print(1 + 1)",
  },
  en: {
    title: "English title",
    prompt: "Problem statement.",
    goal: "A hint to get started.",
    code: "print(1 + 1)",
  },
},
```

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
