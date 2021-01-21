---
layout: posts
title: Articles
landing-title: 'All posts'
nav-menu: true
description: null
image: null
author: null
show_tile: false
order: 1
permalink: /articles/
---

<h1>Articles</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>