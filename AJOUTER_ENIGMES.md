# Add Puzzles

Edit puzzle statements and code in `puzzle-bank.js`. Categories, the puzzle menu, and puzzle counts update automatically.

## Add a Puzzle

Add an object to the `window.PUZZLES` array. Each puzzle needs a category, a source, and French and English text:

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

`modules` is optional. List the Python import names required by the code, such as `math`. Omit the field or use an empty array when no imports are needed; the puzzle page will show the appropriate status.

`difficulty` is required and must be an integer from 1 (easiest) to 100 (hardest). The problem page displays the rating as a number. Difficulty levels use exclusive ranges: **Very easy (≤ 10)**, **Easy (10 < score ≤ 20)**, and so on through **Master (90 < score ≤ 100)**. Puzzle numbering and counts update to match the selected category and range. If a category has no puzzles in a selected range, the page displays an empty-state message. The random button clears the difficulty filter and still draws from the full catalog.

For a puzzle without a source webpage, remove `sourceUrl` and set `source` to describe where it came from.

Then add the final answer to `puzzle-answers.js`, using the exact French title as its key:

```js
"Titre français": { fr: "Résultat", en: "Answer" },
```

The **Hint** button displays `goal`, **Code** displays `code`, and **Solution** displays only the final answer.

## Add a Category

Add an entry to `window.PUZZLE_CATEGORIES` at the top of `puzzle-bank.js`, then use its ID as the `category` value for each relevant puzzle:

```js
window.PUZZLE_CATEGORIES = {
  maths: { fr: "Mathématiques", en: "Maths" },
  free: { fr: "Libre", en: "Open-ended" },
  science: { fr: "Sciences", en: "Science" },
};
```

The category appears as soon as it has at least one puzzle. Number entry and puzzle counts follow the selected category, while the random button draws from the entire catalog. The included Python examples do not require external modules.

The French guide is [`AJOUTER_ENIGMES.fr.md`](AJOUTER_ENIGMES.fr.md).
