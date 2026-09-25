window.PUZZLE_CATEGORIES = {
  maths: { fr: "Mathématiques", en: "Maths" },
  free: { fr: "Libre", en: "Open-ended" },
};

window.PUZZLES = [
  {
    category: "maths", difficulty: 10, sourceUrl: "https://projecteuler.net/problem=1",
    source: { fr: "Project Euler — Problème 1", en: "Project Euler — Problem 1" },
    fr: { title: "Multiples de 3 ou 5", prompt: "Additionne une seule fois tous les nombres naturels strictement inférieurs à 1 000 qui sont divisibles par 3 ou par 5.", goal: "Évite de compter deux fois les nombres divisibles par 3 et par 5.", code: "total = 0\nfor number in range(1, 1000):\n    if number % 3 == 0 or number % 5 == 0:\n        total += number\n\nprint(total)  # 233168" },
    en: { title: "Multiples of 3 or 5", prompt: "Add every natural number below 1,000 that is divisible by 3 or 5, counting each number only once.", goal: "Avoid counting numbers divisible by both 3 and 5 twice.", code: "total = 0\nfor number in range(1, 1000):\n    if number % 3 == 0 or number % 5 == 0:\n        total += number\n\nprint(total)  # 233168" },
  },
  {
    category: "maths", difficulty: 15, sourceUrl: "https://projecteuler.net/problem=2",
    source: { fr: "Project Euler — Problème 2", en: "Project Euler — Problem 2" },
    fr: { title: "Nombres pairs de Fibonacci", prompt: "Dans la suite de Fibonacci commençant par 1 et 2, additionne les termes pairs qui ne dépassent pas quatre millions.", goal: "Génère les termes au fur et à mesure sans construire toute la suite en mémoire.", code: "previous, current = 1, 2\ntotal = 0\n\nwhile current <= 4_000_000:\n    if current % 2 == 0:\n        total += current\n    previous, current = current, previous + current\n\nprint(total)  # 4613732" },
    en: { title: "Even Fibonacci numbers", prompt: "In the Fibonacci sequence starting with 1 and 2, add the even terms that do not exceed four million.", goal: "Generate terms as you go instead of storing the whole sequence.", code: "previous, current = 1, 2\ntotal = 0\n\nwhile current <= 4_000_000:\n    if current % 2 == 0:\n        total += current\n    previous, current = current, previous + current\n\nprint(total)  # 4613732" },
  },
  {
    category: "maths", difficulty: 25, sourceUrl: "https://projecteuler.net/problem=4",
    source: { fr: "Project Euler — Problème 4", en: "Project Euler — Problem 4" },
    fr: { title: "Le plus grand palindrome", prompt: "Trouve le plus grand palindrome qui peut s'écrire comme le produit de deux nombres à trois chiffres.", goal: "Ne conserve que les produits dont l'écriture se lit dans les deux sens.", code: "largest = 0\nfor left in range(100, 1000):\n    for right in range(left, 1000):\n        product = left * right\n        digits = str(product)\n        if digits == digits[::-1] and product > largest:\n            largest = product\n\nprint(largest)  # 906609" },
    en: { title: "The largest palindrome", prompt: "Find the largest palindrome that can be written as the product of two three-digit numbers.", goal: "Keep only products whose digits read the same forwards and backwards.", code: "largest = 0\nfor left in range(100, 1000):\n    for right in range(left, 1000):\n        product = left * right\n        digits = str(product)\n        if digits == digits[::-1] and product > largest:\n            largest = product\n\nprint(largest)  # 906609" },
  },
  {
    category: "maths", difficulty: 20, sourceUrl: "https://projecteuler.net/problem=5",
    source: { fr: "Project Euler — Problème 5", en: "Project Euler — Problem 5" },
    fr: { title: "Divisible de 1 à 20", prompt: "Trouve le plus petit entier positif qui est divisible sans reste par chacun des nombres de 1 à 20.", goal: "Construis progressivement le plus petit commun multiple, sans module externe.", code: "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\nmultiple = 1\nfor number in range(2, 21):\n    multiple = multiple * number // gcd(multiple, number)\n\nprint(multiple)  # 232792560" },
    en: { title: "Smallest multiple", prompt: "Find the smallest positive integer that is evenly divisible by every number from 1 to 20.", goal: "Build the least common multiple step by step without an external module.", code: "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\nmultiple = 1\nfor number in range(2, 21):\n    multiple = multiple * number // gcd(multiple, number)\n\nprint(multiple)  # 232792560" },
  },
  {
    category: "maths", difficulty: 35, sourceUrl: "https://projecteuler.net/problem=7",
    source: { fr: "Project Euler — Problème 7", en: "Project Euler — Problem 7" },
    fr: { title: "Le 10 001e nombre premier", prompt: "Quel est le 10 001e nombre premier ? Le nombre 2 est le premier.", goal: "Teste les diviseurs jusqu'à la racine carrée du candidat.", code: "def is_prime(number):\n    if number < 2:\n        return False\n    divisor = 2\n    while divisor * divisor <= number:\n        if number % divisor == 0:\n            return False\n        divisor += 1\n    return True\n\ncount = 0\ncandidate = 1\nwhile count < 10001:\n    candidate += 1\n    if is_prime(candidate):\n        count += 1\n\nprint(candidate)  # 104743" },
    en: { title: "The 10,001st prime", prompt: "What is the 10,001st prime number? The first prime is 2.", goal: "Test divisors only up to the candidate's square root.", code: "def is_prime(number):\n    if number < 2:\n        return False\n    divisor = 2\n    while divisor * divisor <= number:\n        if number % divisor == 0:\n            return False\n        divisor += 1\n    return True\n\ncount = 0\ncandidate = 1\nwhile count < 10001:\n    candidate += 1\n    if is_prime(candidate):\n        count += 1\n\nprint(candidate)  # 104743" },
  },
  {
    category: "maths", difficulty: 20, sourceUrl: "https://projecteuler.net/problem=6",
    source: { fr: "Project Euler — Problème 6", en: "Project Euler — Problem 6" },
    fr: { title: "Différence de sommes", prompt: "Pour les entiers de 1 à 100, calcule la différence entre le carré de leur somme et la somme de leurs carrés.", goal: "Calcule séparément les deux expressions pour éviter toute confusion.", code: "numbers = range(1, 101)\nsum_of_squares = sum(number ** 2 for number in numbers)\nsquare_of_sum = sum(numbers) ** 2\n\nprint(square_of_sum - sum_of_squares)  # 25164150" },
    en: { title: "Sum square difference", prompt: "For the integers from 1 to 100, find the difference between the square of their sum and the sum of their squares.", goal: "Calculate the two expressions separately to avoid mixing them up.", code: "numbers = range(1, 101)\nsum_of_squares = sum(number ** 2 for number in numbers)\nsquare_of_sum = sum(numbers) ** 2\n\nprint(square_of_sum - sum_of_squares)  # 25164150" },
  },
  {
    category: "maths", difficulty: 40, sourceUrl: "https://projecteuler.net/problem=8",
    source: { fr: "Project Euler — Problème 8", en: "Project Euler — Problem 8" },
    fr: { title: "Treize chiffres adjacents", prompt: "Dans le nombre de 1 000 chiffres donné sur la page source, trouve les treize chiffres consécutifs dont le produit est maximal.", goal: "Colle le nombre de 1 000 chiffres dans le programme, puis multiplie chaque fenêtre de 13 chiffres.", code: "digits = input(\"Colle ici le nombre de 1 000 chiffres : \" ).strip()\nbest_product = 0\nbest_digits = \"\"\n\nfor start in range(len(digits) - 12):\n    product = 1\n    for digit in digits[start:start + 13]:\n        product *= int(digit)\n    if product > best_product:\n        best_product = product\n        best_digits = digits[start:start + 13]\n\nprint(best_digits, best_product)  # 23514624000" },
    en: { title: "Thirteen adjacent digits", prompt: "In the 1,000-digit number on the source page, find the thirteen consecutive digits with the greatest product.", goal: "Paste the 1,000-digit number into the program, then multiply each 13-digit window.", code: "digits = input(\"Paste the 1,000-digit number: \" ).strip()\nbest_product = 0\nbest_digits = \"\"\n\nfor start in range(len(digits) - 12):\n    product = 1\n    for digit in digits[start:start + 13]:\n        product *= int(digit)\n    if product > best_product:\n        best_product = product\n        best_digits = digits[start:start + 13]\n\nprint(best_digits, best_product)  # 23514624000" },
  },
  {
    category: "maths", difficulty: 30, sourceUrl: "https://projecteuler.net/problem=9",
    source: { fr: "Project Euler — Problème 9", en: "Project Euler — Problem 9" },
    fr: { title: "Triplet pythagoricien", prompt: "Trouve l'unique triplet d'entiers a < b < c tel que a² + b² = c² et a + b + c = 1 000, puis calcule abc.", goal: "Déduis c à partir de a et b au lieu d'ajouter une troisième boucle.", code: "for a in range(1, 1000):\n    for b in range(a + 1, 1000 - a):\n        c = 1000 - a - b\n        if b < c and a * a + b * b == c * c:\n            print(a * b * c)  # 31875000\n            break" },
    en: { title: "Special Pythagorean triplet", prompt: "Find the unique integer triplet a < b < c where a² + b² = c² and a + b + c = 1,000, then calculate abc.", goal: "Derive c from a and b instead of adding a third loop.", code: "for a in range(1, 1000):\n    for b in range(a + 1, 1000 - a):\n        c = 1000 - a - b\n        if b < c and a * a + b * b == c * c:\n            print(a * b * c)  # 31875000\n            break" },
  },
  {
    category: "maths", difficulty: 45, sourceUrl: "https://projecteuler.net/problem=10",
    source: { fr: "Project Euler — Problème 10 (limite adaptée)", en: "Project Euler — Problem 10 (adapted limit)" },
    fr: { title: "Somme des nombres premiers", prompt: "Calcule la somme de tous les nombres premiers strictement inférieurs à 20 000, comme dans la version fournie.", goal: "Utilise un crible pour marquer les nombres composés sans module externe.", code: "limit = 20000\nprime = [True] * limit\nprime[0] = prime[1] = False\n\nfor number in range(2, int(limit ** 0.5) + 1):\n    if prime[number]:\n        for multiple in range(number * number, limit, number):\n            prime[multiple] = False\n\nprint(sum(number for number, is_prime in enumerate(prime) if is_prime))  # 21171191" },
    en: { title: "Summation of primes", prompt: "Find the sum of all primes below 20,000, as in the supplied version of the problem.", goal: "Use a sieve to mark composite numbers without an external module.", code: "limit = 20000\nprime = [True] * limit\nprime[0] = prime[1] = False\n\nfor number in range(2, int(limit ** 0.5) + 1):\n    if prime[number]:\n        for multiple in range(number * number, limit, number):\n            prime[multiple] = False\n\nprint(sum(number for number, is_prime in enumerate(prime) if is_prime))  # 21171191" },
  },
  {
    category: "maths", difficulty: 55, sourceUrl: "https://projecteuler.net/problem=11",
    source: { fr: "Project Euler — Problème 11", en: "Project Euler — Problem 11" },
    fr: { title: "Produit dans une grille", prompt: "Dans la grille 20 × 20 de la page source, trouve le plus grand produit de quatre nombres adjacents, horizontalement, verticalement ou en diagonale.", goal: "Colle les 20 lignes de la grille dans le programme et vérifie les quatre directions.", code: "grid = [list(map(int, input().split())) for _ in range(20)]\nbest = 0\n\nfor row in range(20):\n    for col in range(20):\n        for row_step, col_step in ((0, 1), (1, 0), (1, 1), (1, -1)):\n            end_row = row + 3 * row_step\n            end_col = col + 3 * col_step\n            if 0 <= end_row < 20 and 0 <= end_col < 20:\n                product = 1\n                for step in range(4):\n                    product *= grid[row + step * row_step][col + step * col_step]\n                best = max(best, product)\n\nprint(best)  # 70600674" },
    en: { title: "Largest product in a grid", prompt: "In the 20 × 20 grid on the source page, find the greatest product of four adjacent numbers horizontally, vertically, or diagonally.", goal: "Paste the 20 grid rows into the program and check all four directions.", code: "grid = [list(map(int, input().split())) for _ in range(20)]\nbest = 0\n\nfor row in range(20):\n    for col in range(20):\n        for row_step, col_step in ((0, 1), (1, 0), (1, 1), (1, -1)):\n            end_row = row + 3 * row_step\n            end_col = col + 3 * col_step\n            if 0 <= end_row < 20 and 0 <= end_col < 20:\n                product = 1\n                for step in range(4):\n                    product *= grid[row + step * row_step][col + step * col_step]\n                best = max(best, product)\n\nprint(best)  # 70600674" },
  },
  {
    category: "maths", difficulty: 60, sourceUrl: "https://projecteuler.net/problem=12",
    source: { fr: "Project Euler — Problème 12 (seuil adapté)", en: "Project Euler — Problem 12 (adapted threshold)" },
    fr: { title: "Nombre triangulaire très divisible", prompt: "Trouve le premier nombre triangulaire qui possède plus de 50 diviseurs, selon le seuil de ton énoncé.", goal: "Compte les diviseurs par paires jusqu'à la racine carrée.", code: "triangle = 0\nindex = 0\n\nwhile True:\n    index += 1\n    triangle += index\n    divisors = 0\n    for divisor in range(1, int(triangle ** 0.5) + 1):\n        if triangle % divisor == 0:\n            divisors += 1 if divisor * divisor == triangle else 2\n    if divisors > 50:\n        print(triangle)\n        break" },
    en: { title: "Highly divisible triangular number", prompt: "Find the first triangular number with more than 50 divisors, using the threshold in your supplied statement.", goal: "Count divisor pairs only up to the square root.", code: "triangle = 0\nindex = 0\n\nwhile True:\n    index += 1\n    triangle += index\n    divisors = 0\n    for divisor in range(1, int(triangle ** 0.5) + 1):\n        if triangle % divisor == 0:\n            divisors += 1 if divisor * divisor == triangle else 2\n    if divisors > 50:\n        print(triangle)\n        break" },
  },
  {
    category: "maths", difficulty: 30, sourceUrl: "https://projecteuler.net/problem=13",
    source: { fr: "Project Euler — Problème 13", en: "Project Euler — Problem 13" },
    fr: { title: "Grande somme", prompt: "Additionne les 100 nombres de 50 chiffres fournis par la page source, puis trouve les dix premiers chiffres du total.", goal: "Colle un nombre par ligne dans le programme; Python gère les grands entiers nativement.", code: "numbers = [int(input()) for _ in range(100)]\nprint(str(sum(numbers))[:10])  # 5537376230" },
    en: { title: "Large sum", prompt: "Add the 100 fifty-digit numbers on the source page, then find the first ten digits of the total.", goal: "Paste one number per line; Python handles large integers natively.", code: "numbers = [int(input()) for _ in range(100)]\nprint(str(sum(numbers))[:10])  # 5537376230" },
  },
  {
    category: "maths", difficulty: 65, sourceUrl: "https://projecteuler.net/problem=14",
    source: { fr: "Project Euler — Problème 14", en: "Project Euler — Problem 14" },
    fr: { title: "Suite de Collatz", prompt: "Pour les départs inférieurs à un million, trouve celui qui produit la plus longue chaîne de Collatz.", goal: "Mémorise la longueur des chaînes déjà calculées pour éviter de refaire le travail.", code: "lengths = {1: 1}\nbest_start = 1\n\nfor start in range(1, 1_000_000):\n    sequence = []\n    number = start\n    while number not in lengths:\n        sequence.append(number)\n        number = number // 2 if number % 2 == 0 else 3 * number + 1\n    length = lengths[number]\n    for term in reversed(sequence):\n        length += 1\n        lengths[term] = length\n    if lengths[start] > lengths[best_start]:\n        best_start = start\n\nprint(best_start)  # 837799" },
    en: { title: "Longest Collatz sequence", prompt: "Among starting numbers below one million, find the one that produces the longest Collatz chain.", goal: "Cache known chain lengths to avoid repeating work.", code: "lengths = {1: 1}\nbest_start = 1\n\nfor start in range(1, 1_000_000):\n    sequence = []\n    number = start\n    while number not in lengths:\n        sequence.append(number)\n        number = number // 2 if number % 2 == 0 else 3 * number + 1\n    length = lengths[number]\n    for term in reversed(sequence):\n        length += 1\n        lengths[term] = length\n    if lengths[start] > lengths[best_start]:\n        best_start = start\n\nprint(best_start)  # 837799" },
  },
  {
    category: "maths", difficulty: 35, sourceUrl: "https://projecteuler.net/problem=15",
    source: { fr: "Project Euler — Problème 15 (grille adaptée)", en: "Project Euler — Problem 15 (adapted grid)" },
    fr: { title: "Chemins dans une grille", prompt: "Dans une grille 10 × 10, compte les chemins du coin supérieur gauche au coin inférieur droit en ne allant que vers la droite ou vers le bas.", goal: "Utilise une grille de comptage où chaque case reçoit le total venant du haut et de la gauche.", code: "size = 10\npaths = [[1] * (size + 1) for _ in range(size + 1)]\n\nfor row in range(1, size + 1):\n    for col in range(1, size + 1):\n        paths[row][col] = paths[row - 1][col] + paths[row][col - 1]\n\nprint(paths[size][size])  # 184756" },
    en: { title: "Lattice paths", prompt: "In a 10 × 10 grid, count the paths from the top-left corner to the bottom-right corner when moving only right or down.", goal: "Use a table where each cell adds the path counts from above and from the left.", code: "size = 10\npaths = [[1] * (size + 1) for _ in range(size + 1)]\n\nfor row in range(1, size + 1):\n    for col in range(1, size + 1):\n        paths[row][col] = paths[row - 1][col] + paths[row][col - 1]\n\nprint(paths[size][size])  # 184756" },
  },
  {
    category: "maths", difficulty: 10, source: { fr: "Énigme originale", en: "Original puzzle" },
    fr: { title: "Le nombre triangulaire", prompt: "La somme des entiers de 1 à n vaut exactement 5 050. Retrouve n avec une boucle Python.", goal: "Affiche n sans calculer la somme à la main.", code: "target = 5050\ntotal = 0\nn = 0\nwhile total < target:\n    n += 1\n    total += n\nprint(n)  # 100" },
    en: { title: "The triangular number", prompt: "The sum of the integers from 1 to n is exactly 5,050. Find n with a Python loop.", goal: "Print n without calculating the sum by hand.", code: "target = 5050\ntotal = 0\nn = 0\nwhile total < target:\n    n += 1\n    total += n\nprint(n)  # 100" },
  },
  {
    category: "maths", difficulty: 20, source: { fr: "Énigme originale", en: "Original puzzle" },
    fr: { title: "La factorielle", prompt: "Écris une fonction récursive qui calcule la factorielle d'un entier non négatif n.", goal: "Définis un cas de base, puis réduis n à chaque appel.", code: "def factorielle(n):\n    if n <= 1:\n        return 1\n    return n * factorielle(n - 1)\n\nprint(factorielle(5))  # 120" },
    en: { title: "The factorial", prompt: "Write a recursive function that calculates the factorial of a non-negative integer n.", goal: "Define a base case, then reduce n on each call.", code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))  # 120" },
  },
  {
    category: "maths", difficulty: 15, source: { fr: "Énigme originale", en: "Original puzzle" },
    fr: { title: "Le point le plus proche", prompt: "Crée une classe Point avec des coordonnées x et y et une méthode qui renvoie la distance à l'origine (0, 0).", goal: "Crée un point en (3, 4) et calcule sa distance à l'origine.", code: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def distance_to_origin(self):\n        return (self.x ** 2 + self.y ** 2) ** 0.5\n\nprint(Point(3, 4).distance_to_origin())  # 5.0" },
    en: { title: "The nearest point", prompt: "Create a Point class with x and y coordinates and a method that returns its distance from the origin (0, 0).", goal: "Create a point at (3, 4) and find its distance from the origin.", code: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def distance_to_origin(self):\n        return (self.x ** 2 + self.y ** 2) ** 0.5\n\nprint(Point(3, 4).distance_to_origin())  # 5.0" },
  },
  {
    category: "free", difficulty: 10, source: { fr: "Énigme originale", en: "Original puzzle" },
    fr: { title: "Le jeu des multiples", prompt: "Pour chaque nombre de 1 à 30, affiche Fizz s'il est divisible par 3, Buzz par 5, et FizzBuzz par les deux.", goal: "Teste la divisibilité par 3 et 5 avant les autres cas.", code: "for nombre in range(1, 31):\n    if nombre % 15 == 0:\n        print(\"FizzBuzz\")\n    elif nombre % 3 == 0:\n        print(\"Fizz\")\n    elif nombre % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(nombre)" },
    en: { title: "The multiples game", prompt: "For each number from 1 to 30, print Fizz if divisible by 3, Buzz if divisible by 5, and FizzBuzz if divisible by both.", goal: "Check divisibility by both 3 and 5 before the other cases.", code: "for number in range(1, 31):\n    if number % 15 == 0:\n        print(\"FizzBuzz\")\n    elif number % 3 == 0:\n        print(\"Fizz\")\n    elif number % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(number)" },
  },
  {
    category: "free", difficulty: 25, source: { fr: "Énigme originale", en: "Original puzzle" },
    fr: { title: "Le mot miroir", prompt: "Écris une fonction récursive qui vérifie si un mot est un palindrome, comme kayak.", goal: "Compare les extrémités, puis examine le morceau restant.", code: "def est_palindrome(mot):\n    if len(mot) <= 1:\n        return True\n    if mot[0] != mot[-1]:\n        return False\n    return est_palindrome(mot[1:-1])\n\nprint(est_palindrome(\"kayak\"))  # True" },
    en: { title: "The mirror word", prompt: "Write a recursive function that checks whether a word is a palindrome, such as kayak.", goal: "Compare the ends, then examine the remaining substring.", code: "def is_palindrome(word):\n    if len(word) <= 1:\n        return True\n    if word[0] != word[-1]:\n        return False\n    return is_palindrome(word[1:-1])\n\nprint(is_palindrome(\"kayak\"))  # True" },
  },
  {
    category: "free", difficulty: 30, source: { fr: "Énigme originale", en: "Original puzzle" },
    fr: { title: "Un compte sans découvert", prompt: "Crée une classe CompteBancaire qui accepte les dépôts positifs et refuse les retraits supérieurs au solde.", goal: "Teste un dépôt, un retrait valide et un retrait trop élevé.", code: "class CompteBancaire:\n    def __init__(self, solde=0):\n        self.solde = solde\n\n    def deposer(self, montant):\n        if montant <= 0:\n            return False\n        self.solde += montant\n        return True\n\n    def retirer(self, montant):\n        if montant <= 0 or montant > self.solde:\n            return False\n        self.solde -= montant\n        return True" },
    en: { title: "An overdraft-proof account", prompt: "Create a BankAccount class that accepts positive deposits and rejects withdrawals larger than the balance.", goal: "Test a deposit, a valid withdrawal, and an excessive withdrawal.", code: "class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount <= 0:\n            return False\n        self.balance += amount\n        return True\n\n    def withdraw(self, amount):\n        if amount <= 0 or amount > self.balance:\n            return False\n        self.balance -= amount\n        return True" },
  },
];
