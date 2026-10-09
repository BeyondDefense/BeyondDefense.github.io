---
title: "Beyond Defense Lab - Outreach"
layout: textlay
excerpt: "Beyond Defense Lab -- blog posts and workshops we organize."
permalink: /outreach/
---

# Outreach

We write about our research for a wider audience and organize workshops that bring the community together around emerging security problems.

<div class="outreach-filters" markdown="0">
  <span class="filter-label">Show</span>
  <button class="filter-btn outreach-filter-btn active" data-outreach-filter="all">All</button>
  <button class="filter-btn outreach-filter-btn" data-outreach-filter="blog">Blog</button>
  <button class="filter-btn outreach-filter-btn" data-outreach-filter="workshop">Workshops</button>
</div>

{% if site.outreach.size > 0 %}
{% assign items = site.outreach | sort: "date" | reverse %}
<div class="outreach-list" markdown="0">
{% for item in items %}{% assign kind = item.tags | first | default: 'blog' %}<a class="outreach-card" data-kind="{{ kind }}" href="{{ item.url | prepend: site.baseurl | prepend: site.url }}">
  <span class="outreach-meta">{{ kind }}</span>
  <span class="outreach-byline">{{ item.date | date: "%B %-d, %Y" }}{% if item.author %} · {{ item.author }}{% endif %}</span>
  <span class="outreach-title">{{ item.title }}</span>
  {% if item.venue %}<span class="outreach-venue">{{ item.venue }}</span>{% endif %}
  {% if item.description %}<span class="outreach-desc">{{ item.description }}</span>{% endif %}
</a>
{% endfor %}</div>
<p id="outreachNoResults" class="outreach-empty" style="display:none;" markdown="0">Nothing here yet in this category.</p>
{% else %}
<p class="outreach-empty" markdown="0">Nothing published yet — add a Markdown file to <code>_outreach/</code>.</p>
{% endif %}
