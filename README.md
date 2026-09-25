# Python Puzzle Lab

A website for sharing programming puzzles to solve with Python, along with hints, example code, and answers. It is for anyone who wants to practice problem-solving and programming one challenge at a time.

## Purpose

I want to collect and share puzzles and possible Python solutions. Each page presents a problem, gives visitors time to work on it, and lets them reveal a hint, an example of code, and the answer separately.

Puzzles are organized by category, and numbering starts over in each category. Visitors can jump to a puzzle by number or title, or pick one at random from the entire catalog. Each problem lists its source.

## The Role of AI

The website was developed with AI assistance. AI helped create and improve the website itself; the site does not use AI to generate puzzles, write their solutions, or answer users. The creator selects, adds, and shares the problems, hints, and solutions. External problems link to their original sources.

## Use the Site

Open [`index.html`](index.html) in a web browser. The site is static and does not require a server or any Python dependencies. An internet connection is needed to load the web fonts; the rest of the site runs locally.

The site initially follows your browser's language and can be switched between French and English with the language selector. The theme can follow your system setting or be set to light or dark. These preferences are saved in your browser.

## Add Content

See the detailed guide in [`AJOUTER_ENIGMES.md`](AJOUTER_ENIGMES.md). In short:

1. Add French and English problem statements, hints, and code to [`puzzle-bank.js`](puzzle-bank.js).
2. Add the final answer in French and English to [`puzzle-answers.js`](puzzle-answers.js), using the exact French title as its key.
3. To add a category, add its French and English names to `PUZZLE_CATEGORIES`, then assign its ID to the relevant puzzles.

Category buttons, title menus, and puzzle counts are generated automatically from the catalog.

## Project Files

- [`index.html`](index.html) contains the page structure and controls.
- [`site.js`](site.js) handles navigation, preferences, categories, and puzzle display.
- [`puzzle-bank.js`](puzzle-bank.js) contains the categories and puzzles.
- [`puzzle-answers.js`](puzzle-answers.js) contains the short answers shown by the Solution button.
- [`styles.css`](styles.css) and [`site-theme.css`](site-theme.css) define the layout and themes.
- [`AJOUTER_ENIGMES.md`](AJOUTER_ENIGMES.md) explains how to add content to the catalog.

The French versions are available in [`README.fr.md`](README.fr.md) and [`AJOUTER_ENIGMES.fr.md`](AJOUTER_ENIGMES.fr.md).