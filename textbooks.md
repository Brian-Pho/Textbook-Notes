---
layout: page
title: Textbooks
sidebar_link: true
---

My notes written from textbooks.

<main class="shelf">
  {% for book in site.data.books  %}
  <article class="book">
    <figure class="book-cover">
      <a href="{{ book.link }}">
        <img src="./textbook-covers/{{ book.image }}" alt="{{ book.title }}">
      </a>
    </figure>
    <div class="book-info">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
    </div>
  </article>
  {% endfor %}
</main>
