---
title: "News"
layout: textlay
excerpt: "Beyond Defense Lab at University of New Mexico."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p>
    <em>{{ article.date }}</em>: {{ article.headline | markdownify | remove: '<p>' | remove: '</p>' }}
</p>
{% endfor %}
