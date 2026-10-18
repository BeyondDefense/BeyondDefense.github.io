---
title: "Beyond Defense Lab - Outreach"
layout: textlay
excerpt: "Beyond Defense Lab -- blog posts and workshops we organize."
permalink: /outreach/
---

# Outreach

We share the ideas and findings behind our research and bring researchers, practitioners, and students together to discuss emerging cybersecurity challenges.

<div class="outreach-filters" role="group" aria-label="Filter outreach by type" markdown="0">
  <span class="filter-label">Show</span>
  <button class="filter-btn outreach-filter-btn active" type="button" data-outreach-filter="all" aria-pressed="true">All</button>
  <button class="filter-btn outreach-filter-btn" type="button" data-outreach-filter="event" aria-pressed="false">Events</button>
  <button class="filter-btn outreach-filter-btn" type="button" data-outreach-filter="story" aria-pressed="false">Research Stories</button>
</div>

{% if site.outreach.size > 0 %}
{% assign items = site.outreach | sort: "date" | reverse %}
<div class="outreach-list" markdown="0">
{% for item in items %}
{% assign kind = 'story' %}{% if item.layout == 'workshop' or item.tags contains 'workshop' or item.tags contains 'event' %}{% assign kind = 'event' %}{% endif %}
<article class="outreach-card" data-kind="{{ kind }}">
  <span class="outreach-meta">{% if kind == 'event' %}Event{% else %}Research Story{% endif %}</span>
  <span class="outreach-byline">{{ item.date | date: "%B %-d, %Y" }}{% if item.author %} · {{ item.author | escape }}{% endif %}</span>
  <h2 class="outreach-title"><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h2>
  {% if item.venue %}<p class="outreach-venue">{{ item.venue | escape }}</p>{% endif %}
  {% if kind == 'event' and item.headline %}<p class="outreach-desc">{{ item.headline | escape }}</p>{% elsif item.description %}<p class="outreach-desc">{{ item.description | escape }}</p>{% endif %}
  <a class="outreach-action" href="{{ item.url | relative_url }}" aria-label="{% if kind == 'event' %}View event details{% else %}Read research story{% endif %}: {{ item.title | escape }}">{% if kind == 'event' %}View event details →{% else %}Read research story →{% endif %}</a>
</article>
{% endfor %}</div>
<p id="outreachNoResults" class="outreach-empty" style="display:none;" markdown="0">Nothing here yet in this category.</p>
{% else %}
<p class="outreach-empty" markdown="0">No outreach items have been published yet.</p>
{% endif %}
