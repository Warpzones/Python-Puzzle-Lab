const copy = {
  fr: {
    title: "Atelier Énigmes Python — Défis de programmation", siteName: "Atelier Énigmes Python",
    mainNavigation: "Navigation principale", preferences: "Préférences d'affichage", theme: "Thème", language: "Langue",
    themeDefault: "Système", themeLight: "Clair", themeDark: "Sombre", home: "Accueil", problems: "Énigmes",
    homeEyebrow: "APPRENDRE EN RÉSOLVANT", heroLineOne: "Pensez le problème.", heroLineTwo: "Codez la solution.",
    introText: "Un terrain de jeu pour résoudre des énigmes avec Python. Choisissez un thème, puis comparez votre raisonnement à une solution expliquée.",
    exploreProblems: "Explorer les énigmes", heroIllustration: "Exemple de problème en Python", researchNote: "CARNET DE RECHERCHE", question: "LA QUESTION", howItWorks: "Comment ça marche",
    stepChooseTitle: "Choisissez", stepChooseText: "Un thème qui vous intéresse.", stepSolveTitle: "Cherchez", stepSolveText: "Écrivez et testez votre propre solution.", stepLearnTitle: "Progressez", stepLearnText: "Consultez le raisonnement et le code.",
    challengeEyebrow: "À VOUS DE JOUER", challengeTitle: "La bibliothèque d'énigmes", challengeCaption: "Choisissez une catégorie et parcourez ses énigmes Python.",
    problemType: "Catégorie", allTypes: "Toutes", problemNumber: "N° de l'énigme", goToProblem: "Aller", chooseByName: "Choisir par titre", randomProblem: "Énigme aléatoire", numberRange: "Saisis un numéro entre 1 et {total}.", sourceLabel: "Source :", showHint: "Indice", hintTitle: "Indice", showSolution: "Solution", solutionTitle: "Résultat", showCode: "Voir un code Python possible", reasoning: "Le raisonnement", previous: "Précédent", next: "Suivant",
    methodNote: "CONSEIL", methodTitle: "Résoudre pas à pas", understand: "Comprendre", understandText: "Repérez les règles et le résultat attendu.", breakDown: "Découper", breakDownText: "Transformez le problème en étapes.", test: "Vérifier", testText: "Testez votre code sur des exemples.",
    mistakeIsClue: "Une erreur est une piste.", footerLine: "Un problème à la fois. Une ligne de code à la fois.", backHome: "Retour à l'accueil ↑", count: "ÉNIGME {current} / {total}",
  },
  en: {
    title: "Python Puzzle Lab — Programming Challenges", siteName: "Python Puzzle Lab",
    mainNavigation: "Main navigation", preferences: "Display preferences", theme: "Theme", language: "Language",
    themeDefault: "System", themeLight: "Light", themeDark: "Dark", home: "Home", problems: "Puzzles",
    homeEyebrow: "LEARN BY SOLVING", heroLineOne: "Think through the problem.", heroLineTwo: "Code the solution.",
    introText: "A place to solve puzzles with Python. Choose a topic, then compare your reasoning with an explained solution.",
    exploreProblems: "Explore puzzles", heroIllustration: "Example of a Python problem", researchNote: "WORKING NOTES", question: "THE QUESTION", howItWorks: "How it works",
    stepChooseTitle: "Choose", stepChooseText: "A topic that interests you.", stepSolveTitle: "Solve", stepSolveText: "Write and test your own solution.", stepLearnTitle: "Learn", stepLearnText: "Review the reasoning and code.",
    challengeEyebrow: "YOUR TURN", challengeTitle: "The puzzle library", challengeCaption: "Choose a category and browse its Python puzzles.",
    problemType: "Category", allTypes: "All categories", problemNumber: "Puzzle number", goToProblem: "Go", chooseByName: "Choose by title", randomProblem: "Random puzzle", numberRange: "Enter a number from 1 to {total}.", sourceLabel: "Source:", showHint: "Hint", hintTitle: "Hint", showSolution: "Solution", solutionTitle: "Result", showCode: "View a possible Python solution", reasoning: "The reasoning", previous: "Previous", next: "Next",
    methodNote: "A HINT", methodTitle: "Solve it step by step", understand: "Understand", understandText: "Identify the rules and expected result.", breakDown: "Break it down", breakDownText: "Turn the problem into small steps.", test: "Verify", testText: "Test your code with examples.",
    mistakeIsClue: "A mistake is a clue.", footerLine: "One problem at a time. One line of code at a time.", backHome: "Back to home ↑", count: "PUZZLE {current} / {total}",
  },
};

const puzzles = window.PUZZLES;
const categories = window.PUZZLE_CATEGORIES;
const answers = window.PUZZLE_ANSWERS;
const $ = (selector) => document.querySelector(selector);
const languageSelect = $("#language-select");
const themeSelect = $("#theme-select");
const categoryFilters = $("#category-filters");
const problemNumber = $("#problem-number");
const problemPicker = $("#problem-picker");
const hintPanel = $("#hint-panel");
const solutionPanel = $("#solution-panel");
const codePanel = $("#code-panel");
const hintButton = $("#hint-button");
const solutionButton = $("#solution-button");
const codeButton = $("#code-button");
let language = readPreference("puzzle-language") || (navigator.language.toLowerCase().startsWith("en") ? "en" : "fr");
let activeCategory = "all";
let currentIndex = 0;

function readPreference(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { return; }
}

function setPanel(button, panel, open) {
  panel.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
}

function renderCategories() {
  const labels = copy[language];
  const available = Object.keys(categories).filter((key) => puzzles.some((puzzle) => puzzle.category === key));
  const options = [{ key: "all", label: labels.allTypes }, ...available.map((key) => ({ key, label: categories[key][language] }))];
  categoryFilters.replaceChildren(...options.map(({ key, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${activeCategory === key ? " is-selected" : ""}`;
    button.textContent = label;
    button.setAttribute("aria-pressed", String(activeCategory === key));
    button.addEventListener("click", () => {
      activeCategory = key;
      currentIndex = 0;
      renderCategories();
      renderPuzzle();
    });
    return button;
  }));
}

function getVisiblePuzzles() {
  return puzzles.filter((puzzle) => activeCategory === "all" || puzzle.category === activeCategory);
}

function renderPicker(visiblePuzzles) {
  problemPicker.replaceChildren(...visiblePuzzles.map((puzzle, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${String(index + 1).padStart(2, "0")} · ${(puzzle[language] || puzzle.fr).title}`;
    return option;
  }));
  problemPicker.value = String(currentIndex);
  problemNumber.max = String(visiblePuzzles.length);
  problemNumber.value = String(currentIndex + 1);
}

function renderPuzzle() {
  const labels = copy[language];
  const visiblePuzzles = getVisiblePuzzles();
  currentIndex = Math.min(currentIndex, visiblePuzzles.length - 1);
  const puzzle = visiblePuzzles[currentIndex];
  if (!puzzle) return;
  const detail = puzzle[language] || puzzle.fr;
  $("#category-label").textContent = categories[puzzle.category][language];
  $("#challenge-count").textContent = labels.count
    .replace("{current}", String(currentIndex + 1).padStart(2, "0"))
    .replace("{total}", String(visiblePuzzles.length).padStart(2, "0"));
  $("#challenge-title").textContent = detail.title;
  $("#challenge-prompt").textContent = detail.prompt;
  $("#hint-text").textContent = detail.goal || detail.hint;
  $("#solution-text").textContent = answers[puzzle.fr.title]?.[language] || answers[puzzle.fr.title]?.fr || "";
  $("#solution-code").textContent = detail.code;
  const source = $("#challenge-source");
  source.textContent = puzzle.source[language] || puzzle.source.fr;
  if (puzzle.sourceUrl) source.href = puzzle.sourceUrl;
  else source.removeAttribute("href");
  $("#previous-button").disabled = currentIndex === 0;
  $("#next-button").disabled = currentIndex === visiblePuzzles.length - 1;
  renderPicker(visiblePuzzles);
  setPanel(hintButton, hintPanel, false);
  setPanel(solutionButton, solutionPanel, false);
  setPanel(codeButton, codePanel, false);
}

function applyLanguage() {
  const labels = copy[language];
  document.documentElement.lang = language;
  document.title = labels.title;
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = labels[node.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", labels[node.dataset.i18nAria]); });
  languageSelect.value = language;
  renderCategories();
  renderPuzzle();
}

function setView(view) {
  document.querySelectorAll("[data-view-section]").forEach((section) => { section.hidden = section.dataset.viewSection !== view; });
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    if (button.classList.contains("nav-link")) {
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToProblem() {
  const requested = Number(problemNumber.value);
  const total = getVisiblePuzzles().length;
  if (!Number.isInteger(requested) || requested < 1 || requested > total) {
    problemNumber.setCustomValidity(copy[language].numberRange.replace("{total}", String(total)));
    problemNumber.reportValidity();
    return;
  }
  problemNumber.setCustomValidity("");
  currentIndex = requested - 1;
  renderPuzzle();
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
$("#go-to-problem").addEventListener("click", goToProblem);
problemNumber.addEventListener("input", () => problemNumber.setCustomValidity(""));
problemNumber.addEventListener("keydown", (event) => { if (event.key === "Enter") goToProblem(); });
problemPicker.addEventListener("change", () => {
  currentIndex = Number(problemPicker.value);
  renderPuzzle();
});
$("#random-puzzle").addEventListener("click", () => {
  const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  activeCategory = puzzle.category;
  currentIndex = getVisiblePuzzles().indexOf(puzzle);
  renderCategories();
  renderPuzzle();
  setView("problems");
});
$("#previous-button").addEventListener("click", () => { currentIndex -= 1; renderPuzzle(); });
$("#next-button").addEventListener("click", () => { currentIndex += 1; renderPuzzle(); });
hintButton.addEventListener("click", () => setPanel(hintButton, hintPanel, hintPanel.hidden));
solutionButton.addEventListener("click", () => setPanel(solutionButton, solutionPanel, solutionPanel.hidden));
codeButton.addEventListener("click", () => setPanel(codeButton, codePanel, codePanel.hidden));

languageSelect.addEventListener("change", () => {
  language = languageSelect.value;
  savePreference("puzzle-language", language);
  applyLanguage();
});
themeSelect.addEventListener("change", () => {
  const mode = themeSelect.value;
  if (mode === "default") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.dataset.theme = mode;
  savePreference("puzzle-theme", mode);
});

const storedLanguage = readPreference("puzzle-language");
if (storedLanguage === "en" || storedLanguage === "fr") language = storedLanguage;
const theme = readPreference("puzzle-theme") || "default";
if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
themeSelect.value = theme;
applyLanguage();
