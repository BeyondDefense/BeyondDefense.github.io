---
title: "Beyond Defense Lab - Gallery"
layout: piclay
excerpt: "Life at Beyond Defense Lab: research, talks, conferences, and time together."
permalink: /pictures/
---

<main class="gallery-page" markdown="0">
<h1>Pictures</h1>
<p class="gallery-intro">Life at Beyond Defense Lab: from collaborative research and invited talks to conferences, and shared meals.</p>
{% assign gallery_groups = "Group Activities,Talks & Visits,Conferences & Life in Albuquerque" | split: "," %}
{% for group in gallery_groups %}
{% assign pics = site.data.pictures_UNM | where: "group", group %}
{% if pics.size > 0 %}
<section aria-labelledby="gallery-{{ forloop.index }}">
<h2 id="gallery-{{ forloop.index }}">{{ group | escape }}</h2>
<div class="gallery-grid">
{% for pic in pics %}
{% assign stem = pic.image | split: '.' | first %}
<a class="gallery-photo" href="{{ '/images/picpic/Gallery/' | append: pic.image | relative_url }}" data-gallery-caption="{{ pic.title | escape }}" aria-label="View larger photo: {{ pic.title | escape }}">
  <img src="{{ '/images/picpic/Gallery/thumbnails/' | append: stem | append: '-720.webp' | relative_url }}"
       srcset="{{ '/images/picpic/Gallery/thumbnails/' | append: stem | append: '-360.webp' | relative_url }} 360w, {{ '/images/picpic/Gallery/thumbnails/' | append: stem | append: '-720.webp' | relative_url }} 720w"
       sizes="(max-width: 460px) 90vw, (max-width: 767px) 44vw, (max-width: 991px) 28vw, 21vw"
       width="720" height="540" loading="lazy" decoding="async" alt="{{ pic.title | escape }}">
</a>
{% endfor %}
</div>
</section>
{% endif %}
{% endfor %}

<dialog id="galleryViewer" aria-label="Photo viewer" aria-describedby="galleryCaption">
  <div class="gallery-viewer-controls">
    <button type="button" id="galleryPrevious" aria-label="Previous photo">← Previous</button>
    <span id="galleryPosition" aria-live="polite"></span>
    <button type="button" id="galleryNext" aria-label="Next photo">Next →</button>
    <button type="button" id="galleryClose" aria-label="Close photo viewer" autofocus>Close ×</button>
  </div>
  <figure>
    <img id="galleryLargeImage" alt="">
    <figcaption id="galleryCaption" aria-live="polite"></figcaption>
  </figure>
  <a id="galleryOriginal" href="#">Open original image ↗</a>
</dialog>
</main>
