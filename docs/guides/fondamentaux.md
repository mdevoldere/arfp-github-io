---
title: Les principes fondamentaux du développement
---

Cet article décrit les principes techniques de bases que tout développeur devrait suivre (dans un monde idéal). Il s'agit d'un condensé d'idées générales qui vous aideront dans votre approche du métier ;)

## Reason Before Coding

> Vous voilà face à une tâche à accomplir: un exercice, un projet, une fonctionnalité à ajouter, un bug à corriger etc...
>
> Vous vous jetez sur votre éditeur de code favori et commencez à coder...

Lorsqu'ils s'attèlent à une nouvelle tâche, les développeurs peu expérimentés ont généralement le même réflexe :
- Ouvrir leur éditeur de code et coder directement.

Cette approche donne l'illusion d'un travail rapide et efficace. C'est pourtant tout le contraire ! 
En faisant cela, vous vous obligez à réfléchir au problème en même temps que réfléchir à comment le coder. 
Il est plus raisonnable de travailler sur le 1er point avant d'écrire la moindre ligne de code.

> Un bon raisonnement est la clé à toute résolution d'un problème. 

En tant que développeur, votre première tâche est de bien comprendre l'objectif de la demande client.

Prenez le temps d'analyser la demande et de bien définir les étapes qui vous amèneront à sa résolution.

Pour chaque tâche à accomplir et ce, avant de vous lancer dans le code :
1. Analysez la demande, reformulez-la avec vos propres mots si nécessaire
    1. éliminez toute amibiguïté
    2. échangez avec le demandeur si besoin
2. Planifiez votre travail
    1. Décomposez le problème à résoude en sous problèmes plus simples (planification)
    2. Identifiez les composants nécessaires (analyse/conception via diagrammes)
    3. Décrivez les algorithmes (raisonnement logique via pseudo code et/ou diagrammes...)
3. Formalisez les tests
    1. Prévoyez les scénarii de tests fonctionnels
    2. Décrivez les tests unitaires


## Never Trust User Input

> Ne jamais faire confiance aux données dont vous ne maîrisez pas la provenance

Si l'on ne devait retenir qu'une seule règle, ce serait bien celle-ci. 

Vous devez **toujours** contrôler les entrées/sorties dans vos programmes et vous assurer de la cohérence des données  manipulées ; principalement celles dont vous ne maîtrisez pas la provenance (saisie utilisateur, paramètres d'url...).

Plus concrètement, avant de manipuler une donnée (variable, saisie utilisateur...) vous devez :
- Vérifier l'existance de la donnée 
- Contrôler la cohérence de la donnée (contrôle sur le format, plages de valeurs...)


Un utilisateur peut saisir des données eronnées volontairement ou non, il est donc primordial de respecter cette règle.

Passer outre ce principe fondamental expose votre application à des bugs ou pire, à des failles de sécurité. 

## Practice algorithms all the time

> Travaillez votre raisonnement logique en tout temps

Un bon développeur est avant tout un bon algorithmicien.

Les algorithmes sont à la base de tout programme. Face aux tâches à accomplir, vous devez garder une approche logique, penser *algorithmes* et vous extraire des concepts du monde réel.

## Work on your abstraction skills

> Développez vos capacités d'abstraction.

Il y a une longue tradition d’association entre l’analyse et la notion d’abstraction. Celle-ci est généralement considérée comme légitime dans la mesure où l’abstraction apparaît comme un procédé inévitable de toute science.

La programmation amène le développeur à transférer des concepts du monde réel (objet physique, processus métier...) vers des concepts informatiques: c'est la notion d'abstraction.

En tant que développeur, vous devez maîtriser les 3 dimensions de la notion d'abstraction : 
- Délimitation d'un concept
- Identification des différences entre plusieurs concepts
- Rapprochement des points communs entre différents concepts


### Délimitation d'un concept (dans le cadre d'une application)
- Description des caratéristiques
    - Quelles sont les caractéristiques d'un *Employé* (nom, prénom...) ?

- Description des comportements 
    - Que peut faire un *Manager*, que peut-on faire avec ?

### Identification des différences entre plusieurs concepts
- Quels sont les différences entre une *Voiture* et une *Moto* ?

### Rapprochement des points communs entre différents concepts
- Quels sont les points communs entre un *Chien* et un *Chat* ?


## Languages & Environment before Frameworks

> Apprenez à utiliser les outils de développeurs
>
> Maîtrisez les langages *clés* 
>
> Comprenez les différents environnements d'exécution

Avant tout, la maîtrise des outils de collaboration est primordiale.
- Connaître au moins 1 Système de gestion de version (GIT, Subversion...)
- Connaître le principe de "tickets" et savoir échanger au travers de ceux-ci
- Maîtriser la communication numérique (logiciels de communication en direct, visio conférence, partage d'écran etc...)

L'industrialisation des métiers du développement a amené une standardisation des profils de développeurs. 
Les compétences requises dans bon nombre d'offres d'emploi ressemblent à:  
- Matrise du Framework "Machin" 
- Expérience du CMS "Truc" demandée
- Connaissance de la stack "Pierre, Paul, Jacques" est un +

Gardez en mémoire que les différents *Frameworks* et *CMS* (Content Management System) s'appuient tous sur un ou plusieurs langages.
Maîtrisez les langages servant de support aux frameworks doit donc rester votre priorité.

De la même manière, ces langages et frameworks s'exécutent dans des environnements particuliers (serveur Apache, NodeJS, Androïd etc...).
La compréhension de ces différents environnements est indispensable.

Par exemple (exemples d'illustration, simplifiés): 
- Pour un projet Symfony, vous aurez besoin de PHP, HTML, CSS, SQL et un serveur Web
- Pour un projet AngularJS, vous aurez besoin de Javascript, HTML, CSS, SQL et d'un serveur NodeJS
- Pour un projet WPF, vous aurez besoin de C#, XAML, XML, VisualStudio IDE, .NET Framework

Chaque type d'application nécessite la connaissance de ses propres langages et environnements.



Envisagez votre apprentissage des Frameworks et CMS après avoir acquis les fondamentaux du développement : algorithmes, abstraction, outils.


## Keep It Simple, Stupid

Suivez le principe **KISS** (Keep It Simple, Stupid) qui stipule que la plupart des systèmes fonctionnent mieux s’ils restent simples et non compliqués ; par conséquent, la simplicité doit être un objectif clé de la conception et toute complexité inutile doit être évitée. Il faut impérativement se poser la question : quelle est la chose la plus simple qui puisse fonctionner ? Une fois que vous l'avez définie, vous devez l'essayer. Si elle ne fonctionne pas, il faut alors passer à la seconde chose la plus simple etc...

## You Aren't Gonna Need It

Appliquez le principe **YAGNI** (You Aren't Gonna Need It) qui stipule qu'un développeur ne doit ajouter aucune fonctionnalité avant que cela soit jugé nécessaire. D'ailleurs, en ce qui concerne les fonctionnalités en général, "You Aren't Gonna Need It".

## Avoid Learning Anything New

Respectez le précepte **ALAN** (Avoid Learning Anything New). Les différents langages, environnements et outils vont et viennent, et chacun d'entre eux requiert l'apprentissage d'un nouvel ensemble de faits, de pratiques et d'une mentalité. Et ils vont probablement s'en aller. Aussi, il est recommandé de n'apprendre quelque chose de nouveau que quand vous y êtes contraint.

--- 

## Pour résumer vos priorités
1. Raisonnement logique
2. Abstraction
3. Algorithmes

et bien sur...

- NEVER TRUST USER INPUT
