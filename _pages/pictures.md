---
title: "Beyond Defense Lab - Gallery"
layout: piclay
excerpt: "Beyond Defense Lab - Pictures"
permalink: /pictures
---

## Gallery
(Right-click 'view image' to see a larger image.) {% assign number_printed = 0 %} {% for pic in site.data.pictures_UNM %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}

{% endif %}

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %} {% if even_odd == 1 %}

{% endif %}
{% if even_odd == 2 %}

{% endif %}
{% if even_odd == 3 %}

{% endif %}