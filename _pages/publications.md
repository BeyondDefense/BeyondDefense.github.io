---
title: "Beyond Defense Lab - Publications"
layout: gridlay
excerpt: "Beyond Defense Lab -- Publications."
sitemap: false
permalink: /publications/
---

# Publications

## Group highlights

**A complete list of publications can be found on [Google Scholar](https://scholar.google.com/citations?user=Z52AG6wAAAAJ).**

<div class="pub-filters" markdown="0">
<div class="filter-row">
<span class="filter-label">Year</span>
<button class="filter-btn active" data-filter="all" data-group="year">All</button>
<button class="filter-btn" data-filter="2026" data-group="year">2026</button>
<button class="filter-btn" data-filter="2025" data-group="year">2025</button>
</div>
<div class="filter-row">
<span class="filter-label">Topic</span>
<button class="filter-btn active" data-filter="all" data-group="topic">All</button>
<button class="filter-btn" data-filter="vpn" data-group="topic">VPN Security</button>
<button class="filter-btn" data-filter="space" data-group="topic">Space Systems</button>
<button class="filter-btn" data-filter="web" data-group="topic">Web / Mobile</button>
<button class="filter-btn" data-filter="malware" data-group="topic">Malware</button>
</div>
</div>

<p id="pubNoResults" style="display:none; color: var(--text-muted); margin-top: 1rem;">No publications match the selected filters.</p>

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row pub-row">
{% endif %}

<div class="col-sm-6 clearfix pub-item"
     data-year="{{ publi.year }}"
     data-topics="{{ publi.tags }}"
     data-title="{{ publi.title | escape }}"
     data-authors="{{ publi.authors | escape }}"
     data-venue="{{ publi.link.display | escape }}">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong>{{ publi.news1 }}</strong></p>
  <p>{{ publi.news2 }}</p>
  <button class="copy-bibtex">Copy BibTeX</button>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>

## Full List of publications

<div class="full-pub-list">
{% for publi in site.data.publist %}
<div class="full-pub-item">
  <span class="full-pub-title">{{ publi.title }}</span><br/>
  <em>{{ publi.authors }}</em><br/>
  <a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
</div>
{% endfor %}
</div>
