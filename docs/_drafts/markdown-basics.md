---
layout: default
title: 'Markdown : Les principes de base'
---

Cet article est un aperçu du guide [GitHub Flavored Markdown writing](https://guides.github.com/features/mastering-markdown/).


## Qu'est ce que Markdown ?

**Markdown** est un moyen de styliser du texte sur le Web. 

Contrôler l'affichage du document; formater des mots en gras ou en italique, ajouter des images et créer des listes ne sont que quelques-unes des choses qu'il est possible de faire avec Markdown. La plupart du temps, Markdown est juste du texte normal avec quelques caractères non alphabétiques ajoutés, comme «#» ou «*».

## Syntaxe de base

### Entêtes et titres

```markdown
# Titre de niveau 1 <h1> 

## Titre de niveau 2 <h2> 

### Titre de niveau 3 <h3> 

#### Titre de niveau 4 <h4> 

##### Titre de niveau 5 <h5> 

###### Titre de niveau 6 <h6> 
```

Il est possible de définir un **id** et/ou une **classe** à l'entête, en les listant entre accolades : *{#id .classe1 .classe2}*. 

Exemple:
```markdown
# Ce titre possède 1 id {#mon_id}

# Ce titre possède 2 classes {.classe1 .classe2}
```

> Note: Ceci est une fonctionnalité étendue MPE.

### Accentuation

<!-- prettier-ignore -->
```markdown
*Ce texte sera en italique*
_Ce texte sera en italique_

**Ce texte sera en gras**
__Ce texte sera en gras__

_Il est possible de **combiner** les 2._

~~Ce texte sera barré~~
```

### Lists

#### Unordered List

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

#### Ordered List

```markdown
1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b
```

### Images

```markdown
Format: ![Text alternatif](url)
Exemple:
![Un paysage](/assets/img/example2.jpg)
```

### Links

```markdown
Format: [Libellé](url)
[GitHub](https://github.com)
```

### Blockquote

```markdown
Les 2 premières règles du développeur :

> Never trust user input
> Keep It Simple, Stupid
```

### Horizontal Rule

```markdown
Three or more...

---

Hyphens

---

Asterisks

---

Underscores
```

### Inline code

```markdown
I think you should use an
`<addr>` element here instead.
```

### Fenced code block

You can create fenced code blocks by placing triple backticks <code>\`\`\`</code> before and after the code block.

#### Syntax Highlighting

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

For example, to syntax highlight Ruby code:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

#### Code block class (MPE extended feature)

You can set `class` for your code blocks.

For example, to add `class1 class2` to a code block

    ```javascript {.class1 .class}
    function add(x, y) {
      return x + y
    }
    ```

##### line-numbers

You can enable line number for a code block by adding `line-numbers` class.

For example:

````markdown
```javascript {.line-numbers}
function add(x, y) {
  return x + y;
}
```
````

![screen shot 2017-07-14 at 1 20 27 am](https://user-images.githubusercontent.com/1908863/28200587-a8582b0a-6832-11e7-83a7-6c3bb011322f.png)

##### highlighting rows

You can highlight rows by add `highlight` attribute:

````markdown
```javascript {highlight=10}
```

```javascript {highlight=10-20}
```

```javascript {highlight=[1-10,15,20-22]}
```
````

### Task lists

```markdown
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

### Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

<!-- prettier-ignore -->
```markdown
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

## Extended syntax

### Table

> Need to enable `enableExtendedTableSyntax` in extension settings to get it work.

![screen shot 2017-07-15 at 8 16 45 pm](https://user-images.githubusercontent.com/1908863/28243710-945e3004-699a-11e7-9a5f-d74f6c944c3b.png)

### Emoji & Font-Awesome

> This only works for `markdown-it parser` but not `pandoc parser`.  
> Enabled by default. You can disable it from the package settings.

```
:smile:
:fa-car:
```

### Superscript

```markdown
30^th^
```

### Subscript

```markdown
H~2~O
```

### Footnotes

```markdown
Content [^1]

[^1]: Hi! This is a footnote
```

### Abbreviation

```markdown
_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```

### Mark

```markdown
==marked==
```

### CriticMarkup

CriticMarkup is **disabled** by default, but you can enable it from the package settings.  
For more information about CriticMarkup, check [CriticMarkup User's Guide](https://criticmarkup.com/users-guide.php).

There are five types of Critic marks:

- Addition `{++ ++}`
- Deletion `{-- --}`
- Substitution `{~~ ~> ~~}`
- Comment `{>> <<}`
- Highlight `{== ==}{>> <<}`

> CriticMarkup only works with the markdown-it parser, but not the pandoc parser.

## References

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [Daring Fireball: Markdown Basics](https://daringfireball.net/projects/markdown/basics)