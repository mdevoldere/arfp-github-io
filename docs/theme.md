---
layout: default
title: "Thème du site"
image: /assets/img/banner-guides.jpg
show_tile: 4
---
<style>
    .dot {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        padding: 0 .4em;
        font-weight: bold;
    }

    .demo > * {
        background-color: #FFFFFF11;
        padding: .5em;
    }
</style>


<p>Le titre ci-dessus est le titre d'une section (&lt;section&gt;). La 1ère balise &lt;h1&gt; ou &lt;h2&gt; enfant d'une section affiche une bordure inférieure. Cela différencie les titres de section des titres suivants.</p>

<p>Un &lt;h1&gt; ou &lt;h2&gt; à l'intérieur d'une balise header (&lt;header&gt;) présente le même effet.</p>

<header>
<h2>Titre de niveau 2 dans un header</h2>
</header>
<h2>Titre de niveau 2 hors d'un header</h2>
<h3>Titre de niveau 3</h3>
<h4>Titre de niveau 4</h4>
<h5>Titre de niveau 5</h5>
<h6>Titre de niveau 6</h6>

<p>Les liens dans le texte ressemblent à <a href="https://github.com">ce lien vers github</a>. Les paragraphes sont bien séparés et sont facilement identifiables.</p>
<p>Une section ne doit contenir qu'une balise h1 (généralement la 1ère). A l'intérieur d'une section, utilisez les entêtes &lt;h2&gt; et inférieures  (&lt;h3&gt;, &lt;h4&gt;...).</p>

<h2>Couleurs</h2>

<p>Les couleurs du thème sont définies dans des variables CSS sous le pseudo élément <strong>:root</strong>.</p>

<h3>Codes couleurs</h3>



<h2>Blocs d'informations</h2>

<p>
    Un bloc peut-être associé à la classe 
    <span class="badge inline">badge</span>,
    <span class="alert inline">alert</span>, 
    <span class="warning inline">warning</span>, 
    <span class="success inline">success</span> ou 
    <span class="info inline">info</span>. Ajouter la classe "inline" pour forcer le display inline.
</p>

<hr>
<p class="msg">Sans classe inline, le display est celui de l'élément.</p>
<p class="alert">Alerte avec <a href="#">un lien</a> intégré.</p>
<p class="warning">Warning avec <a href="#">un lien</a> intégré.</p>
<p class="success">Succès avec <a href="#">un lien</a> intégré.</p>
<p class="info">Info avec <a href="#">un lien</a> intégré.</p>

<h2>Boutons</h2>

<p>Les boutons peuvent être associés aux classes alt, alert, warning, success, info.</p>

<div>
    <button>Default</button> 
    <button class="alt">Alt Button</button> 
    <button class="alert">Alert</button> 
    <button class="warning">Warning</button> 
    <button class="success">Success</button> 
    <button class="info">Information</button> 
</div>

<article>
<h2>Titre dans un article (&lt;article&gt;)</h2>
<blockquote>
    Texte dans un blockquote (&lt;blockquote&gt;)
</blockquote>
</article>

<h2>Image</h2>

![label](/assets/img/crm-logo.png)

<h2>Éléments flexibles</h2>

Le module flexbox est utilisé pour le positionnement flexible des élements dans une section, un article...

Les classes `.flex`,  `.flex2`,  `.flex3`,  `.flex4`,  `.flex5` et `.flex6` permettent de définir un conteneur "flex". La classe .flex ne définit pas la largeur de ses enfants. Le chiffre des classes .flex2 et suivantes définit le nombre d'éléments affichés par ligne à la résolution la plus élevèe (la taille des enfants est définie par la classe et s'ajuste selon la résolution).

<table>
<tr>
<th>Classe</th>
<th>Mobile</th><th>&gt;=640px</th><th>&gt;=960px</th><th>&gt;=1280px</th><th>&gt;=1600px</th>
</tr>
<tr>
<td>.flex</td>
<td colspan="6">1col (100%)</td>
</tr>
<tr>
<td>.flex2</td>
<td>1col (100%)</td><td>2cols (50%)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
</tr>
<tr>
<td>.flex3</td>
<td>1col (100%)</td><td>2cols (50%)</td><td>2cols (50%)</td><td>3cols (33%)</td><td>&nbsp;</td>
</tr>
<tr>
<td>.flex4</td>
<td>1col (100%)</td><td>2cols (50%)</td><td>2cols (50%)</td><td>3cols (33%)</td><td>4cols (25%)</td>
</tr>
<tr>
<td>.flex5</td>
<td>1col (100%)</td><td>2cols (50%)</td><td>2cols (50%)</td><td>3cols (33%)</td><td>5cols (20%)</td>
</tr>
<tr>
<td>.flex6</td>
<td>1col (100%)</td><td>2cols (50%)</td><td>2cols (50%)</td><td>3cols (33%)</td><td>6cols (16%)</td>
</tr>
</table>

<h4>Flex 2</h4>
<div class="flex2 demo">
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
</div>

<h4>Flex 3</h4>
<div class="flex3 demo">
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
</div>

<h4>Flex 4</h4>
<div class="flex4 demo">
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
<p><img src="/assets/img/crm-logo.png" alt="example"></p>
</div>


<h2>Code</h2>

```php 
<?php

namespace MD\Models;

require (__DIR__.'/otherfile.php');

$a = 1;
$b = 42.1337;
$c = ['Hey', "You !", 1, 3.2];

class MyClass
{
    public const MY = 1;

    static protected int $id = 0;

    private string $name;

    public function getName()
    {
        return $this->name;
    }

    public function setName(string $_name)
    {
        if(strlen($_name) < 2) {
            throw new \Exception("Too short !");
        }

        $this->name = $_name;
    }

    static public function newId()
    {
        return ++self::$id;
    }
}

try {
    $id = MyClass::newId();

    $o = new \MD\Models\MyClass();

    $o->setName("Mike");

    echo $o->getName();
}
catch (\Exception $e) {
    exit($e->getMessage());
}
finally {
    echo 'end';
}

```

## C#

```csharp
using System;

namespace MD.Models 
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string a = "a";
            int b = 1;

            Console.ReadLine();

            for(int i = 0; i < 10; i++)
            {
                Console.WriteLine(i.ToString());
            }
        }
    }
}
```

## Java
```java
package com.md.models;

import java.io.Console;

public class Program
{
    public static void main(String[] args)
    {
        int b = 1;

        Console c = System.console();

        String input = c.readLine("Your name: ");

        System.out.println("Welcome " + input);
    }
}

```

## json
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## HTML / CSS / JS
```html
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>LAYOUT1</title>
        <link rel="stylesheet" href="/assets/css/main.css">
        <style>
            .myclass {
                border-color: #333;
            }
            #id {
                border: none;
            }
            body {
                margin: 0;
            }
        </style>

        <script src="script.js" async></script>

        <script>
            function you() {
                return "You";
            }
        </script>
    </head>
    <body>
        <h1>Hello</h1>
    </body>
</html>
```

```css
.myclass {
    border-color: #333;
}
#id {
    border: none;
}
body {
    margin: 0;
}
```

```javascript
var a = 1;

function hello() {
    return "Hello";
}

```

<h2>Autres Badges</h2>

<div class="flex left gap10">
    <span class="dot" style="background-color: #ffffff;">A</span>
    <span class="dot" style="background-color: #f1f1f1;">A</span>
    <span class="dot" style="background-color: #D1FFD1;">A</span>
    <span class="dot" style="background-color: #A8FAA8;">A</span>
    <span class="dot" style="background-color: #D1D1FF;">A</span>
    <span class="dot" style="background-color: #E1E1FF;">A</span>
    <span class="dot" style="background-color: #2a2f4a; color: #ffffff;">A</span>
    <span class="dot" style="background-color: #242943; color: #ffffff;">A</span>
</div>

<hr>



