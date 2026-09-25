# Atelier Énigmes Python

Un site pour partager des problèmes à résoudre avec Python, leurs indices, des exemples de code et leurs résultats. Il s'adresse aux personnes qui veulent s'entraîner à raisonner et à programmer, un problème à la fois.

## Le but du site

Je souhaite rassembler et partager des énigmes ainsi que des solutions possibles en Python. Le site présente un énoncé, laisse le temps de chercher, puis permet de révéler séparément un indice, un exemple de code et le résultat.

Les problèmes sont classés par catégorie. Le numéro affiché est propre à la catégorie sélectionnée. On peut aussi rejoindre un problème par son numéro ou son titre, ou en tirer un au hasard dans tout le catalogue. Les sources sont indiquées sous chaque énoncé.

## Le rôle de l'IA

Le site a été développé avec l'aide d'une IA. Cette aide concerne la création et l'amélioration du site lui-même. Le site ne fait pas appel à une IA pour inventer des énigmes, écrire leur solution ou répondre aux utilisateurs. Les problèmes, indices et solutions sont sélectionnés, ajoutés et partagés par le créateur; les problèmes externes renvoient à leur source.

## Utiliser le site

Ouvre [`index.html`](index.html) dans un navigateur. Le site est statique et n'a besoin ni de serveur ni de dépendance Python. Une connexion Internet est nécessaire pour charger les polices web; le reste du site fonctionne localement.

La langue est choisie selon celle du navigateur, puis peut être changée avec le sélecteur FR/EN. Le thème peut suivre le système ou être forcé en clair ou sombre. Ces préférences sont enregistrées dans le navigateur.

## Ajouter du contenu

Le guide détaillé est dans [`AJOUTER_ENIGMES.fr.md`](AJOUTER_ENIGMES.fr.md). En bref :

1. Ajoute les énoncés, indices et codes français/anglais dans [`puzzle-bank.js`](puzzle-bank.js).
2. Ajoute le résultat français et anglais, associé au titre français exact, dans [`puzzle-answers.js`](puzzle-answers.js).
3. Pour une nouvelle catégorie, ajoute ses noms français et anglais dans `PUZZLE_CATEGORIES`, puis attribue son identifiant aux problèmes concernés.

Les boutons de catégorie, les menus de titres et les compteurs sont générés automatiquement à partir du catalogue.

## Organisation

- [`index.html`](index.html) contient la structure des pages et des contrôles.
- [`site.js`](site.js) gère la navigation, les préférences, les catégories et l'affichage des problèmes.
- [`puzzle-bank.js`](puzzle-bank.js) contient les catégories et les problèmes.
- [`puzzle-answers.js`](puzzle-answers.js) contient les résultats courts affichés par le bouton Solution.
- [`styles.css`](styles.css) et [`site-theme.css`](site-theme.css) définissent la présentation et les thèmes.
- [`AJOUTER_ENIGMES.fr.md`](AJOUTER_ENIGMES.fr.md) explique comment contribuer au catalogue.

La version anglaise principale est disponible dans [`README.md`](README.md) et [`AJOUTER_ENIGMES.md`](AJOUTER_ENIGMES.md).