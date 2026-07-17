/** Step-by-step spoken/read lesson scripts for Pyro (4 languages). */
const L = (en, es, fr, tr) => ({ en, es, fr, tr });

const scripts = {
  "l1-print": L(
    "1) print shows a message on the screen.\nExample: print(\"Hi\")\n\n2) Rules: write print in lowercase, put text in quotes, and use parentheses.\nExample: print(\"Hello\")\n\n3) What you see on screen is only the text — not the quotes.",
    "1) print muestra un mensaje en pantalla.\nEjemplo: print(\"Hi\")\n\n2) Reglas: print en minúsculas, texto entre comillas y paréntesis.\nEjemplo: print(\"Hello\")\n\n3) En pantalla ves solo el texto — no las comillas.",
    "1) print affiche un message à l'écran.\nExemple : print(\"Hi\")\n\n2) Règles : print en minuscules, texte entre guillemets, et parenthèses.\nExemple : print(\"Hello\")\n\n3) À l'écran tu vois seulement le texte — pas les guillemets.",
    "1) print ekrana bir mesaj gösterir.\nÖrnek: print(\"Hi\")\n\n2) Kurallar: print küçük harf, metin tırnak içinde, parantez kullan.\nÖrnek: print(\"Hello\")\n\n3) Ekranda sadece metni görürsün — tırnakları değil."
  ),
  "l1-comments": L(
    "1) A comment is a note for humans. Python skips it.\n\n2) Start the line with #.\nExample: # this is a note\n\n3) You can also turn off a line of code with #.\nExample: # print(\"run\")",
    "1) Un comentario es una nota para humanos. Python lo salta.\n\n2) Empieza la línea con #.\nEjemplo: # esto es una nota\n\n3) También puedes apagar una línea con #.\nEjemplo: # print(\"run\")",
    "1) Un commentaire est une note pour les humains. Python le saute.\n\n2) Commence la ligne par #.\nExemple : # ceci est une note\n\n3) Tu peux aussi couper une ligne avec #.\nExemple : # print(\"run\")",
    "1) Yorum, insanlar için bir nottur. Python onu atlar.\n\n2) Satırı # ile başlat.\nÖrnek: # bu bir not\n\n3) Bir kod satırını # ile kapatabilirsin.\nÖrnek: # print(\"run\")"
  ),
  "l2-assign": L(
    "1) A variable stores a value.\nExample: age = 15\n\n2) Left side is the name, right side is the value.\nExample: name = \"Pyro\"\n\n3) You can update a variable using its old value.\nExample: n = 4\nn = n + 2\nNow n is 6.",
    "1) Una variable guarda un valor.\nEjemplo: age = 15\n\n2) Izquierda = nombre, derecha = valor.\nEjemplo: name = \"Pyro\"\n\n3) Puedes actualizarla con su valor anterior.\nEjemplo: n = 4\nn = n + 2\nAhora n es 6.",
    "1) Une variable stocke une valeur.\nExemple : age = 15\n\n2) Gauche = nom, droite = valeur.\nExemple : name = \"Pyro\"\n\n3) Tu peux la mettre à jour avec son ancienne valeur.\nExemple : n = 4\nn = n + 2\nMaintenant n vaut 6.",
    "1) Değişken bir değer saklar.\nÖrnek: age = 15\n\n2) Sol = isim, sağ = değer.\nÖrnek: name = \"Pyro\"\n\n3) Eski değeriyle güncelleyebilirsin.\nÖrnek: n = 4\nn = n + 2\nŞimdi n 6'dır."
  ),
  "l3-types": L(
    "1) Every value has a type.\nint = whole number → 7\nfloat = decimal → 7.5\nstr = text in quotes → \"7\"\nbool = True or False\n\n2) Quotes make text, even if it looks like a number.\nExample: type(\"7\") → str\n\n3) True and False start with a capital letter, no quotes.\nExample: ok = True",
    "1) Cada valor tiene un tipo.\nint = entero → 7\nfloat = decimal → 7.5\nstr = texto entre comillas → \"7\"\nbool = True o False\n\n2) Las comillas hacen texto, aunque parezca número.\nEjemplo: type(\"7\") → str\n\n3) True y False empiezan con mayúscula, sin comillas.\nEjemplo: ok = True",
    "1) Chaque valeur a un type.\nint = entier → 7\nfloat = décimal → 7.5\nstr = texte entre guillemets → \"7\"\nbool = True ou False\n\n2) Les guillemets font du texte, même si ça ressemble à un nombre.\nExemple : type(\"7\") → str\n\n3) True et False commencent par une majuscule, sans guillemets.\nExemple : ok = True",
    "1) Her değerin bir tipi vardır.\nint = tam sayı → 7\nfloat = ondalık → 7.5\nstr = tırnaklı metin → \"7\"\nbool = True veya False\n\n2) Tırnak metin yapar, sayı gibi görünse bile.\nÖrnek: type(\"7\") → str\n\n3) True ve False büyük harfle başlar, tırnaksız.\nÖrnek: ok = True"
  ),
  "l4-math": L(
    "1) Basic math:\n+ add → 3 + 2 = 5\n- subtract → 5 - 2 = 3\n* multiply → 3 * 4 = 12\n/ divide → 8 / 2 = 4\n\n2) ** means power.\nExample: 2 ** 5 = 32\n\n3) % means remainder, not percent.\nExample: 17 % 5 = 2\nBecause 5 fits 3 times in 17, and 2 is left.",
    "1) Mate básica:\n+ sumar → 3 + 2 = 5\n- restar → 5 - 2 = 3\n* multiplicar → 3 * 4 = 12\n/ dividir → 8 / 2 = 4\n\n2) ** es potencia.\nEjemplo: 2 ** 5 = 32\n\n3) % es el resto, no porcentaje.\nEjemplo: 17 % 5 = 2\nPorque 5 cabe 3 veces en 17 y sobra 2.",
    "1) Maths de base :\n+ addition → 3 + 2 = 5\n- soustraction → 5 - 2 = 3\n* multiplication → 3 * 4 = 12\n/ division → 8 / 2 = 4\n\n2) ** = puissance.\nExemple : 2 ** 5 = 32\n\n3) % = reste, pas pourcentage.\nExemple : 17 % 5 = 2\nCar 5 rentre 3 fois dans 17, il reste 2.",
    "1) Temel matematik:\n+ toplama → 3 + 2 = 5\n- çıkarma → 5 - 2 = 3\n* çarpma → 3 * 4 = 12\n/ bölme → 8 / 2 = 4\n\n2) ** üs demektir.\nÖrnek: 2 ** 5 = 32\n\n3) % kalan demektir, yüzde değil.\nÖrnek: 17 % 5 = 2\nÇünkü 17'de 3 tane 5 var, 2 artar."
  ),
  "l5-strings": L(
    "1) Strings are text. len counts characters.\nExample: len(\"cat\") → 3\n\n2) .upper() makes letters CAPITAL.\nExample: \"py\".upper() → \"PY\"\n\n3) An f-string puts a variable into text.\nExample: name = \"Ada\"\nprint(f\"Hello {name}\")\n→ Hello Ada",
    "1) Los strings son texto. len cuenta caracteres.\nEjemplo: len(\"cat\") → 3\n\n2) .upper() pone MAYÚSCULAS.\nEjemplo: \"py\".upper() → \"PY\"\n\n3) Un f-string mete una variable en el texto.\nEjemplo: name = \"Ada\"\nprint(f\"Hello {name}\")\n→ Hello Ada",
    "1) Les chaînes sont du texte. len compte les caractères.\nExemple : len(\"cat\") → 3\n\n2) .upper() met en MAJUSCULES.\nExemple : \"py\".upper() → \"PY\"\n\n3) Un f-string met une variable dans le texte.\nExemple : name = \"Ada\"\nprint(f\"Hello {name}\")\n→ Hello Ada",
    "1) Stringler metindir. len karakter sayar.\nÖrnek: len(\"cat\") → 3\n\n2) .upper() harfleri BÜYÜK yapar.\nÖrnek: \"py\".upper() → \"PY\"\n\n3) f-string metne değişken ekler.\nÖrnek: name = \"Ada\"\nprint(f\"Hello {name}\")\n→ Hello Ada"
  ),
  "l6-input": L(
    "1) input() asks the user to type something.\nExample: age = input(\"Age? \")\n\n2) Important: input always returns text (str), even if they type digits.\nExample: user types 12 → age is the text \"12\"\n\n3) To do math, convert with int().\nExample: n = \"42\"\nn = int(n)\nNow n is the number 42.",
    "1) input() pide al usuario que escriba.\nEjemplo: age = input(\"Age? \")\n\n2) Importante: input siempre da texto (str), aunque escriban dígitos.\nEjemplo: escribe 12 → age es el texto \"12\"\n\n3) Para hacer mate, convierte con int().\nEjemplo: n = \"42\"\nn = int(n)\nAhora n es el número 42.",
    "1) input() demande à l'utilisateur d'écrire.\nExemple : age = input(\"Age? \")\n\n2) Important : input renvoie toujours du texte (str), même avec des chiffres.\nExemple : il tape 12 → age est le texte \"12\"\n\n3) Pour faire des maths, convertis avec int().\nExemple : n = \"42\"\nn = int(n)\nMaintenant n est le nombre 42.",
    "1) input() kullanıcıdan bir şey yazmasını ister.\nÖrnek: age = input(\"Age? \")\n\n2) Önemli: input her zaman metin (str) döner, rakam yazılsa bile.\nÖrnek: kullanıcı 12 yazar → age \"12\" metnidir\n\n3) Matematik için int() ile çevir.\nÖrnek: n = \"42\"\nn = int(n)\nŞimdi n sayı 42'dir."
  ),
  "l7-if": L(
    "1) if runs a block only when the condition is True.\nExample:\nx = 10\nif x > 5:\n    print(\"big\")\n→ big\n\n2) Two rules: end with a colon :, and indent the next line.\n\n3) Pattern:\nif ready:\n    print(\"ok\")",
    "1) if corre un bloque solo si la condición es True.\nEjemplo:\nx = 10\nif x > 5:\n    print(\"big\")\n→ big\n\n2) Dos reglas: termina con : e indenta la siguiente línea.\n\n3) Patrón:\nif ready:\n    print(\"ok\")",
    "1) if exécute un bloc seulement si la condition est True.\nExemple :\nx = 10\nif x > 5:\n    print(\"big\")\n→ big\n\n2) Deux règles : finir par :, et indenter la ligne suivante.\n\n3) Modèle :\nif ready:\n    print(\"ok\")",
    "1) if, koşul True ise bloğu çalıştırır.\nÖrnek:\nx = 10\nif x > 5:\n    print(\"big\")\n→ big\n\n2) İki kural: iki nokta : ile bitir, sonraki satırı girintile.\n\n3) Kalıp:\nif ready:\n    print(\"ok\")"
  ),
  "l8-bool": L(
    "1) and is True only if BOTH sides are True.\nExample: True and False → False\n\n2) or is True if AT LEAST ONE side is True.\nExample: False or True → True\n\n3) Combine with comparisons.\nExample: age = 20\nhas_id = True\nage >= 18 and has_id → True",
    "1) and es True solo si AMBOS lados son True.\nEjemplo: True and False → False\n\n2) or es True si AL MENOS UNO es True.\nEjemplo: False or True → True\n\n3) Combina con comparaciones.\nEjemplo: age = 20\nhas_id = True\nage >= 18 and has_id → True",
    "1) and est True seulement si LES DEUX côtés sont True.\nExemple : True and False → False\n\n2) or est True si AU MOINS UN côté est True.\nExemple : False or True → True\n\n3) Combine avec des comparaisons.\nExemple : age = 20\nhas_id = True\nage >= 18 and has_id → True",
    "1) and yalnızca İKİ taraf da True ise True'dur.\nÖrnek: True and False → False\n\n2) or EN AZ BİR taraf True ise True'dur.\nÖrnek: False or True → True\n\n3) Karşılaştırmalarla birleştir.\nÖrnek: age = 20\nhas_id = True\nage >= 18 and has_id → True"
  ),
  "l9-for": L(
    "1) for repeats code. range makes numbers.\nExample: range(3) → 0, 1, 2\n(It starts at 0 and stops BEFORE 3.)\n\n2) range(start, stop) begins at start, stops before stop.\nExample: range(1, 4) → 1, 2, 3\n\n3) Pattern:\nfor i in range(3):\n    print(i)",
    "1) for repite código. range crea números.\nEjemplo: range(3) → 0, 1, 2\n(Empieza en 0 y para ANTES de 3.)\n\n2) range(inicio, fin) empieza en inicio, para antes de fin.\nEjemplo: range(1, 4) → 1, 2, 3\n\n3) Patrón:\nfor i in range(3):\n    print(i)",
    "1) for répète du code. range crée des nombres.\nExemple : range(3) → 0, 1, 2\n(Ça commence à 0 et s'arrête AVANT 3.)\n\n2) range(début, fin) commence à début, s'arrête avant fin.\nExemple : range(1, 4) → 1, 2, 3\n\n3) Modèle :\nfor i in range(3):\n    print(i)",
    "1) for kodu tekrarlar. range sayı üretir.\nÖrnek: range(3) → 0, 1, 2\n(0'dan başlar, 3'ten ÖNCE durur.)\n\n2) range(başla, dur) başla'dan başlar, dur'dan önce biter.\nÖrnek: range(1, 4) → 1, 2, 3\n\n3) Kalıp:\nfor i in range(3):\n    print(i)"
  ),
  "l10-while": L(
    "1) while repeats while the condition is True. It stops when the condition becomes False.\n\n2) Trace the value each turn.\nExample:\nn = 3\nwhile n > 0:\n    n = n - 1\n→ n goes 3, 2, 1, then 0. Final n is 0.\n\n3) Pattern:\nwhile n > 0:\n    n = n - 1\n(Always change something inside, or it never ends!)",
    "1) while repite mientras la condición sea True. Para cuando sea False.\n\n2) Sigue el valor cada vuelta.\nEjemplo:\nn = 3\nwhile n > 0:\n    n = n - 1\n→ n va 3, 2, 1, luego 0. Final = 0.\n\n3) Patrón:\nwhile n > 0:\n    n = n - 1\n(¡Cambia algo dentro o no termina!)",
    "1) while répète tant que la condition est True. Il s'arrête quand elle devient False.\n\n2) Suis la valeur à chaque tour.\nExemple :\nn = 3\nwhile n > 0:\n    n = n - 1\n→ n fait 3, 2, 1, puis 0. Final = 0.\n\n3) Modèle :\nwhile n > 0:\n    n = n - 1\n(Change quelque chose dedans, sinon ça ne finit jamais !)",
    "1) while, koşul True olduğu sürece tekrarlar. False olunca durur.\n\n2) Değeri her turda izle.\nÖrnek:\nn = 3\nwhile n > 0:\n    n = n - 1\n→ n: 3, 2, 1, sonra 0. Son değer 0.\n\n3) Kalıp:\nwhile n > 0:\n    n = n - 1\n(İçerde bir şeyi değiştir, yoksa hiç bitmez!)"
  ),
  "l11-lists": L(
    "1) A list holds values in square brackets. Indexes start at 0.\nExample: pets = [\"cat\", \"dog\"]\npets[0] → \"cat\"\n\n2) [-1] is the last item.\nExample: nums = [10, 20, 30]\nnums[-1] → 30\n\n3) Pattern:\nfruits = [\"apple\", \"banana\"]",
    "1) Una lista guarda valores entre corchetes. Los índices empiezan en 0.\nEjemplo: pets = [\"cat\", \"dog\"]\npets[0] → \"cat\"\n\n2) [-1] es el último.\nEjemplo: nums = [10, 20, 30]\nnums[-1] → 30\n\n3) Patrón:\nfruits = [\"apple\", \"banana\"]",
    "1) Une liste contient des valeurs entre crochets. Les index commencent à 0.\nExemple : pets = [\"cat\", \"dog\"]\npets[0] → \"cat\"\n\n2) [-1] est le dernier.\nExemple : nums = [10, 20, 30]\nnums[-1] → 30\n\n3) Modèle :\nfruits = [\"apple\", \"banana\"]",
    "1) Liste değerleri köşeli parantezde tutar. İndeksler 0'dan başlar.\nÖrnek: pets = [\"cat\", \"dog\"]\npets[0] → \"cat\"\n\n2) [-1] son elemandır.\nÖrnek: nums = [10, 20, 30]\nnums[-1] → 30\n\n3) Kalıp:\nfruits = [\"apple\", \"banana\"]"
  ),
  "l12-tuple-set": L(
    "1) Three bracket styles:\nlist = [1, 2]\ntuple = (1, 2)\nset = {1, 2}\n\n2) A tuple is ordered and cannot be changed.\nExample: point = (3, 4)\n\n3) A set stores unique values.\nExample: tags = {\"a\", \"b\"}",
    "1) Tres estilos:\nlista = [1, 2]\ntupla = (1, 2)\nset = {1, 2}\n\n2) Una tupla es ordenada y no se cambia.\nEjemplo: point = (3, 4)\n\n3) Un set guarda valores únicos.\nEjemplo: tags = {\"a\", \"b\"}",
    "1) Trois styles :\nliste = [1, 2]\ntuple = (1, 2)\nset = {1, 2}\n\n2) Un tuple est ordonné et ne se change pas.\nExemple : point = (3, 4)\n\n3) Un set stocke des valeurs uniques.\nExemple : tags = {\"a\", \"b\"}",
    "1) Üç stil:\nliste = [1, 2]\ntuple = (1, 2)\nset = {1, 2}\n\n2) Tuple sıralıdır ve değiştirilemez.\nÖrnek: point = (3, 4)\n\n3) Set benzersiz değerleri tutar.\nÖrnek: tags = {\"a\", \"b\"}"
  ),
  "l13-dict": L(
    "1) A dictionary stores key: value pairs.\nExample: user = {\"name\": \"Ada\"}\n\n2) Read a value with its key.\nExample: user[\"name\"] → \"Ada\"\n\n3) Assigning to a key updates it.\nExample:\nd = {\"a\": 1, \"b\": 2}\nd[\"a\"] = 9\nd[\"a\"] + d[\"b\"] → 11",
    "1) Un diccionario guarda pares clave: valor.\nEjemplo: user = {\"name\": \"Ada\"}\n\n2) Lees el valor con su clave.\nEjemplo: user[\"name\"] → \"Ada\"\n\n3) Asignar a una clave la actualiza.\nEjemplo:\nd = {\"a\": 1, \"b\": 2}\nd[\"a\"] = 9\nd[\"a\"] + d[\"b\"] → 11",
    "1) Un dictionnaire stocke des paires clé : valeur.\nExemple : user = {\"name\": \"Ada\"}\n\n2) On lit la valeur avec sa clé.\nExemple : user[\"name\"] → \"Ada\"\n\n3) Affecter à une clé la met à jour.\nExemple :\nd = {\"a\": 1, \"b\": 2}\nd[\"a\"] = 9\nd[\"a\"] + d[\"b\"] → 11",
    "1) Sözlük anahtar: değer çiftleri tutar.\nÖrnek: user = {\"name\": \"Ada\"}\n\n2) Değeri anahtarla okursun.\nÖrnek: user[\"name\"] → \"Ada\"\n\n3) Anahtara atama onu günceller.\nÖrnek:\nd = {\"a\": 1, \"b\": 2}\nd[\"a\"] = 9\nd[\"a\"] + d[\"b\"] → 11"
  ),
  "l14-def": L(
    "1) A function is reusable code. Create it with def.\nExample: def greet():\n\n2) return sends a value back.\nExample:\ndef add(a, b):\n    return a + b\nadd(2, 3) → 5\n\n3) Pattern:\ndef double(n):\n    return n * 2",
    "1) Una función es código reutilizable. Créala con def.\nEjemplo: def greet():\n\n2) return devuelve un valor.\nEjemplo:\ndef add(a, b):\n    return a + b\nadd(2, 3) → 5\n\n3) Patrón:\ndef double(n):\n    return n * 2",
    "1) Une fonction est du code réutilisable. Crée-la avec def.\nExemple : def greet():\n\n2) return renvoie une valeur.\nExemple :\ndef add(a, b):\n    return a + b\nadd(2, 3) → 5\n\n3) Modèle :\ndef double(n):\n    return n * 2",
    "1) Fonksiyon yeniden kullanılabilir koddur. def ile oluştur.\nÖrnek: def greet():\n\n2) return değeri geri gönderir.\nÖrnek:\ndef add(a, b):\n    return a + b\nadd(2, 3) → 5\n\n3) Kalıp:\ndef double(n):\n    return n * 2"
  ),
  "l15-import": L(
    "1) A module is a ready toolbox. Bring it with import.\nExample: import math\n\n2) Then use module.tool.\nExample: math.sqrt(9) → 3.0\n\n3) Pattern:\nimport random",
    "1) Un módulo es una caja de herramientas. Tráelo con import.\nEjemplo: import math\n\n2) Luego usa módulo.herramienta.\nEjemplo: math.sqrt(9) → 3.0\n\n3) Patrón:\nimport random",
    "1) Un module est une boîte à outils. Amène-le avec import.\nExemple : import math\n\n2) Ensuite utilise module.outil.\nExemple : math.sqrt(9) → 3.0\n\n3) Modèle :\nimport random",
    "1) Modül hazır bir alet kutusudur. import ile getir.\nÖrnek: import math\n\n2) Sonra modül.araç kullan.\nÖrnek: math.sqrt(9) → 3.0\n\n3) Kalıp:\nimport random"
  ),
  "l16-try": L(
    "1) Risky code can crash. Put it under try. If it fails, except runs.\n\n2) Example:\ntry:\n    n = int(\"abc\")\nexcept:\n    print(\"oops\")\n→ oops\n\n3) Pattern:\ntry:\n    int(x)\nexcept:\n    print(\"fail\")",
    "1) El código arriesgado puede fallar. Ponlo bajo try. Si falla, corre except.\n\n2) Ejemplo:\ntry:\n    n = int(\"abc\")\nexcept:\n    print(\"oops\")\n→ oops\n\n3) Patrón:\ntry:\n    int(x)\nexcept:\n    print(\"fail\")",
    "1) Le code risqué peut planter. Mets-le sous try. S'il échoue, except s'exécute.\n\n2) Exemple :\ntry:\n    n = int(\"abc\")\nexcept:\n    print(\"oops\")\n→ oops\n\n3) Modèle :\ntry:\n    int(x)\nexcept:\n    print(\"fail\")",
    "1) Riskli kod çökebilir. try altına yaz. Başarısız olursa except çalışır.\n\n2) Örnek:\ntry:\n    n = int(\"abc\")\nexcept:\n    print(\"oops\")\n→ oops\n\n3) Kalıp:\ntry:\n    int(x)\nexcept:\n    print(\"fail\")"
  ),
  "l17-slice": L(
    "1) A slice takes a piece: list[start:stop]. It includes start, stops BEFORE stop.\n\n2) Example:\nnums = [10, 20, 30, 40]\nnums[1:3] → [20, 30]\n\n3) First two items:\nnums[:2] or nums[0:2]",
    "1) Un slice toma un trozo: lista[inicio:fin]. Incluye inicio, para ANTES de fin.\n\n2) Ejemplo:\nnums = [10, 20, 30, 40]\nnums[1:3] → [20, 30]\n\n3) Los dos primeros:\nnums[:2] o nums[0:2]",
    "1) Un slice prend un morceau : liste[début:fin]. Inclut début, s'arrête AVANT fin.\n\n2) Exemple :\nnums = [10, 20, 30, 40]\nnums[1:3] → [20, 30]\n\n3) Les deux premiers :\nnums[:2] ou nums[0:2]",
    "1) Dilim parça alır: liste[başla:dur]. Başlangıç dahil, dur'dan ÖNCE biter.\n\n2) Örnek:\nnums = [10, 20, 30, 40]\nnums[1:3] → [20, 30]\n\n3) İlk iki eleman:\nnums[:2] veya nums[0:2]"
  ),
  "l17-str-slice": L(
    "1) Strings slice like lists.\nExample: \"Python\"[0:3] → \"Pyt\"\n\n2) Negative start counts from the end.\nExample: s = \"Python\"\ns[-3:] → \"hon\"\n(last 3 characters)\n\n3) Pattern: s[-3:]",
    "1) Los strings se cortan como las listas.\nEjemplo: \"Python\"[0:3] → \"Pyt\"\n\n2) Un inicio negativo cuenta desde el final.\nEjemplo: s = \"Python\"\ns[-3:] → \"hon\"\n(últimos 3 caracteres)\n\n3) Patrón: s[-3:]",
    "1) Les chaînes se coupent comme les listes.\nExemple : \"Python\"[0:3] → \"Pyt\"\n\n2) Un début négatif compte depuis la fin.\nExemple : s = \"Python\"\ns[-3:] → \"hon\"\n(3 derniers caractères)\n\n3) Modèle : s[-3:]",
    "1) Stringler listeler gibi dilimlenir.\nÖrnek: \"Python\"[0:3] → \"Pyt\"\n\n2) Negatif başlangıç sondan sayar.\nÖrnek: s = \"Python\"\ns[-3:] → \"hon\"\n(son 3 karakter)\n\n3) Kalıp: s[-3:]"
  ),
  "l18-methods": L(
    "1) split breaks text into a list.\nExample: \"a,b,c\".split(\",\") → [\"a\", \"b\", \"c\"]\n\n2) replace swaps text.\nExample: s = \"I like cat\"\ns.replace(\"cat\", \"dog\") → \"I like dog\"\n\n3) Old text first, new text second.",
    "1) split parte el texto en una lista.\nEjemplo: \"a,b,c\".split(\",\") → [\"a\", \"b\", \"c\"]\n\n2) replace cambia texto.\nEjemplo: s = \"I like cat\"\ns.replace(\"cat\", \"dog\") → \"I like dog\"\n\n3) Primero el texto viejo, luego el nuevo.",
    "1) split découpe le texte en liste.\nExemple : \"a,b,c\".split(\",\") → [\"a\", \"b\", \"c\"]\n\n2) replace échange du texte.\nExemple : s = \"I like cat\"\ns.replace(\"cat\", \"dog\") → \"I like dog\"\n\n3) Ancien texte d'abord, nouveau ensuite.",
    "1) split metni listeye böler.\nÖrnek: \"a,b,c\".split(\",\") → [\"a\", \"b\", \"c\"]\n\n2) replace metni değiştirir.\nÖrnek: s = \"I like cat\"\ns.replace(\"cat\", \"dog\") → \"I like dog\"\n\n3) Önce eski metin, sonra yeni."
  ),
  "l19-nested": L(
    "1) A nested loop is a loop inside a loop.\n\n2) Outer × inner = total prints.\nExample:\nfor i in range(2):\n    for j in range(3):\n        print(i, j)\n→ 2 × 3 = 6 prints\n\n3) Each nesting level needs more indent.",
    "1) Un bucle anidado es un bucle dentro de otro.\n\n2) Exterior × interior = total de prints.\nEjemplo:\nfor i in range(2):\n    for j in range(3):\n        print(i, j)\n→ 2 × 3 = 6 prints\n\n3) Cada nivel necesita más indentación.",
    "1) Une boucle imbriquée est une boucle dans une boucle.\n\n2) Externe × interne = total d'affichages.\nExemple :\nfor i in range(2):\n    for j in range(3):\n        print(i, j)\n→ 2 × 3 = 6 affichages\n\n3) Chaque niveau a besoin de plus d'indentation.",
    "1) İç içe döngü, döngünün içinde döngüdür.\n\n2) Dış × iç = toplam yazdırma.\nÖrnek:\nfor i in range(2):\n    for j in range(3):\n        print(i, j)\n→ 2 × 3 = 6 yazdırma\n\n3) Her seviye daha fazla girinti ister."
  ),
  "l20-comp": L(
    "1) List comprehension builds a list in one line.\nPattern: [expression for item in source]\n\n2) Example:\n[n * 2 for n in range(3)] → [0, 2, 4]\n\n3) Squares:\n[n * n for n in range(4)] → [0, 1, 4, 9]",
    "1) La list comprehension crea una lista en una línea.\nPatrón: [expresión for item in fuente]\n\n2) Ejemplo:\n[n * 2 for n in range(3)] → [0, 2, 4]\n\n3) Cuadrados:\n[n * n for n in range(4)] → [0, 1, 4, 9]",
    "1) La list comprehension construit une liste en une ligne.\nModèle : [expression for item in source]\n\n2) Exemple :\n[n * 2 for n in range(3)] → [0, 2, 4]\n\n3) Carrés :\n[n * n for n in range(4)] → [0, 1, 4, 9]",
    "1) List comprehension tek satırda liste kurar.\nKalıp: [ifade for öğe in kaynak]\n\n2) Örnek:\n[n * 2 for n in range(3)] → [0, 2, 4]\n\n3) Kareler:\n[n * n for n in range(4)] → [0, 1, 4, 9]"
  ),
  "l21-files": L(
    "1) Safe way to open a file: with open(...)\nIt closes the file automatically.\n\n2) Example:\nwith open(\"note.txt\") as f:\n\n3) Read the content:\nwith open(\"data.txt\") as f:\n    text = f.read()",
    "1) Forma segura de abrir: with open(...)\nCierra el archivo solo.\n\n2) Ejemplo:\nwith open(\"note.txt\") as f:\n\n3) Leer el contenido:\nwith open(\"data.txt\") as f:\n    text = f.read()",
    "1) Façon sûre d'ouvrir : with open(...)\nIl ferme le fichier tout seul.\n\n2) Exemple :\nwith open(\"note.txt\") as f:\n\n3) Lire le contenu :\nwith open(\"data.txt\") as f:\n    text = f.read()",
    "1) Güvenli açma yolu: with open(...)\nDosyayı otomatik kapatır.\n\n2) Örnek:\nwith open(\"note.txt\") as f:\n\n3) İçeriği oku:\nwith open(\"data.txt\") as f:\n    text = f.read()"
  ),
  "l22-class": L(
    "1) A class is a blueprint for objects. Start with class.\n\n2) Example:\nclass Dog:\n    pass\n\n3) Pattern for an empty class:\nclass Cat:\n    pass",
    "1) Una clase es un molde para objetos. Empieza con class.\n\n2) Ejemplo:\nclass Dog:\n    pass\n\n3) Patrón para clase vacía:\nclass Cat:\n    pass",
    "1) Une classe est un modèle pour des objets. Commence par class.\n\n2) Exemple :\nclass Dog:\n    pass\n\n3) Modèle pour classe vide :\nclass Cat:\n    pass",
    "1) Sınıf, nesneler için bir kalıptır. class ile başla.\n\n2) Örnek:\nclass Dog:\n    pass\n\n3) Boş sınıf kalıbı:\nclass Cat:\n    pass"
  ),
  "l22-init": L(
    "1) Methods are functions inside a class. First parameter is usually self (this object).\n\n2) __init__ runs when you create an object.\n\n3) Pattern:\ndef __init__(self, name):\n    self.name = name",
    "1) Los métodos son funciones dentro de una clase. El primer parámetro suele ser self (este objeto).\n\n2) __init__ corre al crear un objeto.\n\n3) Patrón:\ndef __init__(self, name):\n    self.name = name",
    "1) Les méthodes sont des fonctions dans une classe. Le premier paramètre est souvent self (cet objet).\n\n2) __init__ s'exécute à la création d'un objet.\n\n3) Modèle :\ndef __init__(self, name):\n    self.name = name",
    "1) Metotlar sınıf içindeki fonksiyonlardır. İlk parametre genelde self'tir (bu nesne).\n\n2) __init__ nesne oluşunca çalışır.\n\n3) Kalıp:\ndef __init__(self, name):\n    self.name = name"
  ),
  "l23-mix1": L(
    "1) Review time — mix what you know.\n\n2) Remember:\nlen(list) counts items\nlist[0] is the first item\n.upper() makes CAPITAL letters\n\n3) Functions can return an f-string greeting.\nExample: return f\"Hello, {name}!\"",
    "1) Hora de repaso — mezcla lo que sabes.\n\n2) Recuerda:\nlen(lista) cuenta elementos\nlista[0] es el primero\n.upper() pone MAYÚSCULAS\n\n3) Una función puede devolver un saludo con f-string.\nEjemplo: return f\"Hello, {name}!\"",
    "1) Moment de révision — mélange ce que tu sais.\n\n2) Souviens-toi :\nlen(liste) compte les éléments\nliste[0] est le premier\n.upper() met en MAJUSCULES\n\n3) Une fonction peut renvoyer un salut avec f-string.\nExemple : return f\"Hello, {name}!\"",
    "1) Tekrar zamanı — bildiklerini karıştır.\n\n2) Unutma:\nlen(liste) öğeleri sayar\nliste[0] ilk elemandır\n.upper() harfleri BÜYÜK yapar\n\n3) Fonksiyon f-string ile selam döndürebilir.\nÖrnek: return f\"Hello, {name}!\""
  ),
  "l23-mix2": L(
    "1) Another mix: dictionaries + loops + if.\n\n2) .values() gives all dictionary values. You can add them up.\nExample: total of 2 and 5 → 7\n\n3) in checks membership.\nExample: if 10 in nums:\n    print(\"ok\")",
    "1) Otro mix: diccionarios + bucles + if.\n\n2) .values() da todos los valores. Puedes sumarlos.\nEjemplo: total de 2 y 5 → 7\n\n3) in prueba pertenencia.\nEjemplo: if 10 in nums:\n    print(\"ok\")",
    "1) Un autre mix : dictionnaires + boucles + if.\n\n2) .values() donne toutes les valeurs. Tu peux les additionner.\nExemple : total de 2 et 5 → 7\n\n3) in teste l'appartenance.\nExemple : if 10 in nums:\n    print(\"ok\")",
    "1) Başka bir karışım: sözlük + döngü + if.\n\n2) .values() tüm değerleri verir. Toplayabilirsin.\nÖrnek: 2 ve 5'in toplamı → 7\n\n3) in üyelik kontrol eder.\nÖrnek: if 10 in nums:\n    print(\"ok\")"
  ),
};

export function getTeachScript(lessonId, lang) {
  const pack = scripts[lessonId];
  if (!pack) {
    return {
      en: "1) Read the mission carefully.\n2) Try the exercises step by step.\n3) I'm right here with you!",
      es: "1) Lee la misión con cuidado.\n2) Intenta los ejercicios paso a paso.\n3) ¡Estoy contigo!",
      fr: "1) Lis bien la mission.\n2) Essaie les exercices étape par étape.\n3) Je suis avec toi !",
      tr: "1) Görevi dikkatli oku.\n2) Alıştırmaları adım adım dene.\n3) Ben yanındayım!",
    }[lang] || scripts["l1-print"].en;
  }
  return pack[lang] || pack.en;
}
