---
title: "Beyond Defense Lab - Publications"
layout: gridlay
excerpt: "Beyond Defense Lab -- Publications."
sitemap: false
permalink: /publications/
---

# Publications

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
<button class="filter-btn" data-filter="vpn" data-group="topic">VPN</button>
<button class="filter-btn" data-filter="space" data-group="topic">Space</button>
<button class="filter-btn" data-filter="web" data-group="topic">Web</button>
<button class="filter-btn" data-filter="mobile" data-group="topic">Mobile</button>
<button class="filter-btn" data-filter="malware" data-group="topic">Malware</button>
</div>
</div>

<p id="pubNoResults" style="display:none; color: var(--text-muted); margin-top: 1rem;">No publications match the selected filters.</p>



## Group highlights

{% assign featured_pubs = site.data.publist | where: "highlight", 1 %}
{% assign number_printed = 0 %}
{% for publi in featured_pubs limit: 6 %}

{% assign even_odd = number_printed | modulo: 2 %}

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
  <pubtit><span class="pub-title-text">{{ publi.title }}</span> <a class="pdf-link" href="{{ publi.link.url }}" target="_blank" title="View PDF" aria-label="View PDF"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><text x="12.5" y="18" font-size="6.5" font-weight="700" font-family="Arial, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">PDF</text></svg></a></pubtit>
  <p><em>{{ publi.authors }}</em></p>
  <p>{{ publi.link.display }}</p>
  <p class="pub-tags">{% assign tag_list = publi.tags | split: "," %}{% for tag in tag_list %}<span class="pub-tag pub-tag--{{ tag | strip }}">{% if tag == "vpn" %}VPN{% elsif tag == "space" %}Space{% elsif tag == "web" %}Web{% elsif tag == "mobile" %}Mobile{% elsif tag == "malware" %}Malware{% else %}{{ tag | strip }}{% endif %}</span>{% endfor %}</p>
  {% assign non_press = publi.highlights | where_exp: "h", "h.type != 'press'" %}
  {% assign press = publi.highlights | where_exp: "h", "h.type == 'press'" %}
  {% if non_press.size > 0 %}<p><strong>{% for h in non_press %}<a class="highlight-link">{{ h.text }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</strong></p>{% endif %}
  {% if press.size > 0 %}<p>{% for h in press %}<a class="highlight-link" href="{{ h.url }}" target="_blank">{{ h.text }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</p>{% endif %}
  <button class="copy-bibtex">Copy BibTeX</button>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
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
<div class="full-pub-item" data-year="{{ publi.year }}" data-topics="{{ publi.tags }}">
<span class="full-pub-title"><span class="pub-title-text">{{ publi.title }}</span> <a class="pdf-link" href="{{ publi.link.url }}" target="_blank" title="View PDF" aria-label="View PDF"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><text x="12.5" y="18" font-size="6.5" font-weight="700" font-family="Arial, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">PDF</text></svg></a>{% assign award_items = publi.highlights | where_exp: "h", "h.type == 'award'" %}{% assign disclosure_items = publi.highlights | where_exp: "h", "h.type == 'disclosure'" %}{% assign press_items = publi.highlights | where_exp: "h", "h.type == 'press'" %}{% if award_items.size > 0 %}<span class="pub-highlight-badge" title="{{ award_items | map: 'text' | join: ', ' }}"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M7 3h10v2h3v2a4 4 0 0 1-4 4.58A5.5 5.5 0 0 1 13 15.9V18h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-2.1A5.5 5.5 0 0 1 8 11.58 4 4 0 0 1 4 7V5h3V3zm-2 4a2 2 0 0 0 2 2V5H5v2zm14 0V5h-2v4a2 2 0 0 0 2-2z"/></svg></span>{% endif %}{% if disclosure_items.size > 0 %}<span class="pub-highlight-badge" title="{{ disclosure_items | map: 'text' | join: ', ' }}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><ellipse cx="12" cy="13" rx="4.5" ry="6" fill="currentColor" stroke="none"/><line x1="12" y1="7" x2="12" y2="4"/><line x1="12" y1="4" x2="10" y2="2.5"/><line x1="12" y1="4" x2="14" y2="2.5"/><line x1="8" y1="9" x2="4.5" y2="7"/><line x1="8" y1="13" x2="3.5" y2="13"/><line x1="8" y1="17" x2="4.5" y2="19"/><line x1="16" y1="9" x2="19.5" y2="7"/><line x1="16" y1="13" x2="20.5" y2="13"/><line x1="16" y1="17" x2="19.5" y2="19"/><line x1="12" y1="8" x2="12" y2="18"/></svg></span>{% endif %}{% if press_items.size > 0 %}<a class="pub-highlight-badge" href="{{ press_items.first.url }}" target="_blank" title="{{ press_items | map: 'text' | join: ', ' }}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M19 8h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="11" x2="14" y2="11"/><line x1="7" y1="14" x2="11" y2="14"/><line x1="7" y1="17" x2="11" y2="17"/></svg></a>{% endif %}</span>
<span class="full-pub-authors">{{ publi.authors }}</span>
<span class="full-pub-venue">{{ publi.link.display }}</span><span class="pub-tags">{% assign tag_list = publi.tags | split: "," %}{% for tag in tag_list %}<span class="pub-tag pub-tag--{{ tag | strip }}">{% if tag == "vpn" %}VPN{% elsif tag == "space" %}Space{% elsif tag == "web" %}Web{% elsif tag == "mobile" %}Mobile{% elsif tag == "malware" %}Malware{% else %}{{ tag | strip }}{% endif %}</span>{% endfor %}</span>
</div>
{% endfor %}
</div>
