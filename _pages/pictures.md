---
title: "Beyond Defense Lab - Gallery"
layout: piclay
excerpt: "Beyond Defense Lab - Pictures"
permalink: /pictures/
---



{% assign gallery_groups = "Group Activities,Talks and Visits,Miscellaneous" | split: "," %}
{% for group in gallery_groups %}
{% assign pics = site.data.pictures_UNM | where: "group", group %}
{% if pics.size > 0 %}

## {{ group }}

<div class="gallery-grid" markdown="0">
{% for pic in pics %}<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" alt="{{ pic.title | escape }}" title="{{ pic.title | escape }}" />
{% endfor %}</div>

{% endif %}
{% endfor %}

<p> &nbsp; </p>
