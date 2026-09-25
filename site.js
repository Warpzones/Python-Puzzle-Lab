const translations = {
  fr: {
    title: "Atelier Énigmes Python — Défis de programmation", siteName: "Atelier Énigmes Python",
    mainNavigation: "Navigation principale", preferences: "Préférences d'affichage", theme: "Thème", language: "Langue",
    themeDefault: "Système", themeLight: "Clair", themeDark: "Sombre", home: "Accueil", problems: "Énigmes",
    homeEyebrow: "APPRENDRE EN RÉSOLVANT", heroLineOne: "Pensez le problème.", heroLineTwo: "Codez la solution.",
    introText: "Un terrain de jeu pour résoudre des énigmes avec Python. Choisissez un thème, puis comparez votre raisonnement à une solution expliquée.",
    exploreProblems: "Explorer les énigmes", heroIllustration: "Exemple de problème en Python", researchNote: "CARNET DE RECHERCHE", question: "LA QUESTION", howItWorks: "Comment ça marche",
    stepChooseTitle: "Choisissez", stepChooseText: "Un thème qui vous intéresse.", stepSolveTitle: "Cherchez", stepSolveText: "Écrivez et testez votre propre solution.", stepLearnTitle: "Progressez", stepLearnText: "Consultez le raisonnement et le code.",
    challengeEyebrow: "À VOUS DE JOUER", challengeTitle: "La bibliothèque d'énigmes", challengeCaption: "Choisissez une catégorie et parcourez ses énigmes Python.",
    problemType: "Catégorie", allCategories: "Toutes", problemNumber: "N° dans la catégorie", goToProblem: "Aller", chooseByName: "Choisir par titre", randomProblem: "Énigme aléatoire", numberRange: "Saisis un numéro entre 1 et {total}.",
    modulesLabel: "Modules Python :", noModules: "Aucun module requis", importModules: "À importer :", difficultyLabel: "Difficulté", difficultyFilter: "Niveau de difficulté", allDifficulties: "Tous les niveaux",
    difficultyThresholds: ["Très facile (≤ 10)", "Facile (10 < note ≤ 20)", "Assez facile (20 < note ≤ 30)", "Modérée (30 < note ≤ 40)", "Intermédiaire (40 < note ≤ 50)", "Assez difficile (50 < note ≤ 60)", "Difficile (60 < note ≤ 70)", "Très difficile (70 < note ≤ 80)", "Expert (80 < note ≤ 90)", "Maître (90 < note ≤ 100)"],
    noFilteredPuzzles: "Aucune énigme dans cette tranche pour cette catégorie. Choisis un autre niveau ou une autre catégorie.",
    sourceLabel: "Source :", showHint: "Indice", hintTitle: "Indice", showSolution: "Solution", solutionTitle: "Résultat", showCode: "Voir un code Python possible", previous: "Précédent", next: "Suivant",
    methodNote: "CONSEIL", methodTitle: "Résoudre pas à pas", understand: "Comprendre", understandText: "Repérez les règles et le résultat attendu.", breakDown: "Découper", breakDownText: "Transformez le problème en étapes.", test: "Vérifier", testText: "Testez votre code sur des exemples.",
    mistakeIsClue: "Une erreur est une piste.", footerLine: "Un problème à la fois. Une ligne de code à la fois.", backHome: "Retour à l'accueil ↑", puzzleCount: "ÉNIGME {current} / {total}",
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
    problemType: "Category", allCategories: "All categories", problemNumber: "Number in category", goToProblem: "Go", chooseByName: "Choose by title", randomProblem: "Random puzzle", numberRange: "Enter a number from 1 to {total}.",
    modulesLabel: "Python modules:", noModules: "No modules required", importModules: "Import:", difficultyLabel: "Difficulty", difficultyFilter: "Difficulty level", allDifficulties: "All levels",
    difficultyThresholds: ["Very easy (≤ 10)", "Easy (10 < score ≤ 20)", "Fairly easy (20 < score ≤ 30)", "Moderate (30 < score ≤ 40)", "Intermediate (40 < score ≤ 50)", "Somewhat difficult (50 < score ≤ 60)", "Difficult (60 < score ≤ 70)", "Very difficult (70 < score ≤ 80)", "Expert (80 < score ≤ 90)", "Master (90 < score ≤ 100)"],
    noFilteredPuzzles: "No puzzles in this difficulty range for this category. Choose a different level or category.",
    sourceLabel: "Source:", showHint: "Hint", hintTitle: "Hint", showSolution: "Solution", solutionTitle: "Result", showCode: "View a possible Python solution", previous: "Previous", next: "Next",
    methodNote: "A HINT", methodTitle: "Solve it step by step", understand: "Understand", understandText: "Identify the rules and expected result.", breakDown: "Break it down", breakDownText: "Turn the problem into small steps.", test: "Verify", testText: "Test your code with examples.",
    mistakeIsClue: "A mistake is a clue.", footerLine: "One problem at a time. One line of code at a time.", backHome: "Back to home ↑", puzzleCount: "PUZZLE {current} / {total}",
  },
};

const puzzleList = window.PUZZLES;
const puzzleCategories = window.PUZZLE_CATEGORIES;
const puzzleResults = window.PUZZLE_ANSWERS;
const getElement = (selector) => document.querySelector(selector);
const languageSelect = getElement("#language-select");
const themeSelect = getElement("#theme-select");
const categoryFilterContainer = getElement("#category-filters");
const problemNumberInput = getElement("#problem-number");
const problemTitleSelect = getElement("#problem-picker");
const difficultyFilter = getElement("#difficulty-filter");
const moduleStatus = getElement("#module-status");
const hintPanel = getElement("#hint-panel");
const solutionPanel = getElement("#solution-panel");
const codePanel = getElement("#code-panel");
const hintButton = getElement("#hint-button");
const solutionButton = getElement("#solution-button");
const codeButton = getElement("#code-button");
let selectedLanguage = readPreference("puzzle-language") || (navigator.language.toLowerCase().startsWith("en") ? "en" : "fr");
let selectedCategory = "all";
let selectedDifficultyLevel = null;
let selectedPuzzleIndex = 0;

function readPreference(preferenceName) {
  try {
    return localStorage.getItem(preferenceName);
  } catch {
    return null;
  }
}

function savePreference(preferenceName, preferenceValue) {
  try {
    localStorage.setItem(preferenceName, preferenceValue);
  } catch {
    return;
  }
}

function setDisclosure(button, panel, isExpanded) {
  panel.hidden = !isExpanded;
  button.setAttribute("aria-expanded", String(isExpanded));
}

function getCategoryPuzzles() {
  const categoryPuzzles = puzzleList.filter((puzzle) =>
    selectedCategory === "all" || puzzle.category === selectedCategory);
  if (selectedDifficultyLevel === null) return categoryPuzzles;

  const lowerBound = selectedDifficultyLevel - 10;
  return categoryPuzzles.filter((puzzle) =>
    puzzle.difficulty > lowerBound && puzzle.difficulty <= selectedDifficultyLevel);
}

function renderDifficultyFilter() {
  const localizedText = translations[selectedLanguage];
  const options = [
    { value: "all", label: localizedText.allDifficulties },
    ...localizedText.difficultyThresholds.map((label, index) => ({
      value: String((index + 1) * 10),
      label,
    })),
  ];

  difficultyFilter.replaceChildren(...options.map(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }));
  difficultyFilter.value = selectedDifficultyLevel === null ? "all" : String(selectedDifficultyLevel);
}

function renderCategoryFilters() {
  const localizedText = translations[selectedLanguage];
  const availableCategoryIds = Object.keys(puzzleCategories).filter((categoryId) =>
    puzzleList.some((puzzle) => puzzle.category === categoryId));
  const categoryOptions = [
    { id: "all", label: localizedText.allCategories },
    ...availableCategoryIds.map((categoryId) => ({
      id: categoryId,
      label: puzzleCategories[categoryId][selectedLanguage],
    })),
  ];

  categoryFilterContainer.replaceChildren(...categoryOptions.map((categoryOption) => {
    const categoryButton = document.createElement("button");
    const isSelected = selectedCategory === categoryOption.id;
    categoryButton.type = "button";
    categoryButton.className = `filter-button${isSelected ? " is-selected" : ""}`;
    categoryButton.textContent = categoryOption.label;
    categoryButton.setAttribute("aria-pressed", String(isSelected));
    categoryButton.addEventListener("click", () => {
      selectedCategory = categoryOption.id;
      selectedPuzzleIndex = 0;
      renderCategoryFilters();
      renderCurrentPuzzle();
    });
    return categoryButton;
  }));
}

function renderProblemTitleSelect(categoryPuzzles) {
  problemTitleSelect.replaceChildren(...categoryPuzzles.map((puzzle, puzzleIndex) => {
    const puzzleOption = document.createElement("option");
    const localizedPuzzle = puzzle[selectedLanguage] || puzzle.fr;
    puzzleOption.value = String(puzzleIndex);
    puzzleOption.textContent = `${String(puzzleIndex + 1).padStart(2, "0")} · ${localizedPuzzle.title}`;
    return puzzleOption;
  }));
  problemTitleSelect.value = String(selectedPuzzleIndex);
  problemNumberInput.max = String(categoryPuzzles.length);
  problemNumberInput.value = categoryPuzzles.length ? String(selectedPuzzleIndex + 1) : "";
  problemNumberInput.disabled = categoryPuzzles.length === 0;
  problemTitleSelect.disabled = categoryPuzzles.length === 0;
  getElement("#go-to-problem").disabled = categoryPuzzles.length === 0;
}

function renderCurrentPuzzle() {
  const localizedText = translations[selectedLanguage];
  const categoryPuzzles = getCategoryPuzzles();
  selectedPuzzleIndex = categoryPuzzles.length
    ? Math.min(Math.max(0, selectedPuzzleIndex), categoryPuzzles.length - 1)
    : 0;
  const currentPuzzle = categoryPuzzles[selectedPuzzleIndex];
  if (!currentPuzzle) {
    getElement("#challenge-layout").hidden = true;
    getElement("#empty-state").hidden = false;
    renderProblemTitleSelect(categoryPuzzles);
    return;
  }
  getElement("#challenge-layout").hidden = false;
  getElement("#empty-state").hidden = true;

  const localizedPuzzle = currentPuzzle[selectedLanguage] || currentPuzzle.fr;
  const puzzleNumber = selectedPuzzleIndex + 1;
  getElement("#category-label").textContent = puzzleCategories[currentPuzzle.category][selectedLanguage];
  getElement("#challenge-count").textContent = localizedText.puzzleCount
    .replace("{current}", String(puzzleNumber).padStart(2, "0"))
    .replace("{total}", String(categoryPuzzles.length).padStart(2, "0"));
  getElement("#challenge-title").textContent = localizedPuzzle.title;
  getElement("#challenge-prompt").textContent = localizedPuzzle.prompt;
  getElement("#hint-text").textContent = localizedPuzzle.goal;
  getElement("#solution-text").textContent = puzzleResults[currentPuzzle.fr.title][selectedLanguage];
  getElement("#solution-code").textContent = localizedPuzzle.code;

  const sourceLink = getElement("#challenge-source");
  sourceLink.textContent = currentPuzzle.source[selectedLanguage] || currentPuzzle.source.fr;
  if (currentPuzzle.sourceUrl) sourceLink.href = currentPuzzle.sourceUrl;
  else sourceLink.removeAttribute("href");
  const requiredModules = currentPuzzle.modules || [];
  moduleStatus.textContent = requiredModules.length
    ? `${localizedText.importModules} ${requiredModules.join(", ")}`
    : localizedText.noModules;
  moduleStatus.classList.toggle("is-required", requiredModules.length > 0);
  const difficulty = Number(currentPuzzle.difficulty);
  const difficultyValue = Number.isInteger(difficulty) && difficulty >= 1 && difficulty <= 100 ? difficulty : 1;
  getElement("#difficulty-value").textContent = `${difficultyValue}/100`;

  getElement("#previous-button").disabled = selectedPuzzleIndex === 0;
  getElement("#next-button").disabled = selectedPuzzleIndex === categoryPuzzles.length - 1;
  renderProblemTitleSelect(categoryPuzzles);
  setDisclosure(hintButton, hintPanel, false);
  setDisclosure(solutionButton, solutionPanel, false);
  setDisclosure(codeButton, codePanel, false);
}

function applyTranslations() {
  const localizedText = translations[selectedLanguage];
  document.documentElement.lang = selectedLanguage;
  document.title = localizedText.title;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = localizedText[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", localizedText[element.dataset.i18nAria]);
  });
  languageSelect.value = selectedLanguage;
  renderDifficultyFilter();
  renderCategoryFilters();
  renderCurrentPuzzle();
}

function showView(viewName) {
  document.querySelectorAll("[data-view-section]").forEach((section) => {
    section.hidden = section.dataset.viewSection !== viewName;
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    const isActive = button.dataset.view === viewName;
    button.classList.toggle("is-active", isActive);
    if (button.classList.contains("nav-link")) {
      if (isActive) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToPuzzleNumber() {
  const requestedPuzzleNumber = Number(problemNumberInput.value);
  const categoryPuzzleCount = getCategoryPuzzles().length;
  if (!Number.isInteger(requestedPuzzleNumber) || requestedPuzzleNumber < 1 || requestedPuzzleNumber > categoryPuzzleCount) {
    problemNumberInput.setCustomValidity(translations[selectedLanguage].numberRange.replace("{total}", String(categoryPuzzleCount)));
    problemNumberInput.reportValidity();
    return;
  }

  problemNumberInput.setCustomValidity("");
  selectedPuzzleIndex = requestedPuzzleNumber - 1;
  renderCurrentPuzzle();
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});
getElement("#go-to-problem").addEventListener("click", goToPuzzleNumber);
difficultyFilter.addEventListener("change", () => {
  selectedDifficultyLevel = difficultyFilter.value === "all" ? null : Number(difficultyFilter.value);
  selectedPuzzleIndex = 0;
  renderCurrentPuzzle();
});
problemNumberInput.addEventListener("input", () => problemNumberInput.setCustomValidity(""));
problemNumberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") goToPuzzleNumber();
});
problemTitleSelect.addEventListener("change", () => {
  selectedPuzzleIndex = Number(problemTitleSelect.value);
  renderCurrentPuzzle();
});
getElement("#random-puzzle").addEventListener("click", () => {
  const randomPuzzle = puzzleList[Math.floor(Math.random() * puzzleList.length)];
  selectedDifficultyLevel = null;
  selectedCategory = randomPuzzle.category;
  selectedPuzzleIndex = getCategoryPuzzles().indexOf(randomPuzzle);
  renderDifficultyFilter();
  renderCategoryFilters();
  renderCurrentPuzzle();
  showView("problems");
});
getElement("#previous-button").addEventListener("click", () => {
  selectedPuzzleIndex -= 1;
  renderCurrentPuzzle();
});
getElement("#next-button").addEventListener("click", () => {
  selectedPuzzleIndex += 1;
  renderCurrentPuzzle();
});
hintButton.addEventListener("click", () => setDisclosure(hintButton, hintPanel, hintPanel.hidden));
solutionButton.addEventListener("click", () => setDisclosure(solutionButton, solutionPanel, solutionPanel.hidden));
codeButton.addEventListener("click", () => setDisclosure(codeButton, codePanel, codePanel.hidden));

languageSelect.addEventListener("change", () => {
  selectedLanguage = languageSelect.value;
  savePreference("puzzle-language", selectedLanguage);
  applyTranslations();
});
themeSelect.addEventListener("change", () => {
  const selectedTheme = themeSelect.value;
  if (selectedTheme === "default") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.dataset.theme = selectedTheme;
  savePreference("puzzle-theme", selectedTheme);
});

const savedLanguage = readPreference("puzzle-language");
if (savedLanguage === "en" || savedLanguage === "fr") selectedLanguage = savedLanguage;
const savedTheme = readPreference("puzzle-theme") || "default";
if (savedTheme === "light" || savedTheme === "dark") document.documentElement.dataset.theme = savedTheme;
themeSelect.value = savedTheme;
applyTranslations();
