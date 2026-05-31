---
title: "BDL -- Gallery"
layout: piclay
excerpt: "Beyond Defense Lab -- Pictures"
permalink: /pictures/
---

# Pictures

Welcome to the Beyond Defense Lab photo gallery.

<style>
  .gallery-grid .thumbnail {
    border: 1px solid #ddd;
    padding: 6px;
    border-radius: 4px;
    background: #fff;
    margin-bottom: 18px;
  }
  .gallery-grid .thumbnail img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>

{% assign gallery_images = "ABQ-evening.jpg|Jiyoo-Bhup.jpg|Lunch-Lobo.jpg|MichDinner.jpg|keynote-sazzad.jpg" | split: "|" %}

<div class="row gallery-grid">
  {% for image_name in gallery_images %}
    <div class="col-6 col-sm-4 col-md-3">
      <div class="thumbnail">
        <img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ image_name }}" alt="{{ image_name }}" />
      </div>
    </div>
  {% endfor %}
</div>

