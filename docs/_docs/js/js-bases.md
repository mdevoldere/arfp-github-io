---
title: Prise en main de Javascript avec NodeJS
description: Pour débuter
subject: js-basics
order: 1
course: 1
categories: basics js web
related: 
    - https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps
---


Pour démarrer votre apprentissage de Javascript et prendre en main le langage vous devez avoir sur votre machine: 

- NodeJS : [https://nodejs.org](https://nodejs.org) (installer la version "LTS")
- Visual Studio Code : [https://code.visualstudio.com](https://code.visualstudio.com/download) (ou un éditeur de code équivalent)


## Hello World

Pour démarrer, créer un répertoire `intro` et créer un fichier `hello.js` à l'intérieur de celui-ci.

Dans ce fichier, écrivez le code suivant :

```js
console.log('Hello World !');
```

Pour exécuter le fichier, ouvrez un terminal, placez vous dans le répertoire `intro` créé plus haut et saisissez la commande :

```shell
node hello.js
```

Vous devriez voir `Hello World !` s'afficher dans votre console.

Décryptons le code précédent: 

- `console` permet d'accéder à la console Javascript
- `console.log('Hello World !')` est une méthode de l'objet console et affiche la valeur envoyée en argument dans la console .


## Les variables 

Une variable est un concept qui relie un identifiant (le nom de la variable) à une valeur stockée en mémoire.

En d'autres termes, une variable "référence" une valeur en stockée mémoire (cette notion de référence est importante).

La valeur d'une variable est... variable (d'où son nom^^) et pourra donc évoluer durant l'exécution du programme.

---

En Javascript, une variable se déclare avec le mot clé 'var' ou 'let' suivi du nom de la variable.

il est possible de déclarer une variable: 
- en déclarant son nom mais sans lui assigner de valeur (déclaration)
- en déclarant son nom et en lui assignant une valeur directement (déclaration + assignation)

une fois déclarée, on accède à la variable (pour la lire ou modifier sa valeur) par son nom sans utiliser les mots clés let et var.

Il existe également des variables "spéciales" déclarées avec le mot clé "const". Ce sont les "constantes". Une constante est obligatoirement initialisée avec une valeur. Une fois qu'une constante est initialisée, il n'est plus possible de modifier la référence vers la valeur en mémoire définie à l'initialisation.

```js
// Les différents types de déclaration
let variable1 = 1;
var variable2 = 2;
let variable3;
let variable4;
// modifications des valeurs
variable3 = 3;
variable4 = variable3; // une variable peut prendre la valeur d'une autre variable
variable3 = 9;

console.log(variable1); // affiche le contenu de la variable
console.log(variable2);
console.log(variable3);
console.log(variable4);
```

Types de variables principaux: booléen, int, long, float, double, string, Array, Object, function

Il exsite 2 grandes familles de variables :
- Les variables type "valeur", généralement les types "simples" (nombres, chaines de caractère et structures)
- Les variables type "référence" (les objets et tous les types complexes)

Ces notions de valeurs et références seront approfondies dans la suite du parcours.

```js

// booléen : ne peut prendre que 2 valeurs : true ou false (vrai ou faux)
let vraiOuFaux = true;
console.log(vraiOuFaux); // affiche "true" dans la console
let typeBool = typeof vraiOuFaux; // On peut vérifier le type d'une variable grâce à typeof
console.log(typeBool); // affichage du type de la variable


// nombre entier
let entier = 1;
console.log(entier); // affiche "1" dans la console
console.log(typeof entier);


// nombre à virgule
let flottant = 1.337;
console.log(flottant);
console.log(typeof flottant);


// chaine de caractères (texte)
let chaine = "Hello World";
console.log(chaine);
chaine = "Hi !"; // modification du contenu de la variable
console.log(chaine);
console.log(typeof chaine);


// tableau (collection de valeurs) (plus d'infos dans la partie 08)
let tableau = ['Hello', 'World']; // Accès aux éléments via leur index (0 = 1er élement, 1 = 2ème élement, etc...)
console.log(tableau);
console.log(tableau[0]); // lecture de la valeur du 1er élément
tableau[0] = "Mike"; // modification de la valeur du 1er élément
console.log(tableau[0]); 
console.log(typeof tableau);


// objet (plus d'infos dans le module 02_POO)
let objet = { id: 2, text: "Welcome" }; // création d'un objet litéral avec 2 attributs: id et text 
console.log(objet);
console.log(objet.text); // lecture de la valeur de l'attribut "text" de l'objet précédent
objet.text = "Please login"; // modification de la valeur de l'attribut "text" de l'objet précédent
console.log(objet.text); 
console.log(objet); // l'objet a bien été modifié !
console.log(typeof objet);
console.log(typeof objet.id);
console.log(typeof objet.text);
```

## Expressions & Concaténation
- Les variables acceptent toute expression valide
- Une expression est une portion de code retournant une valeur
- `1` est une expression renvoyant la valeur 1
- `1+1` est une expression renvoyant la valeur 2
- La concaténation permet d'insérer des variables dans une chaine de caractères
    - Les éléments sont alors séparés par le signe "+"

```js
console.log("--- Expressions --- "); 

var calcul = 1 + 1;
console.log(calcul); // affiche 2

calcul = calcul * 5;
console.log(calcul); // affiche 10

calcul = (calcul * calcul / 2.5); // encapsuler les opérations arithmétiques dans des parenthèses est une bonne pratique
console.log(calcul); // affiche 40 (10 * 10 / 2.5)


console.log("--- Concaténation --- "); 

var resultat = 'Le résultat du calcul précédent est: ' + calcul; // insertion de la valeur de la variable "calcul" à la fin d'une chaine
console.log(resultat);
resultat = 'La valeur ' + calcul + ' est le résultat attendu'; // insertion de la valeur de la variable "calcul" au sein d'une chaine
console.log(resultat);
```