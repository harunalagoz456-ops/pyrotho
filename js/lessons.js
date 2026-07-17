/**
 * Curriculum modeled on Sololearn "Introduction to Python" and Mimo's Python path:
 * every step teaches a tiny piece of theory (note) right before asking about it,
 * and lessons go: easy recognize → predict output → write it yourself.
 * Order: print → variables → types → operators → strings → input → if →
 * boolean logic → for → while → lists → tuples/sets → dicts → functions →
 * modules → exceptions (+ bonus levels).
 */
import { bonusLevels } from "./bonus-lessons.js";

const L = (en, es, fr, tr) => ({ en, es, fr, tr });
const Tips = (en, es, fr, tr) => ({ en, es, fr, tr });

function step(partial) {
  return partial;
}

const coreLevels = [
  {
    id: 1,
    title: L("Level 1 · Hello Python", "Nivel 1 · Hola Python", "Niveau 1 · Bonjour Python", "Seviye 1 · Merhaba Python"),
    lessons: [
      {
        id: "l1-print",
        xp: 45,
        title: L("print()", "print()", "print()", "print()"),
        blurb: L("Your first output", "Tu primera salida", "Ta première sortie", "İlk çıktın"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "print() shows a message on the screen. The message goes inside the parentheses.",
              "print() muestra un mensaje en pantalla. El mensaje va dentro de los paréntesis.",
              "print() affiche un message à l'écran. Le message va entre les parenthèses.",
              "print() ekrana bir mesaj gösterir. Mesaj parantezin içine yazılır."
            ),
            instruct: L(
              "What appears on the screen when this code runs?",
              "¿Qué aparece en pantalla al ejecutar este código?",
              "Qu'apparaît-il à l'écran quand ce code s'exécute ?",
              "Bu kod çalışınca ekranda ne görünür?"
            ),
            code: 'print("Good morning")',
            options: L(
              ["Good morning", '"Good morning"', "print", "Nothing"],
              ["Good morning", '"Good morning"', "print", "Nada"],
              ["Good morning", '"Good morning"', "print", "Rien"],
              ["Good morning", '"Good morning"', "print", "Hiçbir şey"]
            ),
            answer: 0,
            path: L("The quotes are not shown — only the text: Good morning", "Las comillas no se muestran — solo el texto: Good morning", "Les guillemets ne s'affichent pas — juste le texte : Good morning", "Tırnaklar görünmez — sadece metin: Good morning"),
            tips: Tips(
              ["print shows what is inside the quotes.", "The quotes themselves are not printed.", "Answer: Good morning"],
              ["print muestra lo de dentro de las comillas.", "Las comillas no se imprimen.", "Respuesta: Good morning"],
              ["print montre ce qui est entre guillemets.", "Les guillemets ne s'affichent pas.", "Réponse : Good morning"],
              ["print tırnak içindekini gösterir.", "Tırnaklar yazdırılmaz.", "Cevap: Good morning"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "Rules of print: it is written in lowercase, and text must be inside quotes.",
              "Reglas de print: se escribe en minúsculas y el texto va entre comillas.",
              "Règles de print : en minuscules, et le texte doit être entre guillemets.",
              "print kuralları: küçük harfle yazılır ve metin tırnak içinde olmalıdır."
            ),
            instruct: L(
              "Which line correctly prints the word Hi?",
              "¿Qué línea imprime correctamente la palabra Hi?",
              "Quelle ligne affiche correctement le mot Hi ?",
              "Hi kelimesini doğru yazdıran satır hangisi?"
            ),
            code: "",
            options: L(
              ['Print("Hi")', 'print(Hi)', 'print("Hi")', 'print "Hi"'],
              ['Print("Hi")', 'print(Hi)', 'print("Hi")', 'print "Hi"'],
              ['Print("Hi")', 'print(Hi)', 'print("Hi")', 'print "Hi"'],
              ['Print("Hi")', 'print(Hi)', 'print("Hi")', 'print "Hi"']
            ),
            answer: 2,
            path: L('print("Hi") — lowercase print, text in quotes', 'print("Hi") — print en minúsculas y comillas', 'print("Hi") — print en minuscules et guillemets', 'print("Hi") — küçük print, tırnaklı metin'),
            tips: Tips(
              ["Python is case-sensitive: Print is wrong.", "Text needs quotes: print(Hi) is wrong.", 'Correct: print("Hi")'],
              ["Python distingue mayúsculas: Print está mal.", "El texto necesita comillas.", 'Correcto: print("Hi")'],
              ["Python est sensible à la casse : Print est faux.", "Le texte a besoin de guillemets.", 'Correct : print("Hi")'],
              ["Python büyük/küçük harfe duyarlı: Print yanlış.", "Metin tırnak ister.", 'Doğrusu: print("Hi")']
            ),
          }),
          step({
            type: "write",
            note: L(
              "Now you try. Pattern: print(\"your text\")",
              "Ahora tú. Patrón: print(\"tu texto\")",
              "À toi. Modèle : print(\"ton texte\")",
              "Şimdi sıra sende. Kalıp: print(\"metnin\")"
            ),
            instruct: L(
              "Write one line that prints the word Hello.",
              "Escribe una línea que imprima la palabra Hello.",
              "Écris une ligne qui affiche le mot Hello.",
              "Hello kelimesini yazdıran tek satırı yaz."
            ),
            code: "",
            placeholder: 'print("...")',
            accept: ['print("Hello")', "print('Hello')"],
            path: L('print("Hello")', 'print("Hello")', 'print("Hello")', 'print("Hello")'),
            tips: Tips(
              ["Start with print(", "Put Hello inside quotes.", 'print("Hello")'],
              ["Empieza con print(", "Pon Hello entre comillas.", 'print("Hello")'],
              ["Commence par print(", "Mets Hello entre guillemets.", 'print("Hello")'],
              ["print( ile başla", "Hello'yu tırnağa al", 'print("Hello")']
            ),
          }),
        ],
      },
      {
        id: "l1-comments",
        xp: 40,
        title: L("Comments", "Comentarios", "Commentaires", "Yorumlar"),
        blurb: L("Notes humans can read", "Notas para humanos", "Notes pour humains", "İnsanların okuduğu notlar"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A comment starts with #. Python skips comment lines — they are notes for humans.",
              "Un comentario empieza con #. Python salta esas líneas — son notas para humanos.",
              "Un commentaire commence par #. Python saute ces lignes — ce sont des notes pour humains.",
              "Yorum # ile başlar. Python bu satırları atlar — insanlar için nottur."
            ),
            instruct: L(
              "Which line does Python skip when running this code?",
              "¿Qué línea salta Python al ejecutar este código?",
              "Quelle ligne Python saute-t-il en exécutant ce code ?",
              "Python bu kodu çalıştırırken hangi satırı atlar?"
            ),
            code: '# my first program\nprint("hi")',
            options: L(
              ["Line 1", "Line 2", "Both lines", "Neither line"],
              ["Línea 1", "Línea 2", "Ambas", "Ninguna"],
              ["Ligne 1", "Ligne 2", "Les deux", "Aucune"],
              ["1. satır", "2. satır", "İkisi de", "Hiçbiri"]
            ),
            answer: 0,
            path: L("Line 1 starts with #, so it is a comment.", "La línea 1 empieza con #, es comentario.", "La ligne 1 commence par #, c'est un commentaire.", "1. satır # ile başlıyor, yorumdur."),
            tips: Tips(
              ["Look for the # symbol.", "Lines with # are ignored.", "Python skips line 1."],
              ["Busca el símbolo #.", "Las líneas con # se ignoran.", "Python salta la línea 1."],
              ["Cherche le symbole #.", "Les lignes avec # sont ignorées.", "Python saute la ligne 1."],
              ["# işaretini ara.", "# olan satırlar yok sayılır.", "Python 1. satırı atlar."]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "Only # makes a comment in Python. Symbols like // or /* */ belong to other languages.",
              "Solo # crea comentarios en Python. // o /* */ son de otros lenguajes.",
              "Seul # crée un commentaire en Python. // ou /* */ viennent d'autres langages.",
              "Python'da yorum yalnızca # ile yapılır. // veya /* */ başka dillere aittir."
            ),
            instruct: L(
              "You want to disable this print without deleting it. Which line is valid Python?",
              "Quieres desactivar este print sin borrarlo. ¿Qué línea es Python válido?",
              "Tu veux désactiver ce print sans le supprimer. Quelle ligne est du Python valide ?",
              "Bu print'i silmeden kapatmak istiyorsun. Hangisi geçerli Python?"
            ),
            code: 'print("run")',
            options: L(
              ['// print("run")', '# print("run")', '/* print("run") */', '-- print("run")'],
              ['// print("run")', '# print("run")', '/* print("run") */', '-- print("run")'],
              ['// print("run")', '# print("run")', '/* print("run") */', '-- print("run")'],
              ['// print("run")', '# print("run")', '/* print("run") */', '-- print("run")']
            ),
            answer: 1,
            path: L("Put # at the start of the line.", "Pon # al inicio.", "Mets # au début.", "Satır başına # koy."),
            tips: Tips(
              ["// and /* */ are not Python.", "Python uses one short symbol.", "That symbol is #."],
              ["// y /* */ no son de Python.", "Python usa un símbolo corto.", "Ese símbolo es #."],
              ["// et /* */ ne sont pas Python.", "Python utilise un symbole court.", "Ce symbole est #."],
              ["// ve /* */ Python değil.", "Python kısa bir sembol kullanır.", "O sembol #."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern: # your note here",
              "Patrón: # tu nota aquí",
              "Modèle : # ta note ici",
              "Kalıp: # notun buraya"
            ),
            instruct: L(
              "Write a comment containing exactly: learn python",
              "Escribe un comentario con exactamente: learn python",
              "Écris un commentaire contenant exactement : learn python",
              "İçinde tam olarak learn python yazan bir yorum yaz."
            ),
            code: "",
            placeholder: "# ...",
            accept: ["# learn python", "#learn python"],
            path: L("# learn python", "# learn python", "# learn python", "# learn python"),
            tips: Tips(
              ["Comments begin with #.", "Then write the words.", "# learn python"],
              ["Los comentarios empiezan con #.", "Luego escribe las palabras.", "# learn python"],
              ["Les commentaires commencent par #.", "Puis écris les mots.", "# learn python"],
              ["Yorumlar # ile başlar.", "Sonra kelimeleri yaz.", "# learn python"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 2,
    title: L("Level 2 · Variables", "Nivel 2 · Variables", "Niveau 2 · Variables", "Seviye 2 · Değişkenler"),
    lessons: [
      {
        id: "l2-assign",
        xp: 50,
        title: L("Assignment", "Asignación", "Affectation", "Atama"),
        blurb: L("Store values in names", "Guardar valores", "Stocker des valeurs", "İsime değer sakla"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A variable stores a value: name = value. Later you can use the name instead of the value.",
              "Una variable guarda un valor: nombre = valor. Luego usas el nombre en vez del valor.",
              "Une variable stocke une valeur : nom = valeur. Ensuite tu utilises le nom à la place de la valeur.",
              "Değişken bir değer saklar: isim = değer. Sonra değerin yerine ismi kullanırsın."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: "age = 15\nprint(age)",
            options: L(["15", "age", '"age"', "Error"], ["15", "age", '"age"', "Error"], ["15", "age", '"age"', "Erreur"], ["15", "age", '"age"', "Hata"]),
            answer: 0,
            path: L("age holds 15, so print(age) shows 15.", "age guarda 15, print(age) muestra 15.", "age vaut 15, donc print(age) montre 15.", "age 15 tutar, print(age) 15 gösterir."),
            tips: Tips(
              ["age has no quotes, so Python uses its value.", "The value stored in age is 15.", "Printed: 15"],
              ["age no tiene comillas, se usa su valor.", "El valor guardado es 15.", "Se imprime: 15"],
              ["age n'a pas de guillemets, on utilise sa valeur.", "La valeur stockée est 15.", "Affiché : 15"],
              ["age tırnaksız, değeri kullanılır.", "Saklanan değer 15.", "Yazdırılan: 15"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "A variable can be updated using its old value: n = n + 2 means take n, add 2, store it back.",
              "Una variable puede actualizarse con su valor anterior: n = n + 2 significa tomar n, sumar 2 y guardar.",
              "Une variable peut être mise à jour avec son ancienne valeur : n = n + 2 signifie prendre n, ajouter 2, stocker.",
              "Değişken eski değeriyle güncellenebilir: n = n + 2, n'yi al, 2 ekle, geri sakla demektir."
            ),
            instruct: L(
              "After these two lines run, what is the value of n?",
              "Después de estas dos líneas, ¿cuál es el valor de n?",
              "Après ces deux lignes, quelle est la valeur de n ?",
              "Bu iki satır çalışınca n'nin değeri nedir?"
            ),
            code: "n = 4\nn = n + 2",
            options: L(["4", "2", "6", "n + 2"], ["4", "2", "6", "n + 2"], ["4", "2", "6", "n + 2"], ["4", "2", "6", "n + 2"]),
            answer: 2,
            path: L("Start at 4, add 2 → n is 6", "Empieza en 4, suma 2 → n es 6", "Pars de 4, ajoute 2 → n vaut 6", "4 ile başla, 2 ekle → n = 6"),
            tips: Tips(
              ["The second line uses the old value of n.", "4 + 2 equals…", "Final answer is 6."],
              ["La segunda línea usa el valor anterior de n.", "4 + 2 es…", "La respuesta es 6."],
              ["La 2e ligne utilise l'ancienne valeur de n.", "4 + 2 fait…", "La réponse est 6."],
              ["İkinci satır eski n'yi kullanır.", "4 + 2 = …", "Sonuç 6."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern for storing text: name = \"text\"",
              "Patrón para guardar texto: nombre = \"texto\"",
              "Modèle pour stocker du texte : nom = \"texte\"",
              "Metin saklama kalıbı: isim = \"metin\""
            ),
            instruct: L(
              "Create a variable called name that stores the text Pyro.",
              "Crea una variable name que guarde el texto Pyro.",
              "Crée une variable name qui stocke le texte Pyro.",
              "Pyro metnini saklayan name değişkenini yaz."
            ),
            code: "",
            placeholder: 'name = "..."',
            accept: ['name = "Pyro"', "name = 'Pyro'"],
            path: L('name = "Pyro"', 'name = "Pyro"', 'name = "Pyro"', 'name = "Pyro"'),
            tips: Tips(
              ["Left side = variable name.", "Right side = quoted text.", 'name = "Pyro"'],
              ["Izquierda = nombre.", "Derecha = texto entre comillas.", 'name = "Pyro"'],
              ["Gauche = nom.", "Droite = texte entre guillemets.", 'name = "Pyro"'],
              ["Sol = değişken adı.", "Sağ = tırnaklı metin.", 'name = "Pyro"']
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 3,
    title: L("Level 3 · Data types", "Nivel 3 · Tipos", "Niveau 3 · Types", "Seviye 3 · Veri tipleri"),
    lessons: [
      {
        id: "l3-types",
        xp: 50,
        title: L("int · str · float · bool", "int · str · float · bool", "int · str · float · bool", "int · str · float · bool"),
        blurb: L("Know what kind of value you have", "Conoce el tipo de valor", "Connais le type de valeur", "Değerin tipini tanı"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Four basic types: int = whole number (7), float = decimal (7.5), str = text in quotes (\"7\"), bool = True/False.",
              "Cuatro tipos básicos: int = entero (7), float = decimal (7.5), str = texto entre comillas (\"7\"), bool = True/False.",
              "Quatre types de base : int = entier (7), float = décimal (7.5), str = texte entre guillemets (\"7\"), bool = True/False.",
              "Dört temel tip: int = tam sayı (7), float = ondalık (7.5), str = tırnaklı metin (\"7\"), bool = True/False."
            ),
            instruct: L(
              "Which of these values is an int (whole number)?",
              "¿Cuál de estos valores es un int (entero)?",
              "Laquelle de ces valeurs est un int (entier) ?",
              "Bu değerlerden hangisi int (tam sayı)?"
            ),
            code: "",
            options: L(['"7"', "7", "7.5", '"seven"'], ['"7"', "7", "7.5", '"siete"'], ['"7"', "7", "7.5", '"sept"'], ['"7"', "7", "7.5", '"yedi"']),
            answer: 1,
            path: L("7 without quotes and without a decimal point is an int.", "7 sin comillas y sin punto decimal es int.", "7 sans guillemets et sans point décimal est un int.", "Tırnaksız ve noktasız 7 bir int'tir."),
            tips: Tips(
              ["Quotes make a value text (str).", "A decimal point makes it float.", "Plain 7 is an int."],
              ["Las comillas hacen texto (str).", "El punto decimal hace float.", "7 solo es int."],
              ["Les guillemets font du texte (str).", "Le point décimal fait un float.", "7 seul est un int."],
              ["Tırnak metin (str) yapar.", "Ondalık nokta float yapar.", "Yalın 7 int'tir."]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "type() tells you the type of a value. Anything in quotes is a str, even if it looks like a number.",
              "type() te dice el tipo de un valor. Todo lo que va entre comillas es str, aunque parezca número.",
              "type() te donne le type d'une valeur. Tout ce qui est entre guillemets est un str, même si ça ressemble à un nombre.",
              "type() değerin tipini söyler. Tırnak içindeki her şey str'dir, sayı gibi görünse bile."
            ),
            instruct: L(
              'What does type("7") return?',
              '¿Qué devuelve type("7")?',
              'Que renvoie type("7") ?',
              'type("7") ne döner?'
            ),
            code: 'type("7")',
            options: L(["<class 'int'>", "<class 'str'>", "<class 'float'>", "7"], ["<class 'int'>", "<class 'str'>", "<class 'float'>", "7"], ["<class 'int'>", "<class 'str'>", "<class 'float'>", "7"], ["<class 'int'>", "<class 'str'>", "<class 'float'>", "7"]),
            answer: 1,
            path: L("Quotes make it a string (str).", "Las comillas hacen str.", "Les guillemets font un str.", "Tırnak onu str yapar."),
            tips: Tips(
              ["Look at the quotes around 7.", "Quoted values are text.", "Type is str."],
              ["Mira las comillas.", "Entre comillas = texto.", "El tipo es str."],
              ["Regarde les guillemets.", "Entre guillemets = texte.", "Le type est str."],
              ["Tırnaklara bak.", "Tırnaklı değer metindir.", "Tip str."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Booleans are True or False — always with a capital first letter, no quotes.",
              "Los booleanos son True o False — siempre con mayúscula inicial y sin comillas.",
              "Les booléens sont True ou False — toujours avec une majuscule, sans guillemets.",
              "Boolean değerler True veya False'tur — ilk harf hep büyük, tırnaksız."
            ),
            instruct: L(
              "Assign the boolean value True to a variable named ok.",
              "Asigna el booleano True a una variable llamada ok.",
              "Assigne le booléen True à une variable nommée ok.",
              "ok adlı değişkene True boolean değerini ata."
            ),
            code: "",
            placeholder: "ok = ...",
            accept: ["ok = True"],
            path: L("ok = True", "ok = True", "ok = True", "ok = True"),
            tips: Tips(
              ["True starts with a capital T.", "No quotes around True.", "ok = True"],
              ["True empieza con T mayúscula.", "Sin comillas.", "ok = True"],
              ["True commence par un T majuscule.", "Pas de guillemets.", "ok = True"],
              ["True büyük T ile yazılır.", "Tırnak yok.", "ok = True"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 4,
    title: L("Level 4 · Operators", "Nivel 4 · Operadores", "Niveau 4 · Opérateurs", "Seviye 4 · Operatörler"),
    lessons: [
      {
        id: "l4-math",
        xp: 55,
        title: L("Math & compare", "Mate y comparar", "Maths et comparer", "Matematik ve karşılaştırma"),
        blurb: L("+ - * / ** %", "+ - * / ** %", "+ - * / ** %", "+ - * / ** %"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Python does math: + add, - subtract, * multiply, / divide.",
              "Python hace mate: + sumar, - restar, * multiplicar, / dividir.",
              "Python fait des maths : + addition, - soustraction, * multiplication, / division.",
              "Python matematik yapar: + toplama, - çıkarma, * çarpma, / bölme."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: "print(3 * 4)",
            options: L(["7", "12", "34", "Error"], ["7", "12", "34", "Error"], ["7", "12", "34", "Erreur"], ["7", "12", "34", "Hata"]),
            answer: 1,
            path: L("* means multiply: 3 × 4 = 12", "* es multiplicar: 3 × 4 = 12", "* signifie multiplier : 3 × 4 = 12", "* çarpma demektir: 3 × 4 = 12"),
            tips: Tips(
              ["* is the multiplication symbol.", "3 times 4.", "Answer: 12"],
              ["* es multiplicación.", "3 por 4.", "Respuesta: 12"],
              ["* est la multiplication.", "3 fois 4.", "Réponse : 12"],
              ["* çarpma işaretidir.", "3 kere 4.", "Cevap: 12"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "% gives the remainder of a division. Example: 7 % 3 is 1, because 3 fits twice in 7 and 1 is left.",
              "% da el resto de una división. Ejemplo: 7 % 3 es 1, porque 3 cabe dos veces en 7 y sobra 1.",
              "% donne le reste d'une division. Exemple : 7 % 3 vaut 1, car 3 rentre deux fois dans 7 et il reste 1.",
              "% bölmeden kalanı verir. Örnek: 7 % 3 = 1, çünkü 7'de iki tane 3 var ve 1 artar."
            ),
            instruct: L(
              "What does print(17 % 5) show?",
              "¿Qué muestra print(17 % 5)?",
              "Que montre print(17 % 5) ?",
              "print(17 % 5) ne gösterir?"
            ),
            code: "print(17 % 5)",
            options: L(["3", "2", "3.4", "5"], ["3", "2", "3.4", "5"], ["3", "2", "3.4", "5"], ["3", "2", "3.4", "5"]),
            answer: 1,
            path: L("% means remainder: 17 = 3×5 + 2", "% es el resto: 17 = 3×5 + 2", "% est le reste : 17 = 3×5 + 2", "% kalan demektir: 17 = 3×5 + 2"),
            tips: Tips(
              ["% is remainder, not percent.", "How many full 5s fit in 17? Three.", "17 − 15 = 2. Answer: 2"],
              ["% es el resto, no porcentaje.", "¿Cuántos 5 caben en 17? Tres.", "17 − 15 = 2. Respuesta: 2"],
              ["% est le reste, pas le pourcentage.", "Combien de 5 dans 17 ? Trois.", "17 − 15 = 2. Réponse : 2"],
              ["% kalan demek, yüzde değil.", "17'de kaç tam 5 var? Üç.", "17 − 15 = 2. Cevap: 2"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "** means power. Example: 3 ** 2 is 3 squared (9).",
              "** es potencia. Ejemplo: 3 ** 2 es 3 al cuadrado (9).",
              "** signifie puissance. Exemple : 3 ** 2 est 3 au carré (9).",
              "** üs demektir. Örnek: 3 ** 2, 3'ün karesidir (9)."
            ),
            instruct: L(
              "Write an expression for 2 raised to the power of 5 using **.",
              "Escribe 2 elevado a 5 usando **.",
              "Écris 2 puissance 5 avec **.",
              "2 üzeri 5 ifadesini ** ile yaz."
            ),
            code: "",
            placeholder: "2 ** ...",
            accept: ["2 ** 5", "2**5"],
            path: L("2 ** 5", "2 ** 5", "2 ** 5", "2 ** 5"),
            tips: Tips(
              ["Power uses **.", "Base 2, exponent 5.", "2 ** 5"],
              ["La potencia usa **.", "Base 2, exponente 5.", "2 ** 5"],
              ["La puissance utilise **.", "Base 2, exposant 5.", "2 ** 5"],
              ["Üs için **.", "Taban 2, üs 5.", "2 ** 5"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 5,
    title: L("Level 5 · Strings", "Nivel 5 · Cadenas", "Niveau 5 · Chaînes", "Seviye 5 · Stringler"),
    lessons: [
      {
        id: "l5-strings",
        xp: 55,
        title: L("Text tools", "Herramientas de texto", "Outils texte", "Metin araçları"),
        blurb: L("len, upper, f-strings", "len, upper, f-strings", "len, upper, f-strings", "len, upper, f-string"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "len() counts the characters in a text. len(\"hi\") is 2.",
              "len() cuenta los caracteres de un texto. len(\"hi\") es 2.",
              "len() compte les caractères d'un texte. len(\"hi\") vaut 2.",
              "len() metindeki karakterleri sayar. len(\"hi\") = 2."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: 'print(len("cat"))',
            options: L(["2", "3", '"cat"', "Error"], ["2", "3", '"cat"', "Error"], ["2", "3", '"cat"', "Erreur"], ["2", "3", '"cat"', "Hata"]),
            answer: 1,
            path: L("cat has 3 letters → 3", "cat tiene 3 letras → 3", "cat a 3 lettres → 3", "cat 3 harflidir → 3"),
            tips: Tips(
              ["Count the letters: c, a, t.", "len returns a number.", "Answer: 3"],
              ["Cuenta las letras: c, a, t.", "len devuelve un número.", "Respuesta: 3"],
              ["Compte les lettres : c, a, t.", "len renvoie un nombre.", "Réponse : 3"],
              ["Harfleri say: c, a, t.", "len sayı döner.", "Cevap: 3"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              ".upper() makes all letters CAPITAL. + glues two strings together.",
              ".upper() pone todo en MAYÚSCULAS. + une dos textos.",
              ".upper() met tout en MAJUSCULES. + colle deux textes.",
              ".upper() tüm harfleri BÜYÜK yapar. + iki metni birleştirir."
            ),
            instruct: L(
              "What is printed by this code?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: 's = "py"\nprint(s.upper() + "RO")',
            options: L(["pyRO", "PYRO", "PyRo", "Error"], ["pyRO", "PYRO", "PyRo", "Error"], ["pyRO", "PYRO", "PyRo", "Erreur"], ["pyRO", "PYRO", "PyRo", "Hata"]),
            answer: 1,
            path: L('"py".upper() → PY, then + RO → PYRO', '"py".upper() → PY + RO → PYRO', '"py".upper() → PY + RO → PYRO', '"py".upper() → PY, sonra + RO → PYRO'),
            tips: Tips(
              [".upper() makes letters capital.", "Then + joins strings.", "PY + RO = PYRO"],
              [".upper() pone mayúsculas.", "Luego + une textos.", "PY + RO = PYRO"],
              [".upper() met en majuscules.", "Puis + joint les textes.", "PY + RO = PYRO"],
              [".upper() harfleri büyütür.", "Sonra + birleştirir.", "PY + RO = PYRO"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "An f-string inserts a variable into text: f\"Hi {name}\" — the f goes before the quotes, the variable inside {curly braces}.",
              "Un f-string inserta una variable en el texto: f\"Hi {name}\" — la f va antes de las comillas, la variable entre {llaves}.",
              "Un f-string insère une variable dans le texte : f\"Hi {name}\" — le f avant les guillemets, la variable entre {accolades}.",
              "f-string metne değişken ekler: f\"Hi {name}\" — f tırnaktan önce, değişken {süslü parantez} içinde."
            ),
            instruct: L(
              "Write an f-string that prints Hello followed by the value of name.",
              "Escribe un f-string que imprima Hello y luego el valor de name.",
              "Écris un f-string qui affiche Hello puis la valeur de name.",
              "Hello ve name değerini yazdıran bir f-string yaz."
            ),
            code: 'name = "Ada"',
            placeholder: 'print(f"Hello {name}")',
            accept: ['print(f"Hello {name}")', "print(f'Hello {name}')", 'print(f"Hello {name}!")'],
            path: L('print(f"Hello {name}")', 'print(f"Hello {name}")', 'print(f"Hello {name}")', 'print(f"Hello {name}")'),
            tips: Tips(
              ["Put f before the quotes.", "Insert name with {name}.", 'print(f"Hello {name}")'],
              ["Pon f antes de las comillas.", "Inserta name con {name}.", 'print(f"Hello {name}")'],
              ["Mets f avant les guillemets.", "Insère name avec {name}.", 'print(f"Hello {name}")'],
              ["Tırnaktan önce f koy.", "name'i {name} ile ekle.", 'print(f"Hello {name}")']
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 6,
    title: L("Level 6 · Input", "Nivel 6 · Entrada", "Niveau 6 · Saisie", "Seviye 6 · Girdi"),
    lessons: [
      {
        id: "l6-input",
        xp: 55,
        title: L("input() & int()", "input() y int()", "input() et int()", "input() ve int()"),
        blurb: L("Ask the user, then convert", "Pregunta y convierte", "Demande puis convertis", "Sor, sonra çevir"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "input() asks the user to type something. Whatever they type comes back as text (str) — always, even digits.",
              "input() pide al usuario que escriba algo. Lo que escriba vuelve como texto (str) — siempre, incluso dígitos.",
              "input() demande à l'utilisateur d'écrire. Ce qu'il tape revient toujours comme texte (str), même des chiffres.",
              "input() kullanıcıdan bir şey yazmasını ister. Yazılan her şey metin (str) olarak gelir — rakam bile olsa."
            ),
            instruct: L(
              "The user types 12. What is stored in age?",
              "El usuario escribe 12. ¿Qué se guarda en age?",
              "L'utilisateur tape 12. Que contient age ?",
              "Kullanıcı 12 yazar. age içinde ne saklanır?"
            ),
            code: 'age = input("Age? ")',
            options: L(
              ['The text "12"', "The number 12", "The number 12.0", "Nothing"],
              ['El texto "12"', "El número 12", "El número 12.0", "Nada"],
              ['Le texte "12"', "Le nombre 12", "Le nombre 12.0", "Rien"],
              ['"12" metni', "12 sayısı", "12.0 sayısı", "Hiçbir şey"]
            ),
            answer: 0,
            path: L("input() always returns str.", "input() siempre devuelve str.", "input() renvoie toujours str.", "input() her zaman str döner."),
            tips: Tips(
              ["input never converts by itself.", "Typed digits stay text.", 'age holds the text "12".'],
              ["input no convierte solo.", "Los dígitos siguen siendo texto.", 'age guarda el texto "12".'],
              ["input ne convertit jamais tout seul.", "Les chiffres restent du texte.", 'age contient le texte "12".'],
              ["input kendiliğinden çevirmez.", "Rakamlar metin kalır.", 'age "12" metnini tutar.']
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "int() converts text into a whole number, so you can do math with it: int(\"5\") is the number 5.",
              "int() convierte texto en número entero para poder hacer mate: int(\"5\") es el número 5.",
              "int() convertit du texte en nombre entier pour faire des maths : int(\"5\") est le nombre 5.",
              "int() metni tam sayıya çevirir, böylece matematik yapabilirsin: int(\"5\") sayı 5'tir."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: 'print(int("5") + 2)',
            options: L(["52", "7", '"52"', "Error"], ["52", "7", '"52"', "Error"], ["52", "7", '"52"', "Erreur"], ["52", "7", '"52"', "Hata"]),
            answer: 1,
            path: L('int("5") becomes the number 5 → 5 + 2 = 7', 'int("5") pasa a ser 5 → 5 + 2 = 7', 'int("5") devient 5 → 5 + 2 = 7', 'int("5") sayı 5 olur → 5 + 2 = 7'),
            tips: Tips(
              ["int converts the text to a number first.", "Then it is normal math.", "5 + 2 = 7"],
              ["int convierte el texto en número.", "Luego es mate normal.", "5 + 2 = 7"],
              ["int convertit d'abord le texte en nombre.", "Ensuite maths normales.", "5 + 2 = 7"],
              ["int önce metni sayıya çevirir.", "Sonrası normal matematik.", "5 + 2 = 7"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern to convert: n = int(n)",
              "Patrón para convertir: n = int(n)",
              "Modèle pour convertir : n = int(n)",
              "Çevirme kalıbı: n = int(n)"
            ),
            instruct: L(
              "Convert the string variable n into an integer on one line.",
              "Convierte la variable string n a entero en una línea.",
              "Convertis la variable chaîne n en entier en une ligne.",
              "n string değişkenini tek satırda tam sayıya çevir."
            ),
            code: 'n = "42"',
            placeholder: "n = int(...)",
            accept: ["n = int(n)", "n=int(n)"],
            path: L("n = int(n)", "n = int(n)", "n = int(n)", "n = int(n)"),
            tips: Tips(
              ["Use int(...).", "Pass n into it.", "n = int(n)"],
              ["Usa int(...).", "Pasa n.", "n = int(n)"],
              ["Utilise int(...).", "Passe n.", "n = int(n)"],
              ["int(...) kullan.", "n'yi içine ver.", "n = int(n)"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 7,
    title: L("Level 7 · Conditionals", "Nivel 7 · Condicionales", "Niveau 7 · Conditions", "Seviye 7 · Koşullar"),
    lessons: [
      {
        id: "l7-if",
        xp: 60,
        title: L("if / elif / else", "if / elif / else", "if / elif / else", "if / elif / else"),
        blurb: L("Choose a path in code", "Elegir un camino", "Choisir un chemin", "Kodda yol seç"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "if runs a block only when the condition is True. The block under if is indented.",
              "if ejecuta un bloque solo cuando la condición es True. El bloque va indentado.",
              "if exécute un bloc seulement quand la condition est True. Le bloc sous if est indenté.",
              "if, koşul True olduğunda bir bloğu çalıştırır. if altındaki blok girintilidir."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: 'x = 10\nif x > 5:\n    print("big")',
            options: L(["big", "Nothing", "x", "Error"], ["big", "Nada", "x", "Error"], ["big", "Rien", "x", "Erreur"], ["big", "Hiçbir şey", "x", "Hata"]),
            answer: 0,
            path: L("10 > 5 is True, so the block runs → big", "10 > 5 es True, el bloque corre → big", "10 > 5 est True, le bloc s'exécute → big", "10 > 5 True'dur, blok çalışır → big"),
            tips: Tips(
              ["Is 10 greater than 5?", "True means the indented line runs.", "Printed: big"],
              ["¿10 es mayor que 5?", "True hace correr la línea indentada.", "Se imprime: big"],
              ["10 est-il plus grand que 5 ?", "True fait tourner la ligne indentée.", "Affiché : big"],
              ["10, 5'ten büyük mü?", "True ise girintili satır çalışır.", "Yazdırılan: big"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "Two rules of if: the line ends with a colon (:), and the next line must be indented.",
              "Dos reglas del if: la línea termina con dos puntos (:) y la siguiente va indentada.",
              "Deux règles du if : la ligne finit par deux-points (:) et la suivante doit être indentée.",
              "if'in iki kuralı: satır iki nokta (:) ile biter ve sonraki satır girintili olmalıdır."
            ),
            instruct: L(
              "Which snippet runs with no SyntaxError?",
              "¿Qué fragmento corre sin SyntaxError?",
              "Quel fragment tourne sans SyntaxError ?",
              "Hangisi SyntaxError vermeden çalışır?"
            ),
            code: "ready = True",
            options: L(
              ['if ready\n    print("go")', 'if ready:\nprint("go")', 'if ready:\n    print("go")', 'if (ready) print("go")'],
              ['if ready\n    print("go")', 'if ready:\nprint("go")', 'if ready:\n    print("go")', 'if (ready) print("go")'],
              ['if ready\n    print("go")', 'if ready:\nprint("go")', 'if ready:\n    print("go")', 'if (ready) print("go")'],
              ['if ready\n    print("go")', 'if ready:\nprint("go")', 'if ready:\n    print("go")', 'if (ready) print("go")']
            ),
            answer: 2,
            path: L("Need a colon : and an indented block.", "Hace falta : y un bloque indentado.", "Il faut : et un bloc indenté.", "İki nokta : ve girinti gerekir."),
            tips: Tips(
              ["if lines end with :", "Next line must be indented.", "Both rules together."],
              ["if termina con :", "La siguiente línea va indentada.", "Las dos reglas juntas."],
              ["if finit par :", "La ligne suivante est indentée.", "Les deux règles ensemble."],
              ["if : ile biter", "Sonraki satır girintili", "İkisi birden."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern:\nif condition:\n    do something",
              "Patrón:\nif condición:\n    haz algo",
              "Modèle :\nif condition :\n    fais quelque chose",
              "Kalıp:\nif koşul:\n    bir şey yap"
            ),
            instruct: L(
              "Write an if that prints ok when ready is True. Indent with 4 spaces.",
              "Escribe un if que imprima ok si ready es True. 4 espacios.",
              "Écris un if qui affiche ok si ready est True. 4 espaces.",
              "ready True ise ok yazdıran if yaz. 4 boşluk girinti kullan."
            ),
            code: "ready = True",
            placeholder: "if ready:\n    print(...)",
            accept: ['if ready:\n    print("ok")', "if ready:\n    print('ok')", 'if ready == True:\n    print("ok")'],
            path: L('if ready:\n    print("ok")', 'if ready:\n    print("ok")', 'if ready:\n    print("ok")', 'if ready:\n    print("ok")'),
            tips: Tips(
              ["Start with if ready:", 'Then indented print("ok")', "Colon + indent"],
              ["Empieza con if ready:", 'Luego print("ok") indentado', "Dos puntos + indent"],
              ["Commence par if ready :", 'Puis print("ok") indenté', "Deux-points + indent"],
              ["if ready: ile başla", 'girintili print("ok")', "İki nokta + girinti"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 8,
    title: L("Level 8 · Boolean logic", "Nivel 8 · Lógica booleana", "Niveau 8 · Logique booléenne", "Seviye 8 · Boolean mantık"),
    lessons: [
      {
        id: "l8-bool",
        xp: 60,
        title: L("and · or · not", "and · or · not", "and · or · not", "and · or · not"),
        blurb: L("Combine True/False tests", "Combinar pruebas", "Combiner les tests", "True/False testlerini birleştir"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "and is True only when BOTH sides are True. or is True when AT LEAST ONE side is True.",
              "and es True solo cuando AMBOS lados son True. or es True cuando AL MENOS UNO lo es.",
              "and est True seulement quand LES DEUX côtés sont True. or est True quand AU MOINS UN côté l'est.",
              "and yalnızca İKİ taraf da True ise True'dur. or ise EN AZ BİR taraf True ise True'dur."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: "print(True and False)",
            options: L(["True", "False", "Error", "Nothing"], ["True", "False", "Error", "Nada"], ["True", "False", "Erreur", "Rien"], ["True", "False", "Hata", "Hiçbir şey"]),
            answer: 1,
            path: L("and needs both True — one side is False → False", "and necesita ambos True — uno es False → False", "and exige les deux True — un côté est False → False", "and iki True ister — biri False → False"),
            tips: Tips(
              ["and needs both sides True.", "Here one side is False.", "Result: False"],
              ["and necesita ambos True.", "Aquí uno es False.", "Resultado: False"],
              ["and exige les deux True.", "Ici un côté est False.", "Résultat : False"],
              ["and iki tarafın da True olmasını ister.", "Burada biri False.", "Sonuç: False"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "Comparisons like age >= 18 give True or False. You can combine them: age >= 18 and has_id.",
              "Comparaciones como age >= 18 dan True o False. Puedes combinarlas: age >= 18 and has_id.",
              "Les comparaisons comme age >= 18 donnent True ou False. On peut les combiner : age >= 18 and has_id.",
              "age >= 18 gibi karşılaştırmalar True veya False verir. Birleştirebilirsin: age >= 18 and has_id."
            ),
            instruct: L(
              "What does this expression evaluate to?",
              "¿A qué evalúa esta expresión?",
              "Que vaut cette expression ?",
              "Bu ifade neye eşitlenir?"
            ),
            code: "age = 20\nhas_id = True\nprint(age >= 18 and has_id)",
            options: L(["True", "False", "20", "Error"], ["True", "False", "20", "Error"], ["True", "False", "20", "Erreur"], ["True", "False", "20", "Hata"]),
            answer: 0,
            path: L("Both sides are True → and → True", "Ambos lados True → and → True", "Les deux côtés sont True → and → True", "İki taraf da True → and → True"),
            tips: Tips(
              ["age >= 18 → is 20 at least 18? True.", "has_id is True.", "True and True → True"],
              ["age >= 18 → ¿20 es al menos 18? True.", "has_id es True.", "True and True → True"],
              ["age >= 18 → 20 est-il au moins 18 ? True.", "has_id est True.", "True and True → True"],
              ["age >= 18 → 20 en az 18 mi? True.", "has_id True.", "True and True → True"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "\"at least 50\" means >= 50. Join two tests with the word or.",
              "\"al menos 50\" significa >= 50. Une dos pruebas con la palabra or.",
              "\"au moins 50\" signifie >= 50. Relie deux tests avec le mot or.",
              "\"en az 50\" demek >= 50 demektir. İki testi or kelimesiyle birleştir."
            ),
            instruct: L(
              "Write a condition: score is at least 50 OR bonus is True.",
              "Escribe: score es al menos 50 O bonus es True.",
              "Écris : score est au moins 50 OU bonus est True.",
              "score en az 50 VEYA bonus True koşulunu yaz."
            ),
            code: "score = 40\nbonus = True",
            placeholder: "score >= 50 or bonus",
            accept: ["score >= 50 or bonus", "score>=50 or bonus", "bonus or score >= 50"],
            path: L("score >= 50 or bonus", "score >= 50 or bonus", "score >= 50 or bonus", "score >= 50 or bonus"),
            tips: Tips(
              ["Use the or keyword.", "Left: score >= 50", "score >= 50 or bonus"],
              ["Usa la palabra or.", "Izquierda: score >= 50", "score >= 50 or bonus"],
              ["Utilise le mot or.", "Gauche : score >= 50", "score >= 50 or bonus"],
              ["or kelimesini kullan.", "Sol: score >= 50", "score >= 50 or bonus"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 9,
    title: L("Level 9 · for loops", "Nivel 9 · Bucles for", "Niveau 9 · Boucles for", "Seviye 9 · for döngüleri"),
    lessons: [
      {
        id: "l9-for",
        xp: 65,
        title: L("for + range", "for + range", "for + range", "for + range"),
        blurb: L("Repeat with range", "Repetir con range", "Répéter avec range", "range ile tekrarla"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "range(3) produces the numbers 0, 1, 2. It always starts at 0 and stops BEFORE the number you give.",
              "range(3) produce los números 0, 1, 2. Empieza en 0 y para ANTES del número que das.",
              "range(3) produit les nombres 0, 1, 2. Ça commence à 0 et s'arrête AVANT le nombre donné.",
              "range(3) 0, 1, 2 sayılarını üretir. Hep 0'dan başlar ve verdiğin sayıdan ÖNCE durur."
            ),
            instruct: L(
              "Which numbers does range(3) produce?",
              "¿Qué números produce range(3)?",
              "Quels nombres range(3) produit-il ?",
              "range(3) hangi sayıları üretir?"
            ),
            code: "for i in range(3):\n    print(i)",
            options: L(["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"], ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"], ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"], ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"]),
            answer: 1,
            path: L("range starts at 0 and stops before 3 → 0, 1, 2", "range empieza en 0 y para antes de 3 → 0, 1, 2", "range commence à 0 et s'arrête avant 3 → 0, 1, 2", "range 0'dan başlar, 3'ten önce durur → 0, 1, 2"),
            tips: Tips(
              ["range starts counting at 0.", "It stops before the given number.", "0, 1, 2"],
              ["range empieza en 0.", "Para antes del número dado.", "0, 1, 2"],
              ["range commence à 0.", "Il s'arrête avant le nombre donné.", "0, 1, 2"],
              ["range 0'dan saymaya başlar.", "Verilen sayıdan önce durur.", "0, 1, 2"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "range(start, stop) begins at start and stops before stop. range(1, 4) → 1, 2, 3.",
              "range(inicio, fin) empieza en inicio y para antes de fin. range(1, 4) → 1, 2, 3.",
              "range(début, fin) commence à début et s'arrête avant fin. range(1, 4) → 1, 2, 3.",
              "range(başla, dur) başla'dan başlar, dur'dan önce biter. range(1, 4) → 1, 2, 3."
            ),
            instruct: L(
              "How many times does this loop print?",
              "¿Cuántas veces imprime este bucle?",
              "Combien de fois cette boucle affiche-t-elle ?",
              "Bu döngü kaç kez yazdırır?"
            ),
            code: "for i in range(1, 4):\n    print(i)",
            options: L(["4", "3", "2", "1"], ["4", "3", "2", "1"], ["4", "3", "2", "1"], ["4", "3", "2", "1"]),
            answer: 1,
            path: L("range(1, 4) → 1, 2, 3 → three times", "range(1, 4) → 1, 2, 3", "range(1, 4) → 1, 2, 3", "range(1, 4) → 1, 2, 3 → üç kez"),
            tips: Tips(
              ["range(start, stop) stops before stop.", "Values are 1, 2, 3.", "That is 3 prints."],
              ["range para antes de stop.", "Valores 1, 2, 3.", "Son 3 prints."],
              ["range s'arrête avant stop.", "Valeurs 1, 2, 3.", "Donc 3 affichages."],
              ["range stop'tan önce biter.", "Değerler 1, 2, 3.", "3 yazdırma."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern:\nfor i in range(3):\n    print(i)",
              "Patrón:\nfor i in range(3):\n    print(i)",
              "Modèle :\nfor i in range(3) :\n    print(i)",
              "Kalıp:\nfor i in range(3):\n    print(i)"
            ),
            instruct: L(
              "Write a for-loop that prints i for every i in range(3).",
              "Escribe un for que imprima i para cada i en range(3).",
              "Écris une boucle for qui affiche i pour chaque i dans range(3).",
              "range(3) içindeki her i için i yazdıran for döngüsünü yaz."
            ),
            code: "",
            placeholder: "for i in range(3):\n    print(i)",
            accept: ["for i in range(3):\n    print(i)", "for i in range(3):\n\tprint(i)"],
            path: L("for i in range(3):\n    print(i)", "for i in range(3):\n    print(i)", "for i in range(3):\n    print(i)", "for i in range(3):\n    print(i)"),
            tips: Tips(
              ["Header: for i in range(3):", "Body: print(i)", "Remember the indent."],
              ["Cabecera: for i in range(3):", "Cuerpo: print(i)", "Recuerda la indentación."],
              ["En-tête : for i in range(3) :", "Corps : print(i)", "Pense à l'indentation."],
              ["Başlık: for i in range(3):", "Gövde: print(i)", "Girintiyi unutma."]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 10,
    title: L("Level 10 · while loops", "Nivel 10 · Bucles while", "Niveau 10 · Boucles while", "Seviye 10 · while döngüleri"),
    lessons: [
      {
        id: "l10-while",
        xp: 60,
        title: L("while", "while", "while", "while"),
        blurb: L("Repeat while a condition is true", "Repetir mientras sea cierto", "Répéter tant que vrai", "Koşul doğruysa tekrarla"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "while repeats its block as long as the condition is True. It stops the moment the condition becomes False.",
              "while repite su bloque mientras la condición sea True. Para en cuanto sea False.",
              "while répète son bloc tant que la condition est True. Il s'arrête dès qu'elle devient False.",
              "while, koşul True olduğu sürece bloğunu tekrarlar. Koşul False olduğu anda durur."
            ),
            instruct: L(
              "When does a while loop stop repeating?",
              "¿Cuándo deja de repetir un while?",
              "Quand une boucle while s'arrête-t-elle ?",
              "while döngüsü ne zaman durur?"
            ),
            code: "while n > 0:\n    n = n - 1",
            options: L(
              ["When the condition becomes False", "After exactly 10 turns", "When you press a key", "Never"],
              ["Cuando la condición se hace False", "Tras exactamente 10 vueltas", "Cuando pulsas una tecla", "Nunca"],
              ["Quand la condition devient False", "Après exactement 10 tours", "Quand on appuie sur une touche", "Jamais"],
              ["Koşul False olunca", "Tam 10 turdan sonra", "Bir tuşa basınca", "Asla"]
            ),
            answer: 0,
            path: L("while checks the condition before each turn; False stops it.", "while revisa la condición antes de cada vuelta; False la para.", "while vérifie la condition avant chaque tour ; False l'arrête.", "while her turdan önce koşula bakar; False olunca durur."),
            tips: Tips(
              ["The condition is checked every turn.", "True → repeat again.", "False → stop."],
              ["La condición se revisa cada vuelta.", "True → repite.", "False → para."],
              ["La condition est vérifiée à chaque tour.", "True → on répète.", "False → stop."],
              ["Koşul her turda kontrol edilir.", "True → tekrar.", "False → dur."]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "To trace a while loop, follow the value each turn: 3 → 2 → 1 → 0, then the condition fails.",
              "Para seguir un while, mira el valor cada vuelta: 3 → 2 → 1 → 0, y la condición falla.",
              "Pour suivre un while, note la valeur à chaque tour : 3 → 2 → 1 → 0, puis la condition échoue.",
              "while'ı izlemek için değeri her turda takip et: 3 → 2 → 1 → 0, sonra koşul bozulur."
            ),
            instruct: L(
              "What is the final value of n after this code?",
              "¿Cuál es el valor final de n?",
              "Quelle est la valeur finale de n ?",
              "Bu koddan sonra n'nin son değeri nedir?"
            ),
            code: "n = 3\nwhile n > 0:\n    n = n - 1\nprint(n)",
            options: L(["3", "1", "0", "-1"], ["3", "1", "0", "-1"], ["3", "1", "0", "-1"], ["3", "1", "0", "-1"]),
            answer: 2,
            path: L("Loop stops when n becomes 0.", "El bucle para cuando n es 0.", "La boucle s'arrête quand n vaut 0.", "n 0 olunca döngü durur."),
            tips: Tips(
              ["Trace: 3 → 2 → 1 → 0.", "When n is 0, while is false.", "print shows 0."],
              ["Sigue: 3 → 2 → 1 → 0.", "Si n es 0, while es falso.", "print muestra 0."],
              ["Suis : 3 → 2 → 1 → 0.", "Si n vaut 0, while est faux.", "print affiche 0."],
              ["İzle: 3 → 2 → 1 → 0.", "n 0 iken while false.", "print 0 gösterir."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern:\nwhile condition:\n    change something (or the loop never ends!)",
              "Patrón:\nwhile condición:\n    cambia algo (¡o el bucle no termina!)",
              "Modèle :\nwhile condition :\n    change quelque chose (sinon la boucle ne finit jamais !)",
              "Kalıp:\nwhile koşul:\n    bir şeyi değiştir (yoksa döngü hiç bitmez!)"
            ),
            instruct: L(
              "Write a while loop that keeps running while n > 0 and decreases n by 1 each time.",
              "Escribe un while que siga mientras n > 0 y baje n en 1 cada vez.",
              "Écris un while qui continue tant que n > 0 et diminue n de 1.",
              "n > 0 olduğu sürece dönen ve her seferinde n'yi 1 azaltan while yaz."
            ),
            code: "n = 3",
            placeholder: "while n > 0:\n    n = n - 1",
            accept: [
              "while n > 0:\n    n = n - 1",
              "while n > 0:\n    n -= 1",
              "while n>0:\n    n = n - 1",
              "while n>0:\n    n -= 1",
            ],
            path: L("while n > 0:\n    n = n - 1", "while n > 0:\n    n = n - 1", "while n > 0:\n    n = n - 1", "while n > 0:\n    n = n - 1"),
            tips: Tips(
              ["Header: while n > 0:", "Body decreases n.", "n = n - 1 or n -= 1"],
              ["Cabecera: while n > 0:", "El cuerpo baja n.", "n = n - 1 o n -= 1"],
              ["En-tête : while n > 0 :", "Le corps diminue n.", "n = n - 1 ou n -= 1"],
              ["Başlık: while n > 0:", "Gövde n'yi azaltır.", "n = n - 1 veya n -= 1"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 11,
    title: L("Level 11 · Lists", "Nivel 11 · Listas", "Niveau 11 · Listes", "Seviye 11 · Listeler"),
    lessons: [
      {
        id: "l11-lists",
        xp: 65,
        title: L("Create, index, append", "Crear, indexar, append", "Créer, indexer, append", "Oluştur, indeksle, append"),
        blurb: L("Ordered collections", "Colecciones ordenadas", "Collections ordonnées", "Sıralı koleksiyonlar"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A list holds several values in square brackets. Positions (indexes) start at 0: the FIRST item is list[0].",
              "Una lista guarda varios valores entre corchetes. Las posiciones (índices) empiezan en 0: el PRIMERO es lista[0].",
              "Une liste contient plusieurs valeurs entre crochets. Les positions (index) commencent à 0 : le PREMIER est liste[0].",
              "Liste birçok değeri köşeli parantezde tutar. Konumlar (indeksler) 0'dan başlar: İLK eleman liste[0]'dır."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: 'pets = ["cat", "dog"]\nprint(pets[0])',
            options: L(["cat", "dog", "0", "Error"], ["cat", "dog", "0", "Error"], ["cat", "dog", "0", "Erreur"], ["cat", "dog", "0", "Hata"]),
            answer: 0,
            path: L("Index 0 is the first item → cat", "El índice 0 es el primero → cat", "L'index 0 est le premier → cat", "İndeks 0 ilk elemandır → cat"),
            tips: Tips(
              ["Counting starts at 0.", "pets[0] is the first item.", "Answer: cat"],
              ["Se cuenta desde 0.", "pets[0] es el primero.", "Respuesta: cat"],
              ["On compte depuis 0.", "pets[0] est le premier.", "Réponse : cat"],
              ["Sayım 0'dan başlar.", "pets[0] ilk elemandır.", "Cevap: cat"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "Negative indexes count from the end: list[-1] is the LAST item, list[-2] the one before it.",
              "Los índices negativos cuentan desde el final: lista[-1] es el ÚLTIMO, lista[-2] el anterior.",
              "Les index négatifs comptent depuis la fin : liste[-1] est le DERNIER, liste[-2] l'avant-dernier.",
              "Negatif indeksler sondan sayar: liste[-1] SON eleman, liste[-2] ondan önceki."
            ),
            instruct: L(
              "What does nums[-1] return?",
              "¿Qué devuelve nums[-1]?",
              "Que renvoie nums[-1] ?",
              "nums[-1] ne döner?"
            ),
            code: "nums = [10, 20, 30]",
            options: L(["10", "20", "30", "Error"], ["10", "20", "30", "Error"], ["10", "20", "30", "Erreur"], ["10", "20", "30", "Hata"]),
            answer: 2,
            path: L("[-1] is the last item → 30", "[-1] es el último → 30", "[-1] est le dernier → 30", "[-1] son eleman → 30"),
            tips: Tips(
              ["Negative indexes count from the end.", "-1 means last element.", "Last value is 30."],
              ["Negativos cuentan desde el final.", "-1 = último.", "El último es 30."],
              ["Négatifs depuis la fin.", "-1 = dernier.", "Le dernier est 30."],
              ["Negatif indeksler sondan sayar.", "-1 = son.", "Son değer 30."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern: fruits = [\"apple\", \"banana\"] — brackets around the list, quotes around each text.",
              "Patrón: fruits = [\"apple\", \"banana\"] — corchetes para la lista, comillas para cada texto.",
              "Modèle : fruits = [\"apple\", \"banana\"] — crochets pour la liste, guillemets pour chaque texte.",
              "Kalıp: fruits = [\"apple\", \"banana\"] — liste köşeli parantezde, her metin tırnak içinde."
            ),
            instruct: L(
              "Create a list fruits containing the strings apple and banana.",
              "Crea una lista fruits con apple y banana.",
              "Crée une liste fruits avec apple et banana.",
              "apple ve banana içeren fruits listesini oluştur."
            ),
            code: "",
            placeholder: 'fruits = ["apple", "banana"]',
            accept: ['fruits = ["apple", "banana"]', "fruits = ['apple', 'banana']", 'fruits=["apple","banana"]'],
            path: L('fruits = ["apple", "banana"]', 'fruits = ["apple", "banana"]', 'fruits = ["apple", "banana"]', 'fruits = ["apple", "banana"]'),
            tips: Tips(
              ["Lists use [ ].", "Strings need quotes.", 'fruits = ["apple", "banana"]'],
              ["Listas usan [ ].", "Strings con comillas.", 'fruits = ["apple", "banana"]'],
              ["Listes avec [ ].", "Chaînes entre guillemets.", 'fruits = ["apple", "banana"]'],
              ["Listeler [ ] kullanır.", "Stringler tırnaklı.", 'fruits = ["apple", "banana"]']
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 12,
    title: L("Level 12 · Tuples & sets", "Nivel 12 · Tuplas y sets", "Niveau 12 · Tuples et sets", "Seviye 12 · Tuple ve set"),
    lessons: [
      {
        id: "l12-tuple-set",
        xp: 70,
        title: L("tuple() · set()", "tuple() · set()", "tuple() · set()", "tuple() · set()"),
        blurb: L("Immutable sequences & unique values", "Inmutables y únicos", "Immutables et uniques", "Değişmez dizi ve benzersiz değerler"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Three bracket styles: list = [1, 2], tuple = (1, 2), set = {1, 2}. A tuple cannot be changed after creation.",
              "Tres estilos: lista = [1, 2], tupla = (1, 2), set = {1, 2}. La tupla no se puede cambiar después.",
              "Trois styles : liste = [1, 2], tuple = (1, 2), set = {1, 2}. Un tuple ne peut pas être modifié après création.",
              "Üç parantez stili: liste = [1, 2], tuple = (1, 2), set = {1, 2}. Tuple oluşturulduktan sonra değiştirilemez."
            ),
            instruct: L(
              "Which of these creates a tuple?",
              "¿Cuál crea una tupla?",
              "Lequel crée un tuple ?",
              "Hangisi bir tuple oluşturur?"
            ),
            code: "",
            options: L(["[1, 2]", "(1, 2)", "{1, 2}", '"1, 2"'], ["[1, 2]", "(1, 2)", "{1, 2}", '"1, 2"'], ["[1, 2]", "(1, 2)", "{1, 2}", '"1, 2"'], ["[1, 2]", "(1, 2)", "{1, 2}", '"1, 2"']),
            answer: 1,
            path: L("Tuples use round parentheses: (1, 2)", "Las tuplas usan paréntesis: (1, 2)", "Les tuples utilisent des parenthèses : (1, 2)", "Tuple yuvarlak parantez kullanır: (1, 2)"),
            tips: Tips(
              ["[ ] makes a list.", "{ } makes a set.", "( ) makes a tuple."],
              ["[ ] crea una lista.", "{ } crea un set.", "( ) crea una tupla."],
              ["[ ] crée une liste.", "{ } crée un set.", "( ) crée un tuple."],
              ["[ ] liste yapar.", "{ } set yapar.", "( ) tuple yapar."]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "Tuples are ordered and immutable (cannot change). Lists are ordered and mutable (can change).",
              "Las tuplas son ordenadas e inmutables. Las listas son ordenadas y mutables.",
              "Les tuples sont ordonnés et immuables. Les listes sont ordonnées et modifiables.",
              "Tuple'lar sıralı ve değiştirilemezdir. Listeler sıralı ve değiştirilebilirdir."
            ),
            instruct: L(
              "Which statement about tuples is correct?",
              "¿Qué afirmación sobre las tuplas es correcta?",
              "Quelle affirmation sur les tuples est correcte ?",
              "Tuple'lar hakkında hangisi doğru?"
            ),
            code: "point = (3, 4)",
            options: L(
              ["Tuples are mutable like lists", "Tuples use curly braces {}", "Tuples are ordered and immutable", "Tuples cannot hold numbers"],
              ["Las tuplas son mutables como las listas", "Las tuplas usan llaves {}", "Las tuplas son ordenadas e inmutables", "Las tuplas no pueden guardar números"],
              ["Les tuples sont mutables comme les listes", "Les tuples utilisent {}", "Les tuples sont ordonnés et immuables", "Les tuples ne peuvent pas contenir de nombres"],
              ["Tuple'lar listeler gibi değiştirilebilir", "Tuple'lar {} kullanır", "Tuple'lar sıralı ve değiştirilemez", "Tuple'lar sayı tutamaz"]
            ),
            answer: 2,
            path: L("Tuples are ordered and immutable.", "Las tuplas son ordenadas e inmutables.", "Les tuples sont ordonnés et immuables.", "Tuple'lar sıralı ve immutable'dır."),
            tips: Tips(
              ["Lists can change; tuples cannot.", "Tuples use ( ).", "Ordered + immutable."],
              ["Las listas cambian; las tuplas no.", "Usan ( ).", "Ordenadas + inmutables."],
              ["Les listes changent ; les tuples non.", "Avec ( ).", "Ordonnés + immuables."],
              ["Listeler değişir; tuple değişmez.", "( ) kullanır.", "Sıralı + immutable."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "A set stores unique values in curly braces: colors = {\"red\", \"blue\"}. No key:value pairs — just values.",
              "Un set guarda valores únicos entre llaves: colors = {\"red\", \"blue\"}. Sin pares clave:valor — solo valores.",
              "Un set stocke des valeurs uniques entre accolades : colors = {\"red\", \"blue\"}. Pas de clé:valeur — juste des valeurs.",
              "Set benzersiz değerleri süslü parantezde tutar: colors = {\"red\", \"blue\"}. Anahtar:değer yok — sadece değerler."
            ),
            instruct: L(
              "Create a set named tags with the values a and b as strings.",
              "Crea un set tags con los valores a y b (strings).",
              "Crée un set tags avec les valeurs a et b (chaînes).",
              "a ve b string değerleriyle tags adlı bir set oluştur."
            ),
            code: "",
            placeholder: 'tags = {"a", "b"}',
            accept: ['tags = {"a", "b"}', "tags = {'a', 'b'}", 'tags={"a","b"}', 'tags = set(["a", "b"])', "tags = set(['a', 'b'])"],
            path: L('tags = {"a", "b"}', 'tags = {"a", "b"}', 'tags = {"a", "b"}', 'tags = {"a", "b"}'),
            tips: Tips(
              ["Sets use { } with values.", "Strings need quotes.", 'tags = {"a", "b"}'],
              ["Sets usan { } con valores.", "Strings con comillas.", 'tags = {"a", "b"}'],
              ["Les sets utilisent { }.", "Chaînes entre guillemets.", 'tags = {"a", "b"}'],
              ["Set { } içinde değer tutar.", "Stringler tırnaklı.", 'tags = {"a", "b"}']
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 13,
    title: L("Level 13 · Dictionaries", "Nivel 13 · Diccionarios", "Niveau 13 · Dictionnaires", "Seviye 13 · Sözlükler"),
    lessons: [
      {
        id: "l13-dict",
        xp: 70,
        title: L("Key → value", "Clave → valor", "Clé → valeur", "Anahtar → değer"),
        blurb: L("Fast lookups by key", "Búsqueda rápida por clave", "Recherche rapide par clé", "Anahtarla hızlı erişim"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A dictionary stores key: value pairs in curly braces. You read a value with its key: user[\"name\"].",
              "Un diccionario guarda pares clave: valor entre llaves. Lees un valor con su clave: user[\"name\"].",
              "Un dictionnaire stocke des paires clé : valeur entre accolades. On lit une valeur avec sa clé : user[\"name\"].",
              "Sözlük anahtar: değer çiftlerini süslü parantezde tutar. Değeri anahtarla okursun: user[\"name\"]."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: 'user = {"name": "Ada"}\nprint(user["name"])',
            options: L(["Ada", "name", '{"name": "Ada"}', "Error"], ["Ada", "name", '{"name": "Ada"}', "Error"], ["Ada", "name", '{"name": "Ada"}', "Erreur"], ["Ada", "name", '{"name": "Ada"}', "Hata"]),
            answer: 0,
            path: L('The key "name" points to the value "Ada".', 'La clave "name" apunta a "Ada".', 'La clé "name" pointe vers "Ada".', '"name" anahtarı "Ada" değerini gösterir.'),
            tips: Tips(
              ["The key goes in the brackets.", "Python returns that key's value.", "Answer: Ada"],
              ["La clave va entre corchetes.", "Python devuelve su valor.", "Respuesta: Ada"],
              ["La clé va entre crochets.", "Python renvoie sa valeur.", "Réponse : Ada"],
              ["Anahtar köşeli paranteze yazılır.", "Python o anahtarın değerini döner.", "Cevap: Ada"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "Assigning to a key replaces its value: d[\"a\"] = 9 overwrites the old value of \"a\".",
              "Asignar a una clave reemplaza su valor: d[\"a\"] = 9 sobrescribe el valor anterior de \"a\".",
              "Affecter à une clé remplace sa valeur : d[\"a\"] = 9 écrase l'ancienne valeur de \"a\".",
              "Bir anahtara atama değerini değiştirir: d[\"a\"] = 9, \"a\"nın eski değerinin üzerine yazar."
            ),
            instruct: L(
              "What is printed?",
              "¿Qué se imprime?",
              "Qu'est-ce qui s'affiche ?",
              "Ne yazdırılır?"
            ),
            code: 'd = {"a": 1, "b": 2}\nd["a"] = 9\nprint(d["a"] + d["b"])',
            options: L(["3", "11", "12", "Error"], ["3", "11", "12", "Error"], ["3", "11", "12", "Erreur"], ["3", "11", "12", "Hata"]),
            answer: 1,
            path: L("a becomes 9, then 9 + 2 = 11", "a pasa a 9 → 9 + 2 = 11", "a devient 9 → 9 + 2 = 11", "a 9 olur → 9 + 2 = 11"),
            tips: Tips(
              ["First update key a to 9.", "Then add the two values.", "9 + 2 = 11"],
              ["Primero actualiza a a 9.", "Luego suma.", "9 + 2 = 11"],
              ["D'abord mets a à 9.", "Puis additionne.", "9 + 2 = 11"],
              ["Önce a'yı 9 yap.", "Sonra topla.", "9 + 2 = 11"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern: user = {\"key\": value} — key in quotes, colon, then the value.",
              "Patrón: user = {\"clave\": valor} — clave entre comillas, dos puntos, luego el valor.",
              "Modèle : user = {\"clé\": valeur} — clé entre guillemets, deux-points, puis la valeur.",
              "Kalıp: user = {\"anahtar\": değer} — anahtar tırnakta, iki nokta, sonra değer."
            ),
            instruct: L(
              'Create a dictionary user with the key "xp" set to 100.',
              'Crea un diccionario user con la clave "xp" = 100.',
              'Crée un dictionnaire user avec la clé "xp" = 100.',
              '"xp": 100 içeren user sözlüğünü oluştur.'
            ),
            code: "",
            placeholder: 'user = {"xp": 100}',
            accept: ['user = {"xp": 100}', "user = {'xp': 100}", 'user={"xp":100}'],
            path: L('user = {"xp": 100}', 'user = {"xp": 100}', 'user = {"xp": 100}', 'user = {"xp": 100}'),
            tips: Tips(
              ["Dicts use { key: value }.", 'Key "xp" in quotes.', 'user = {"xp": 100}'],
              ["Dicts usan { clave: valor }.", 'Clave "xp" entre comillas.', 'user = {"xp": 100}'],
              ["Dicts : { clé : valeur }.", 'Clé "xp" entre guillemets.', 'user = {"xp": 100}'],
              ["Sözlük { anahtar: değer }.", '"xp" tırnaklı.', 'user = {"xp": 100}']
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 14,
    title: L("Level 14 · Functions", "Nivel 14 · Funciones", "Niveau 14 · Fonctions", "Seviye 14 · Fonksiyonlar"),
    lessons: [
      {
        id: "l14-def",
        xp: 75,
        title: L("def + return", "def + return", "def + return", "def + return"),
        blurb: L("Reusable blocks of code", "Bloques reutilizables", "Blocs réutilisables", "Yeniden kullanılabilir kod"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A function is a named, reusable block of code. You create one with the def keyword.",
              "Una función es un bloque de código reutilizable con nombre. Se crea con la palabra def.",
              "Une fonction est un bloc de code réutilisable avec un nom. On la crée avec le mot def.",
              "Fonksiyon, isimli ve yeniden kullanılabilir bir kod bloğudur. def kelimesiyle oluşturulur."
            ),
            instruct: L(
              "Which keyword defines a function in Python?",
              "¿Qué palabra define una función en Python?",
              "Quel mot-clé définit une fonction en Python ?",
              "Python'da fonksiyon hangi kelimeyle tanımlanır?"
            ),
            code: "",
            options: L(["func", "def", "function", "make"], ["func", "def", "function", "make"], ["func", "def", "function", "make"], ["func", "def", "function", "make"]),
            answer: 1,
            path: L("def name():", "def nombre():", "def nom() :", "def isim():"),
            tips: Tips(
              ["It is a short keyword.", "Not function or func.", "It is def."],
              ["Es una palabra corta.", "No es function ni func.", "Es def."],
              ["C'est un mot court.", "Pas function ni func.", "C'est def."],
              ["Kısa bir kelimedir.", "function veya func değil.", "def'tir."]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "return sends a value back to the caller. add(2, 3) runs the body with a=2, b=3 and returns 5.",
              "return devuelve un valor. add(2, 3) ejecuta el cuerpo con a=2, b=3 y devuelve 5.",
              "return renvoie une valeur. add(2, 3) exécute le corps avec a=2, b=3 et renvoie 5.",
              "return değeri geri gönderir. add(2, 3), a=2 ve b=3 ile gövdeyi çalıştırır ve 5 döndürür."
            ),
            instruct: L(
              "What does print(add(2, 3)) show?",
              "¿Qué muestra print(add(2, 3))?",
              "Que montre print(add(2, 3)) ?",
              "print(add(2, 3)) ne gösterir?"
            ),
            code: "def add(a, b):\n    return a + b",
            options: L(["a + b", "5", "23", "None"], ["a + b", "5", "23", "None"], ["a + b", "5", "23", "None"], ["a + b", "5", "23", "None"]),
            answer: 1,
            path: L("return a + b with 2 and 3 → 5", "return a + b con 2 y 3 → 5", "return a + b avec 2 et 3 → 5", "return a + b → 2 ve 3 ile 5"),
            tips: Tips(
              ["a becomes 2, b becomes 3.", "2 + 3 is computed inside.", "Result printed is 5."],
              ["a es 2, b es 3.", "2 + 3 se calcula dentro.", "Se imprime 5."],
              ["a vaut 2, b vaut 3.", "2 + 3 est calculé dedans.", "On affiche 5."],
              ["a 2 olur, b 3 olur.", "2 + 3 içeride hesaplanır.", "Ekrana 5 gelir."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern:\ndef name(parameter):\n    return result",
              "Patrón:\ndef nombre(parámetro):\n    return resultado",
              "Modèle :\ndef nom(paramètre) :\n    return résultat",
              "Kalıp:\ndef isim(parametre):\n    return sonuç"
            ),
            instruct: L(
              "Write a function double(n) that returns n * 2.",
              "Escribe una función double(n) que devuelva n * 2.",
              "Écris une fonction double(n) qui renvoie n * 2.",
              "n * 2 döndüren double(n) fonksiyonunu yaz."
            ),
            code: "",
            placeholder: "def double(n):\n    return n * 2",
            accept: ["def double(n):\n    return n * 2", "def double(n):\n    return n*2", "def double(n):\n\treturn n * 2"],
            path: L("def double(n):\n    return n * 2", "def double(n):\n    return n * 2", "def double(n):\n    return n * 2", "def double(n):\n    return n * 2"),
            tips: Tips(
              ["Start with def double(n):", "Return a value from the body.", "return n * 2"],
              ["Empieza con def double(n):", "Devuelve un valor.", "return n * 2"],
              ["Commence par def double(n) :", "Renvoie une valeur.", "return n * 2"],
              ["def double(n): ile başla", "Gövdeden değer döndür.", "return n * 2"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 15,
    title: L("Level 15 · Modules", "Nivel 15 · Módulos", "Niveau 15 · Modules", "Seviye 15 · Modüller"),
    lessons: [
      {
        id: "l15-import",
        xp: 70,
        title: L("import", "import", "import", "import"),
        blurb: L("Reuse code from libraries", "Reutilizar código", "Réutiliser du code", "Kütüphaneden kod kullan"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "A module is a ready-made toolbox of code. You bring it in with the import keyword.",
              "Un módulo es una caja de herramientas lista. La traes con la palabra import.",
              "Un module est une boîte à outils prête. On l'amène avec le mot import.",
              "Modül hazır bir alet kutusudur. import kelimesiyle getirirsin."
            ),
            instruct: L(
              "Which line correctly imports the math module?",
              "¿Qué línea importa correctamente el módulo math?",
              "Quelle ligne importe correctement le module math ?",
              "math modülünü doğru import eden satır hangisi?"
            ),
            code: "",
            options: L(
              ["include math", "using math", "import math", "from math import"],
              ["include math", "using math", "import math", "from math import"],
              ["include math", "using math", "import math", "from math import"],
              ["include math", "using math", "import math", "from math import"]
            ),
            answer: 2,
            path: L("import math", "import math", "import math", "import math"),
            tips: Tips(
              ["Python uses the import keyword.", "Not include or using.", "import math"],
              ["Python usa la palabra import.", "No include ni using.", "import math"],
              ["Python utilise le mot import.", "Pas include ni using.", "import math"],
              ["Python import kelimesini kullanır.", "include / using değil.", "import math"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "After importing, use module.tool — e.g. math.sqrt(9) gives the square root of 9 as a float.",
              "Tras importar, usa módulo.herramienta — p. ej. math.sqrt(9) da la raíz cuadrada de 9 como float.",
              "Après l'import, utilise module.outil — p. ex. math.sqrt(9) donne la racine carrée de 9 en float.",
              "Import ettikten sonra modül.araç kullan — örn. math.sqrt(9), 9'un karekökünü float olarak verir."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: "import math\nprint(math.sqrt(9))",
            options: L(["3.0", "81", "9", "Error"], ["3.0", "81", "9", "Error"], ["3.0", "81", "9", "Erreur"], ["3.0", "81", "9", "Hata"]),
            answer: 0,
            path: L("sqrt(9) = 3.0 (square root, returned as float)", "sqrt(9) = 3.0 (raíz cuadrada, como float)", "sqrt(9) = 3.0 (racine carrée, en float)", "sqrt(9) = 3.0 (karekök, float döner)"),
            tips: Tips(
              ["sqrt means square root.", "The square root of 9 is 3.", "It comes back as 3.0 (float)."],
              ["sqrt es raíz cuadrada.", "La raíz de 9 es 3.", "Vuelve como 3.0 (float)."],
              ["sqrt = racine carrée.", "La racine de 9 est 3.", "Renvoyé comme 3.0 (float)."],
              ["sqrt karekök demektir.", "9'un karekökü 3.", "3.0 (float) olarak döner."]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern: import module_name",
              "Patrón: import nombre_del_módulo",
              "Modèle : import nom_du_module",
              "Kalıp: import modül_adı"
            ),
            instruct: L(
              "Write the line that imports the random module.",
              "Escribe la línea que importa el módulo random.",
              "Écris la ligne qui importe le module random.",
              "random modülünü import eden satırı yaz."
            ),
            code: "",
            placeholder: "import ...",
            accept: ["import random"],
            path: L("import random", "import random", "import random", "import random"),
            tips: Tips(
              ["Keyword first: import", "Then the module name.", "import random"],
              ["Primero: import", "Luego el nombre del módulo.", "import random"],
              ["D'abord : import", "Puis le nom du module.", "import random"],
              ["Önce: import", "Sonra modül adı.", "import random"]
            ),
          }),
        ],
      },
    ],
  },
  {
    id: 16,
    title: L("Level 16 · Exceptions", "Nivel 16 · Excepciones", "Niveau 16 · Exceptions", "Seviye 16 · Hatalar (exceptions)"),
    lessons: [
      {
        id: "l16-try",
        xp: 80,
        title: L("try / except", "try / except", "try / except", "try / except"),
        blurb: L("Handle errors safely", "Manejar errores", "Gérer les erreurs", "Hataları güvenle yakala"),
        steps: [
          step({
            type: "mcq",
            note: L(
              "Risky code goes under try. If it crashes, Python jumps to except instead of stopping the program.",
              "El código arriesgado va bajo try. Si falla, Python salta a except en vez de parar el programa.",
              "Le code risqué va sous try. S'il plante, Python saute à except au lieu d'arrêter le programme.",
              "Riskli kod try altına yazılır. Çökerse Python programı durdurmak yerine except'e atlar."
            ),
            instruct: L(
              "Which pair of keywords catches an error so the program can continue?",
              "¿Qué par de palabras atrapa un error para que el programa continúe?",
              "Quelle paire de mots-clés attrape une erreur pour que le programme continue ?",
              "Programın devam edebilmesi için hatayı hangi ikili yakalar?"
            ),
            code: "",
            options: L(
              ["check / catch", "try / except", "test / handle", "if / error"],
              ["check / catch", "try / except", "test / handle", "if / error"],
              ["check / catch", "try / except", "test / handle", "if / error"],
              ["check / catch", "try / except", "test / handle", "if / error"]
            ),
            answer: 1,
            path: L("Python uses try / except.", "Python usa try / except.", "Python utilise try / except.", "Python try / except kullanır."),
            tips: Tips(
              ["Not the same words as other languages.", "Python's pair starts with try.", "try / except"],
              ["No son las palabras de otros lenguajes.", "En Python empieza con try.", "try / except"],
              ["Pas les mots d'autres langages.", "En Python ça commence par try.", "try / except"],
              ["Başka dillerdeki kelimeler değil.", "Python'da try ile başlar.", "try / except"]
            ),
          }),
          step({
            type: "mcq",
            note: L(
              "int(\"abc\") crashes because abc is not a number. Inside try, the crash makes the except block run.",
              "int(\"abc\") falla porque abc no es un número. Dentro de try, el fallo hace correr el bloque except.",
              "int(\"abc\") plante car abc n'est pas un nombre. Dans try, le plantage fait tourner le bloc except.",
              "int(\"abc\") çöker çünkü abc sayı değildir. try içindeyken bu çökme except bloğunu çalıştırır."
            ),
            instruct: L(
              "What does this code print?",
              "¿Qué imprime este código?",
              "Qu'affiche ce code ?",
              "Bu kod ne yazdırır?"
            ),
            code: 'try:\n    n = int("abc")\nexcept:\n    print("oops")',
            options: L(["abc", "oops", "Nothing", "The program crashes"], ["abc", "oops", "Nada", "El programa falla"], ["abc", "oops", "Rien", "Le programme plante"], ["abc", "oops", "Hiçbir şey", "Program çöker"]),
            answer: 1,
            path: L('int("abc") fails → except runs → oops', 'int("abc") falla → corre except → oops', 'int("abc") échoue → except s\'exécute → oops', 'int("abc") başarısız → except çalışır → oops'),
            tips: Tips(
              ['Can "abc" become a number? No.', "The error is caught by except.", "Printed: oops"],
              ['¿"abc" puede ser número? No.', "except atrapa el error.", "Se imprime: oops"],
              ['"abc" peut-il devenir un nombre ? Non.', "except attrape l'erreur.", "Affiché : oops"],
              ['"abc" sayı olabilir mi? Hayır.', "Hatayı except yakalar.", "Yazdırılan: oops"]
            ),
          }),
          step({
            type: "write",
            note: L(
              "Pattern:\ntry:\n    risky code\nexcept:\n    what to do on error",
              "Patrón:\ntry:\n    código arriesgado\nexcept:\n    qué hacer si hay error",
              "Modèle :\ntry :\n    code risqué\nexcept :\n    quoi faire en cas d'erreur",
              "Kalıp:\ntry:\n    riskli kod\nexcept:\n    hata olursa yapılacak"
            ),
            instruct: L(
              "Write a try/except that prints fail if int(x) raises an error. Use 4-space indents.",
              "Escribe un try/except que imprima fail si int(x) falla. Indentación de 4 espacios.",
              "Écris un try/except qui affiche fail si int(x) échoue. Indentation 4 espaces.",
              "int(x) hata verirse fail yazdıran try/except yaz. 4 boşluk girinti kullan."
            ),
            code: 'x = "hi"',
            placeholder: 'try:\n    int(x)\nexcept:\n    print("fail")',
            accept: [
              'try:\n    int(x)\nexcept:\n    print("fail")',
              "try:\n    int(x)\nexcept:\n    print('fail')",
              'try:\n    int(x)\nexcept Exception:\n    print("fail")',
              'try:\n    int(x)\nexcept ValueError:\n    print("fail")',
            ],
            path: L(
              'try:\n    int(x)\nexcept:\n    print("fail")',
              'try:\n    int(x)\nexcept:\n    print("fail")',
              'try:\n    int(x)\nexcept:\n    print("fail")',
              'try:\n    int(x)\nexcept:\n    print("fail")'
            ),
            tips: Tips(
              ["Start with try:", "Put int(x) inside try.", 'except: then print("fail")'],
              ["Empieza con try:", "Pon int(x) dentro de try.", 'except: luego print("fail")'],
              ["Commence par try :", "Mets int(x) dans try.", 'except : puis print("fail")'],
              ["try: ile başla", "int(x) try içinde", 'except: sonra print("fail")']
            ),
          }),
        ],
      },
    ],
  },
];

export const levels = [...coreLevels, ...bonusLevels];

export const lessons = levels.flatMap((lvl) =>
  lvl.lessons.map((lesson) => ({ ...lesson, levelId: lvl.id }))
);
