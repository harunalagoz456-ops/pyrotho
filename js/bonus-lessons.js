/** Extra levels & lessons — keeps main lessons.js smaller. */
const L = (en, es, fr, tr) => ({ en, es, fr, tr });
const Tips = (en, es, fr, tr) => ({ en, es, fr, tr });
const step = (p) => p;

export const bonusLevels = [
  {
    id: 17,
    title: L("Level 17 · Slicing", "Nivel 17 · Slicing", "Niveau 17 · Slicing", "Seviye 17 · Dilimleme"),
    lessons: [
      {
        id: "l17-slice",
        xp: 70,
        title: L("list[start:stop]", "list[start:stop]", "list[start:stop]", "list[start:stop]"),
        blurb: L("Cut pieces from lists & strings", "Cortar trozos", "Couper des morceaux", "Liste ve stringden parça al"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A slice takes a piece: list[start:stop]. It includes start but stops BEFORE stop. nums[1:3] → indexes 1 and 2.",
              "Un slice toma un trozo: lista[inicio:fin]. Incluye inicio pero para ANTES de fin. nums[1:3] → índices 1 y 2.",
              "Un slice prend un morceau : liste[début:fin]. Il inclut début mais s'arrête AVANT fin. nums[1:3] → index 1 et 2.",
              "Dilim bir parça alır: liste[başla:dur]. Başlangıç dahildir ama dur'dan ÖNCE biter. nums[1:3] → indeks 1 ve 2."
            ),
            instruct: L(
              "What does nums[1:3] return?",
              "¿Qué devuelve nums[1:3]?",
              "Que renvoie nums[1:3] ?",
              "nums[1:3] ne döner?"
            ),
            code: "nums = [10, 20, 30, 40]",
            options: L(
              ["[10, 20]", "[20, 30]", "[20, 30, 40]", "[30]"],
              ["[10, 20]", "[20, 30]", "[20, 30, 40]", "[30]"],
              ["[10, 20]", "[20, 30]", "[20, 30, 40]", "[30]"],
              ["[10, 20]", "[20, 30]", "[20, 30, 40]", "[30]"]
            ),
            answer: 1,
            path: L("Index 1 up to (not including) 3 → [20, 30]", "Del 1 al 3 (sin incluir 3) → [20, 30]", "De 1 à 3 (sans 3) → [20, 30]", "1'den 3'e kadar (3 hariç) → [20, 30]"),
            tips: Tips(
              ["Slicing stops before the end index.", "Start at index 1 (20).", "End before index 3."],
              ["El slice para antes del final.", "Empieza en el índice 1 (20).", "Termina antes del 3."],
              ["Le slice s'arrête avant la fin.", "Commence à l'index 1 (20).", "S'arrête avant 3."],
              ["Dilimleme bitiş indeksinden önce durur.", "1. indeksten başla (20).", "3'ten önce bitir."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "If you leave out start, the slice begins at 0: nums[:2] means the first two items.",
              "Si omites el inicio, el slice empieza en 0: nums[:2] son los dos primeros.",
              "Si tu omets le début, le slice commence à 0 : nums[:2] = les deux premiers.",
              "Başlangıcı yazmazsan dilim 0'dan başlar: nums[:2] ilk iki eleman demektir."
            ),
            instruct: L(
              "Write a slice that takes the first two items of nums.",
              "Escribe un slice con los dos primeros de nums.",
              "Écris un slice des deux premiers éléments de nums.",
              "nums'un ilk iki elemanını alan dilimi yaz."
            ),
            code: "nums = [1, 2, 3, 4]",
            placeholder: "nums[0:2]",
            accept: ["nums[0:2]", "nums[:2]"],
            path: L("nums[:2] or nums[0:2]", "nums[:2] o nums[0:2]", "nums[:2] ou nums[0:2]", "nums[:2] veya nums[0:2]"),
            tips: Tips(
              ["First two items = indexes 0 and 1.", "Stop before 2.", "nums[:2]"],
              ["Los dos primeros = índices 0 y 1.", "Para antes de 2.", "nums[:2]"],
              ["Les deux premiers = index 0 et 1.", "Stop avant 2.", "nums[:2]"],
              ["İlk iki = indeks 0 ve 1.", "2'den önce dur.", "nums[:2]"]
            ),
          }),
        ],
      },
      {
        id: "l17-str-slice",
        xp: 65,
        title: L("String slices", "Slices de texto", "Slices de texte", "String dilimleri"),
        blurb: L("Same idea on text", "Misma idea en texto", "Même idée sur le texte", "Aynı fikir metinde"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Strings slice exactly like lists: \"Python\"[0:3] takes characters 0, 1 and 2.",
              "Los strings se cortan igual que las listas: \"Python\"[0:3] toma los caracteres 0, 1 y 2.",
              "Les chaînes se coupent comme les listes : \"Python\"[0:3] prend les caractères 0, 1 et 2.",
              "Stringler de listeler gibi dilimlenir: \"Python\"[0:3] karakter 0, 1 ve 2'yi alır."
            ),
            instruct: L(
              'What is "Python"[0:3]?',
              '¿Qué es "Python"[0:3]?',
              'Que vaut "Python"[0:3] ?',
              '"Python"[0:3] nedir?'
            ),
            code: 's = "Python"',
            options: L(['"Pyt"', '"Pyth"', '"tho"', '"Python"'], ['"Pyt"', '"Pyth"', '"tho"', '"Python"'], ['"Pyt"', '"Pyth"', '"tho"', '"Python"'], ['"Pyt"', '"Pyth"', '"tho"', '"Python"']),
            answer: 0,
            path: L("Characters 0,1,2 → Pyt", "Caracteres 0,1,2 → Pyt", "Caractères 0,1,2 → Pyt", "0,1,2. karakterler → Pyt"),
            tips: Tips(
              ["Start at 0 = P.", "Include indexes 0, 1, 2.", "Result is Pyt."],
              ["Empieza en 0 = P.", "Incluye 0, 1, 2.", "Resultado: Pyt."],
              ["Commence à 0 = P.", "Inclut 0, 1, 2.", "Résultat : Pyt."],
              ["0'dan başla = P.", "0, 1, 2 dahil.", "Sonuç: Pyt."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Negative start counts from the end: s[-3:] means \"from the 3rd-last character to the end\".",
              "Un inicio negativo cuenta desde el final: s[-3:] significa \"desde el antepenúltimo carácter hasta el final\".",
              "Un début négatif compte depuis la fin : s[-3:] signifie \"du 3e caractère en partant de la fin jusqu'au bout\".",
              "Negatif başlangıç sondan sayar: s[-3:] \"sondan 3. karakterden sona kadar\" demektir."
            ),
            instruct: L(
              'Write a slice that gets the last 3 characters of s (use a negative start).',
              "Escribe un slice con los últimos 3 caracteres de s (inicio negativo).",
              "Écris un slice des 3 derniers caractères de s (début négatif).",
              "s'nin son 3 karakterini alan dilimi yaz (negatif başlangıç kullan)."
            ),
            code: 's = "Python"',
            placeholder: "s[-3:]",
            accept: ["s[-3:]", "s[-3:None]", "s[3:]"],
            path: L("s[-3:]", "s[-3:]", "s[-3:]", "s[-3:]"),
            tips: Tips(
              ["Negative indexes count from the end.", "-3 starts at 'h' in Python.", "s[-3:]"],
              ["Los negativos cuentan desde el final.", "-3 empieza en 'h'.", "s[-3:]"],
              ["Les négatifs comptent depuis la fin.", "-3 commence à 'h'.", "s[-3:]"],
              ["Negatif indeksler sondan sayar.", "-3 'h'den başlar.", "s[-3:]"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 18,
    title: L("Level 18 · More strings", "Nivel 18 · Más strings", "Niveau 18 · Plus de chaînes", "Seviye 18 · Daha fazla string"),
    lessons: [
      {
        id: "l18-methods",
        xp: 70,
        title: L("strip · split · replace", "strip · split · replace", "strip · split · replace", "strip · split · replace"),
        blurb: L("Clean and change text", "Limpiar y cambiar texto", "Nettoyer et changer le texte", "Metni temizle ve değiştir"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "split(separator) breaks text into a LIST of pieces: \"a-b\".split(\"-\") → [\"a\", \"b\"].",
              "split(separador) parte el texto en una LISTA de trozos: \"a-b\".split(\"-\") → [\"a\", \"b\"].",
              "split(séparateur) découpe le texte en une LISTE de morceaux : \"a-b\".split(\"-\") → [\"a\", \"b\"].",
              "split(ayırıcı) metni parçalardan oluşan bir LİSTEYE böler: \"a-b\".split(\"-\") → [\"a\", \"b\"]."
            ),
            instruct: L(
              'What does "a,b,c".split(",") return?',
              '¿Qué devuelve "a,b,c".split(",")?',
              'Que renvoie "a,b,c".split(",") ?',
              '"a,b,c".split(",") ne döner?'
            ),
            code: 'print("a,b,c".split(","))',
            options: L(
              ['["a,b,c"]', '["a", "b", "c"]', '"a b c"', "3"],
              ['["a,b,c"]', '["a", "b", "c"]', '"a b c"', "3"],
              ['["a,b,c"]', '["a", "b", "c"]', '"a b c"', "3"],
              ['["a,b,c"]', '["a", "b", "c"]', '"a b c"', "3"]
            ),
            answer: 1,
            path: L("split breaks text into a list of parts.", "split parte el texto en una lista.", "split découpe le texte en liste.", "split metni liste parçalarına böler."),
            tips: Tips(
              ["split returns a list.", "The comma is the separator.", 'Parts are "a", "b", "c".'],
              ["split devuelve una lista.", "La coma es el separador.", 'Partes: "a", "b", "c".'],
              ["split renvoie une liste.", "La virgule est le séparateur.", 'Parts : "a", "b", "c".'],
              ["split bir liste döner.", "Virgül ayırıcıdır.", 'Parçalar: "a", "b", "c".']
            ),
          }),
          step({
            type: "write",
            note: L(
              "replace(old, new) swaps text: \"hi\".replace(\"h\", \"H\") → \"Hi\". Old text first, new text second.",
              "replace(viejo, nuevo) cambia texto: \"hi\".replace(\"h\", \"H\") → \"Hi\". Primero el viejo, luego el nuevo.",
              "replace(ancien, nouveau) échange du texte : \"hi\".replace(\"h\", \"H\") → \"Hi\". L'ancien d'abord, le nouveau ensuite.",
              "replace(eski, yeni) metni değiştirir: \"hi\".replace(\"h\", \"H\") → \"Hi\". Önce eski, sonra yeni."
            ),
            instruct: L(
              'Replace cat with dog in the string s using .replace().',
              "Reemplaza cat por dog en s con .replace().",
              "Remplace cat par dog dans s avec .replace().",
              "s içinde cat'i dog ile .replace() kullanarak değiştir."
            ),
            code: 's = "I like cat"',
            placeholder: 's.replace("cat", "dog")',
            accept: ['s.replace("cat", "dog")', "s.replace('cat', 'dog')"],
            path: L('s.replace("cat", "dog")', 's.replace("cat", "dog")', 's.replace("cat", "dog")', 's.replace("cat", "dog")'),
            tips: Tips(
              ["Call .replace on s.", "Old text first, new text second.", 's.replace("cat", "dog")'],
              ["Llama .replace sobre s.", "Viejo primero, nuevo segundo.", 's.replace("cat", "dog")'],
              ["Appelle .replace sur s.", "Ancien d'abord, nouveau ensuite.", 's.replace("cat", "dog")'],
              ["s üzerinde .replace çağır.", "Önce eski, sonra yeni.", 's.replace("cat", "dog")']
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 19,
    title: L("Level 19 · Nested loops", "Nivel 19 · Bucles anidados", "Niveau 19 · Boucles imbriquées", "Seviye 19 · İç içe döngüler"),
    lessons: [
      {
        id: "l19-nested",
        xp: 75,
        title: L("Loop inside a loop", "Bucle dentro de bucle", "Boucle dans une boucle", "Döngü içinde döngü"),
        blurb: L("Combine two for-loops", "Combinar dos for", "Combiner deux for", "İki for'u birleştir"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "In nested loops, the inner loop runs completely for EACH turn of the outer loop. Total prints = outer × inner.",
              "En bucles anidados, el interior corre completo por CADA vuelta del exterior. Total = exterior × interior.",
              "Dans des boucles imbriquées, l'interne s'exécute entièrement à CHAQUE tour de l'externe. Total = externe × interne.",
              "İç içe döngülerde iç döngü, dış döngünün HER turunda baştan sona çalışır. Toplam = dış × iç."
            ),
            instruct: L(
              "How many times does print run?",
              "¿Cuántas veces corre print?",
              "Combien de fois print s'exécute-t-il ?",
              "print kaç kez çalışır?"
            ),
            code: "for i in range(2):\n    for j in range(3):\n        print(i, j)",
            options: L(["2", "3", "5", "6"], ["2", "3", "5", "6"], ["2", "3", "5", "6"], ["2", "3", "5", "6"]),
            answer: 3,
            path: L("2 × 3 = 6 prints", "2 × 3 = 6 prints", "2 × 3 = 6 affichages", "2 × 3 = 6 yazdırma"),
            tips: Tips(
              ["Outer loop runs 2 times.", "Inner loop runs 3 times each outer turn.", "2 × 3 = 6"],
              ["El exterior corre 2 veces.", "El interior 3 veces por cada vuelta.", "2 × 3 = 6"],
              ["La boucle externe tourne 2 fois.", "L'interne 3 fois à chaque tour.", "2 × 3 = 6"],
              ["Dış döngü 2 kez.", "İç döngü her turda 3 kez.", "2 × 3 = 6"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Each level of nesting adds one more indent:\nfor i ...:\n    for j ...:\n        print(i)",
              "Cada nivel de anidado añade una indentación más:\nfor i ...:\n    for j ...:\n        print(i)",
              "Chaque niveau d'imbrication ajoute une indentation :\nfor i ... :\n    for j ... :\n        print(i)",
              "Her iç içe seviye bir girinti daha ekler:\nfor i ...:\n    for j ...:\n        print(i)"
            ),
            instruct: L(
              "Write nested loops: for i in range(2), inside for j in range(2), print(i).",
              "Escribe bucles anidados: for i in range(2), dentro for j in range(2), print(i).",
              "Écris des boucles imbriquées : for i in range(2), dedans for j in range(2), print(i).",
              "İç içe döngü yaz: for i in range(2), içinde for j in range(2), print(i)."
            ),
            code: "",
            placeholder: "for i in range(2):\n    for j in range(2):\n        print(i)",
            accept: [
              "for i in range(2):\n    for j in range(2):\n        print(i)",
              "for i in range(2):\n  for j in range(2):\n    print(i)",
            ],
            path: L(
              "for i in range(2):\n    for j in range(2):\n        print(i)",
              "for i in range(2):\n    for j in range(2):\n        print(i)",
              "for i in range(2):\n    for j in range(2):\n        print(i)",
              "for i in range(2):\n    for j in range(2):\n        print(i)"
            ),
            tips: Tips(
              ["Outer: for i in range(2):", "Inner indented more: for j...", "print(i) inside both"],
              ["Exterior: for i in range(2):", "Interior más indentado: for j...", "print(i) dentro"],
              ["Externe : for i in range(2) :", "Interne plus indenté : for j...", "print(i) au fond"],
              ["Dış: for i in range(2):", "İç daha girintili: for j...", "en içte print(i)"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 20,
    title: L("Level 20 · List comprehension", "Nivel 20 · List comprehension", "Niveau 20 · List comprehension", "Seviye 20 · Liste kavrama"),
    lessons: [
      {
        id: "l20-comp",
        xp: 80,
        title: L("[x for x in ...]", "[x for x in ...]", "[x for x in ...]", "[x for x in ...]"),
        blurb: L("Build lists in one line", "Crear listas en una línea", "Créer des listes en une ligne", "Tek satırda liste kur"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A list comprehension builds a list in one line: [expression for item in source]. [n + 1 for n in range(2)] → [1, 2].",
              "Una list comprehension crea una lista en una línea: [expresión for item in fuente]. [n + 1 for n in range(2)] → [1, 2].",
              "Une list comprehension construit une liste en une ligne : [expression for item in source]. [n + 1 for n in range(2)] → [1, 2].",
              "List comprehension tek satırda liste kurar: [ifade for öğe in kaynak]. [n + 1 for n in range(2)] → [1, 2]."
            ),
            instruct: L(
              "What is the result of this list comprehension?",
              "¿Cuál es el resultado de esta list comprehension?",
              "Quel est le résultat de cette list comprehension ?",
              "Bu list comprehension'ın sonucu nedir?"
            ),
            code: "[n * 2 for n in range(3)]",
            options: L(["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[3, 6]"], ["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[3, 6]"], ["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[3, 6]"], ["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[3, 6]"]),
            answer: 1,
            path: L("range(3) → 0,1,2 then ×2 → [0, 2, 4]", "range(3) → 0,1,2 luego ×2 → [0, 2, 4]", "range(3) → 0,1,2 puis ×2 → [0, 2, 4]", "range(3) → 0,1,2 sonra ×2 → [0, 2, 4]"),
            tips: Tips(
              ["range(3) gives 0, 1, 2.", "Each number is multiplied by 2.", "Result: [0, 2, 4]"],
              ["range(3) da 0, 1, 2.", "Cada número × 2.", "Resultado: [0, 2, 4]"],
              ["range(3) donne 0, 1, 2.", "Chaque nombre × 2.", "Résultat : [0, 2, 4]"],
              ["range(3) → 0, 1, 2.", "Her sayı × 2.", "Sonuç: [0, 2, 4]"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "A square is n * n (or n ** 2). Put that as the expression before for.",
              "Un cuadrado es n * n (o n ** 2). Ponlo como la expresión antes del for.",
              "Un carré est n * n (ou n ** 2). Mets-le comme expression avant le for.",
              "Kare n * n (veya n ** 2) demektir. Bunu for'dan önceki ifade olarak yaz."
            ),
            instruct: L(
              "Write a list comprehension of squares for n in range(4).",
              "Escribe una list comprehension de cuadrados para n in range(4).",
              "Écris une list comprehension des carrés pour n in range(4).",
              "range(4) için n karelerinden oluşan list comprehension yaz."
            ),
            code: "",
            placeholder: "[n * n for n in range(4)]",
            accept: [
              "[n * n for n in range(4)]",
              "[n*n for n in range(4)]",
              "[n ** 2 for n in range(4)]",
              "[n**2 for n in range(4)]",
            ],
            path: L("[n * n for n in range(4)]", "[n * n for n in range(4)]", "[n * n for n in range(4)]", "[n * n for n in range(4)]"),
            tips: Tips(
              ["Shape: [expression for item in iterable]", "Expression can be n * n.", "[n * n for n in range(4)]"],
              ["Forma: [expresión for item in iterable]", "Puede ser n * n.", "[n * n for n in range(4)]"],
              ["Forme : [expression for item in iterable]", "Peut être n * n.", "[n * n for n in range(4)]"],
              ["Şekil: [ifade for öğe in yinelenebilir]", "İfade n * n olabilir.", "[n * n for n in range(4)]"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 21,
    title: L("Level 21 · Files", "Nivel 21 · Archivos", "Niveau 21 · Fichiers", "Seviye 21 · Dosyalar"),
    lessons: [
      {
        id: "l21-files",
        xp: 80,
        title: L("open · read · with", "open · read · with", "open · read · with", "open · read · with"),
        blurb: L("Read text from a file", "Leer texto de un archivo", "Lire du texte d'un fichier", "Dosyadan metin oku"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "with open(\"file\") as f: opens a file and closes it automatically when the block ends — the safe modern way.",
              "with open(\"archivo\") as f: abre un archivo y lo cierra solo al terminar el bloque — la forma segura y moderna.",
              "with open(\"fichier\") as f : ouvre un fichier et le ferme automatiquement à la fin du bloc — la façon sûre et moderne.",
              "with open(\"dosya\") as f: dosyayı açar ve blok bitince otomatik kapatır — güvenli ve modern yol."
            ),
            instruct: L(
              "Which is the recommended way to open a file safely?",
              "¿Cuál es la forma recomendada de abrir un archivo con seguridad?",
              "Quelle est la façon recommandée d'ouvrir un fichier en sécurité ?",
              "Bir dosyayı güvenle açmanın önerilen yolu hangisi?"
            ),
            code: '# read "note.txt"',
            options: L(
              ['file = open("note.txt")', 'with open("note.txt") as f:', 'open = "note.txt"', 'read("note.txt")'],
              ['file = open("note.txt")', 'with open("note.txt") as f:', 'open = "note.txt"', 'read("note.txt")'],
              ['file = open("note.txt")', 'with open("note.txt") as f:', 'open = "note.txt"', 'read("note.txt")'],
              ['file = open("note.txt")', 'with open("note.txt") as f:', 'open = "note.txt"', 'read("note.txt")']
            ),
            answer: 1,
            path: L('with open("note.txt") as f:  closes the file automatically', 'with open(...) as f: cierra solo', 'with open(...) as f: ferme tout seul', 'with open(...) as f: dosyayı otomatik kapatır'),
            tips: Tips(
              ["with is the modern safe style.", "It closes the file for you.", 'with open("note.txt") as f:'],
              ["with es el estilo moderno y seguro.", "Cierra el archivo por ti.", 'with open("note.txt") as f:'],
              ["with est le style moderne et sûr.", "Il ferme le fichier pour toi.", 'with open("note.txt") as f:'],
              ["with modern ve güvenli yoldur.", "Dosyayı senin yerine kapatır.", 'with open("note.txt") as f:']
            ),
          }),
          step({
            type: "write",
            note: L(
              "Inside the with block, f.read() gives you the whole file content as one string.",
              "Dentro del bloque with, f.read() te da todo el contenido del archivo como un string.",
              "Dans le bloc with, f.read() te donne tout le contenu du fichier en une chaîne.",
              "with bloğunun içinde f.read() dosyanın tüm içeriğini tek string olarak verir."
            ),
            instruct: L(
              'Write: with open("data.txt") as f: then indented text = f.read()',
              'Escribe: with open("data.txt") as f: y luego text = f.read() indentado',
              'Écris : with open("data.txt") as f : puis text = f.read() indenté',
              'with open("data.txt") as f: sonra girintili text = f.read() yaz'
            ),
            code: "",
            placeholder: 'with open("data.txt") as f:\n    text = f.read()',
            accept: [
              'with open("data.txt") as f:\n    text = f.read()',
              "with open('data.txt') as f:\n    text = f.read()",
            ],
            path: L(
              'with open("data.txt") as f:\n    text = f.read()',
              'with open("data.txt") as f:\n    text = f.read()',
              'with open("data.txt") as f:\n    text = f.read()',
              'with open("data.txt") as f:\n    text = f.read()'
            ),
            tips: Tips(
              ['with open("data.txt") as f:', "Indent the next line.", "text = f.read()"],
              ['with open("data.txt") as f:', "Indenta la siguiente línea.", "text = f.read()"],
              ['with open("data.txt") as f :', "Indente la ligne suivante.", "text = f.read()"],
              ['with open("data.txt") as f:', "Sonraki satırı girintile.", "text = f.read()"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 22,
    title: L("Level 22 · Classes intro", "Nivel 22 · Intro a clases", "Niveau 22 · Intro aux classes", "Seviye 22 · Sınıflara giriş"),
    lessons: [
      {
        id: "l22-class",
        xp: 90,
        title: L("class · __init__", "class · __init__", "class · __init__", "class · __init__"),
        blurb: L("Your first object blueprint", "Tu primer molde de objeto", "Ton premier modèle d'objet", "İlk nesne kalıbın"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A class is a blueprint for objects. It starts with the class keyword: class Dog: — an empty body needs pass.",
              "Una clase es un molde para objetos. Empieza con la palabra class: class Dog: — un cuerpo vacío necesita pass.",
              "Une classe est un modèle pour des objets. Elle commence par le mot class : class Dog: — un corps vide a besoin de pass.",
              "Sınıf, nesneler için bir kalıptır. class kelimesiyle başlar: class Dog: — boş gövdeye pass gerekir."
            ),
            instruct: L(
              "Which keyword starts a class definition?",
              "¿Qué palabra inicia una definición de clase?",
              "Quel mot commence une définition de classe ?",
              "Sınıf tanımı hangi kelimeyle başlar?"
            ),
            code: "class Dog:\n    pass",
            options: L(["object", "class", "struct", "type"], ["object", "class", "struct", "type"], ["object", "class", "struct", "type"], ["object", "class", "struct", "type"]),
            answer: 1,
            path: L("Use class Name:", "Usa class Name:", "Utilise class Name :", "class İsim: kullan"),
            tips: Tips(
              ["Not struct (that's other languages).", "Python's keyword is short.", "It is class."],
              ["No es struct.", "La palabra de Python es corta.", "Es class."],
              ["Ce n'est pas struct.", "Le mot Python est court.", "C'est class."],
              ["struct değil.", "Python'un kelimesi kısa.", "class."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern:\nclass Name:\n    pass",
              "Patrón:\nclass Nombre:\n    pass",
              "Modèle :\nclass Nom :\n    pass",
              "Kalıp:\nclass İsim:\n    pass"
            ),
            instruct: L(
              "Write an empty class named Cat with pass inside.",
              "Escribe una clase vacía Cat con pass dentro.",
              "Écris une classe vide Cat avec pass dedans.",
              "İçi pass olan boş Cat sınıfını yaz."
            ),
            code: "",
            placeholder: "class Cat:\n    pass",
            accept: ["class Cat:\n    pass", "class Cat:\n\tpass"],
            path: L("class Cat:\n    pass", "class Cat:\n    pass", "class Cat:\n    pass", "class Cat:\n    pass"),
            tips: Tips(
              ["Start with class Cat:", "Body needs at least pass.", "Indent pass"],
              ["Empieza con class Cat:", "El cuerpo necesita pass.", "Indenta pass"],
              ["Commence par class Cat :", "Le corps a besoin de pass.", "Indente pass"],
              ["class Cat: ile başla", "Gövdeye en az pass lazım", "pass girintili"]
            ),
          }),
        ],
      },
      {
        id: "l22-init",
        xp: 95,
        title: L("Methods & self", "Métodos y self", "Méthodes et self", "Metotlar ve self"),
        blurb: L("Give objects data", "Dar datos a objetos", "Donner des données aux objets", "Nesnelere veri ver"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Methods are functions inside a class. Their first parameter is the object itself, called self by convention.",
              "Los métodos son funciones dentro de una clase. Su primer parámetro es el propio objeto, llamado self por convención.",
              "Les méthodes sont des fonctions dans une classe. Leur premier paramètre est l'objet lui-même, appelé self par convention.",
              "Metotlar sınıf içindeki fonksiyonlardır. İlk parametreleri nesnenin kendisidir ve gelenek olarak self adını alır."
            ),
            instruct: L(
              "In a method, what is the usual first parameter name?",
              "En un método, ¿cuál es el nombre habitual del primer parámetro?",
              "Dans une méthode, quel est le nom habituel du premier paramètre ?",
              "Bir metotta ilk parametrenin alışılan adı nedir?"
            ),
            code: "def bark(self):\n    print(\"woof\")",
            options: L(["this", "self", "me", "obj"], ["this", "self", "me", "obj"], ["this", "self", "me", "obj"], ["this", "self", "me", "obj"]),
            answer: 1,
            path: L("Python methods use self by convention.", "Por convención se usa self.", "Par convention on utilise self.", "Python'da gelenek self'tir."),
            tips: Tips(
              ["Other languages often use this.", "Python's common name is self.", "Answer: self"],
              ["Otros lenguajes usan this.", "En Python suele ser self.", "Respuesta: self"],
              ["D'autres langages utilisent this.", "En Python c'est souvent self.", "Réponse : self"],
              ["Başka dillerde this sık görülür.", "Python'da genelde self.", "Cevap: self"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "__init__ runs when an object is created. There you store data on the object: self.name = name.",
              "__init__ corre al crear un objeto. Ahí guardas datos en el objeto: self.name = name.",
              "__init__ s'exécute à la création d'un objet. Tu y stockes des données : self.name = name.",
              "__init__ nesne oluşturulunca çalışır. Orada nesneye veri saklarsın: self.name = name."
            ),
            instruct: L(
              "Inside class Dog, write __init__ that sets self.name = name.",
              "Dentro de class Dog, escribe __init__ que haga self.name = name.",
              "Dans class Dog, écris __init__ qui fait self.name = name.",
              "class Dog içinde self.name = name yapan __init__ yaz."
            ),
            code: "class Dog:\n    # your method here",
            placeholder: "def __init__(self, name):\n    self.name = name",
            accept: [
              "def __init__(self, name):\n    self.name = name",
              "def __init__(self,name):\n    self.name=name",
            ],
            path: L(
              "def __init__(self, name):\n    self.name = name",
              "def __init__(self, name):\n    self.name = name",
              "def __init__(self, name):\n    self.name = name",
              "def __init__(self, name):\n    self.name = name"
            ),
            tips: Tips(
              ["Method name is __init__", "First arg: self", "Then self.name = name"],
              ["El método se llama __init__", "Primer arg: self", "Luego self.name = name"],
              ["La méthode s'appelle __init__", "1er arg : self", "Puis self.name = name"],
              ["Metot adı __init__", "İlk arg: self", "Sonra self.name = name"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 23,
    title: L("Level 23 · Practice pack", "Nivel 23 · Pack práctica", "Niveau 23 · Pack pratique", "Seviye 23 · Pratik paketi"),
    lessons: [
      {
        id: "l23-mix1",
        xp: 85,
        title: L("Mixed review A", "Repaso mixto A", "Révision mixte A", "Karışık tekrar A"),
        blurb: L("Combine what you learned", "Combina lo aprendido", "Combine ce que tu as appris", "Öğrendiklerini birleştir"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Review: len(list) counts items, list[0] is the first item, .upper() makes text CAPITAL.",
              "Repaso: len(lista) cuenta elementos, lista[0] es el primero, .upper() pone MAYÚSCULAS.",
              "Révision : len(liste) compte les éléments, liste[0] est le premier, .upper() met en MAJUSCULES.",
              "Tekrar: len(liste) öğeleri sayar, liste[0] ilk elemandır, .upper() metni BÜYÜK yapar."
            ),
            instruct: L(
              "What is printed?",
              "¿Qué se imprime?",
              "Qu'est-ce qui s'affiche ?",
              "Ne yazdırılır?"
            ),
            code: 'words = ["hi", "yo"]\nprint(len(words), words[0].upper())',
            options: L(['2 HI', '2 hi', '1 HI', '2 Yo'], ['2 HI', '2 hi', '1 HI', '2 Yo'], ['2 HI', '2 hi', '1 HI', '2 Yo'], ['2 HI', '2 hi', '1 HI', '2 Yo']),
            answer: 0,
            path: L("len is 2, first word upper → HI", "len es 2, primera en mayúsculas → HI", "len vaut 2, premier en majuscules → HI", "len 2, ilk kelime büyük → HI"),
            tips: Tips(
              ["len(words) counts items in the list.", "words[0] is hi.", ".upper() → HI"],
              ["len cuenta elementos.", "words[0] es hi.", ".upper() → HI"],
              ["len compte les éléments.", "words[0] est hi.", ".upper() → HI"],
              ["len listedeki öğeleri sayar.", "words[0] = hi.", ".upper() → HI"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Review: def defines the function, return sends the result, f\"...{name}...\" inserts the variable.",
              "Repaso: def define la función, return envía el resultado, f\"...{name}...\" inserta la variable.",
              "Révision : def définit la fonction, return renvoie le résultat, f\"...{name}...\" insère la variable.",
              "Tekrar: def fonksiyonu tanımlar, return sonucu gönderir, f\"...{name}...\" değişkeni ekler."
            ),
            instruct: L(
              "Write a function greet(name) that returns Hello, {name}! using an f-string.",
              "Escribe greet(name) que devuelva Hello, {name}! con f-string.",
              "Écris greet(name) qui renvoie Hello, {name}! avec f-string.",
              "f-string ile Hello, {name}! döndüren greet(name) yaz."
            ),
            code: "",
            placeholder: 'def greet(name):\n    return f"Hello, {name}!"',
            accept: [
              'def greet(name):\n    return f"Hello, {name}!"',
              "def greet(name):\n    return f'Hello, {name}!'",
            ],
            path: L(
              'def greet(name):\n    return f"Hello, {name}!"',
              'def greet(name):\n    return f"Hello, {name}!"',
              'def greet(name):\n    return f"Hello, {name}!"',
              'def greet(name):\n    return f"Hello, {name}!"'
            ),
            tips: Tips(
              ["def greet(name):", "return an f-string", 'f"Hello, {name}!"'],
              ["def greet(name):", "return un f-string", 'f"Hello, {name}!"'],
              ["def greet(name) :", "return un f-string", 'f"Hello, {name}!"'],
              ["def greet(name):", "f-string return et", 'f"Hello, {name}!"']
            ),
          }),
        ],
      },
      {
        id: "l23-mix2",
        xp: 90,
        title: L("Mixed review B", "Repaso mixto B", "Révision mixte B", "Karışık tekrar B"),
        blurb: L("Dicts + loops + if", "Dicts + bucles + if", "Dicts + boucles + if", "Dict + döngü + if"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Review: d.values() gives all the values of a dictionary, and total += v adds each one to total.",
              "Repaso: d.values() da todos los valores del diccionario y total += v suma cada uno a total.",
              "Révision : d.values() donne toutes les valeurs du dictionnaire, et total += v ajoute chacune à total.",
              "Tekrar: d.values() sözlüğün tüm değerlerini verir, total += v her birini total'e ekler."
            ),
            instruct: L(
              "What does this print?",
              "¿Qué imprime esto?",
              "Qu'affiche ceci ?",
              "Bu ne yazdırır?"
            ),
            code: 'scores = {"a": 2, "b": 5}\ntotal = 0\nfor v in scores.values():\n    total += v\nprint(total)',
            options: L(["2", "5", "7", "Error"], ["2", "5", "7", "Error"], ["2", "5", "7", "Error"], ["2", "5", "7", "Error"]),
            answer: 2,
            path: L("2 + 5 = 7", "2 + 5 = 7", "2 + 5 = 7", "2 + 5 = 7"),
            tips: Tips(
              [".values() gives 2 and 5.", "total adds them up.", "Final print is 7."],
              [".values() da 2 y 5.", "total los suma.", "Al final imprime 7."],
              [".values() donne 2 et 5.", "total les additionne.", "À la fin on affiche 7."],
              [".values() 2 ve 5 verir.", "total toplar.", "Sonunda 7 yazılır."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "The in keyword tests membership: 3 in [1, 2, 3] is True. It works in an if just like any condition.",
              "La palabra in prueba pertenencia: 3 in [1, 2, 3] es True. Funciona en un if como cualquier condición.",
              "Le mot in teste l'appartenance : 3 in [1, 2, 3] est True. Ça marche dans un if comme toute condition.",
              "in kelimesi üyelik testi yapar: 3 in [1, 2, 3] True'dur. if içinde herhangi bir koşul gibi çalışır."
            ),
            instruct: L(
              "Write: if 10 in nums: then indented print(ok)",
              "Escribe: if 10 in nums: y luego print(ok) indentado",
              "Écris : if 10 in nums : puis print(ok) indenté",
              "if 10 in nums: sonra girintili print(ok) yaz"
            ),
            code: "nums = [3, 10, 8]",
            placeholder: 'if 10 in nums:\n    print("ok")',
            accept: ['if 10 in nums:\n    print("ok")', "if 10 in nums:\n    print('ok')"],
            path: L('if 10 in nums:\n    print("ok")', 'if 10 in nums:\n    print("ok")', 'if 10 in nums:\n    print("ok")', 'if 10 in nums:\n    print("ok")'),
            tips: Tips(
              ["Membership test uses in.", "Don't forget the colon.", 'print("ok") indented'],
              ["La pertenencia usa in.", "No olvides los dos puntos.", 'print("ok") indentado'],
              ["L'appartenance utilise in.", "N'oublie pas les deux-points.", 'print("ok") indenté'],
              ["Üyelik için in kullan.", "İki noktayı unutma.", 'girintili print("ok")']
            ),
          }),
        ],
      },
    ],
  },
];
