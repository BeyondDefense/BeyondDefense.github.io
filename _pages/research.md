---
title: "Beyond Defense Lab - Research"
layout: research
excerpt: "Beyond Defense Lab -- Research"
sitemap: false
permalink: /research/
---

<main class="research-agenda" markdown="0">
  <header class="agenda-intro">
    <h1>Our Research</h1>
    <p class="agenda-headline">Protecting people and society through cybersecurity research.</p>
    <p>At Beyond Defense Lab, we investigate security threats to technologies that enable individual freedom and sustain essential societal functions. Our research combines empirical measurement, vulnerability discovery, adversarial analysis, and defense development to understand how these technologies can be compromised, and how to make them more secure and resilient.</p>
    <p>Our work focuses on two major research directions, Internet Freedom &amp; Security and Space Security &amp; Resilience. These efforts are complemented by our broader research interest in security analysis and vulnerability discovery.</p>
    <nav class="agenda-nav" aria-label="Research sections">
      <a href="#internet-security">Internet Security</a>
      <a href="#space-security">Space Security</a>
      <a href="#security-analysis">Security Analysis</a>
      <a href="#research-methods">Research Methods</a>
    </nav>
  </header>

  {% for direction in site.data.research_agenda.directions %}
  <section id="{{ direction.id }}" class="agenda-direction{% if direction.complementary %} agenda-complementary{% endif %}" aria-labelledby="{{ direction.id }}-title">
    <h2 id="{{ direction.id }}-title">{{ direction.title | escape }}</h2>
    <p class="agenda-tagline">{{ direction.tagline | escape }}</p>
    <div class="agenda-description">
      {% for paragraph in direction.paragraphs %}<p>{{ paragraph | escape }}</p>{% endfor %}
    </div>
    {% if direction.question %}
    <div class="agenda-question">
      <p class="agenda-question-label">Research question</p>
      <p>{{ direction.question | escape }}</p>
    </div>
    {% endif %}
    <div class="agenda-themes">
      {% for theme in direction.themes %}
      <div class="agenda-theme">
        <h3>{{ theme.title | escape }}</h3>
        <p>{{ theme.description | escape }}</p>
        {% if theme.topics %}<p class="agenda-topics"><span>Research themes:</span> {{ theme.topics | escape }}</p>{% endif %}
        {% capture venue_links %}{% assign separator = '' %}{% for reference in theme.publications %}{% for paper in site.data.publist %}{% if paper.title contains reference.match %}{{ separator }}{% assign paper_url = paper.link.url | default: '' | strip %}{% if paper_url != 'https://' and paper_url != blank %}<a href="{{ paper_url | escape }}" title="{{ paper.title | escape }}">{{ reference.label | escape }}</a>{% else %}<span title="{{ paper.title | escape }}">{{ reference.label | escape }}</span>{% endif %}{% assign separator = ' · ' %}{% break %}{% endif %}{% endfor %}{% endfor %}{% endcapture %}
        {% assign venue_links = venue_links | strip %}
        {% if venue_links != '' %}<p class="agenda-publications"><span>Publications:</span> {{ venue_links }}</p>{% endif %}
      </div>
      {% endfor %}
    </div>
  </section>
  {% endfor %}

  <section id="research-methods" class="agenda-methods" aria-labelledby="research-methods-title">
    <h2 id="research-methods-title">How We Conduct Research</h2>
    <p>Our research spans networks, applications, software, and cyber-physical systems. We combine empirical investigation, adversarial experimentation, and defense development to understand and mitigate real-world security risks.</p>
    <ul>
      <li>Internet-Scale Measurement</li>
      <li>Network &amp; Protocol Analysis</li>
      <li>Program &amp; Software Analysis</li>
      <li>Malware Analysis</li>
      <li>Vulnerability Discovery &amp; Management</li>
      <li>Threat Modeling</li>
      <li>Adversarial Experimentation</li>
      <li>Defense Design &amp; Evaluation</li>
    </ul>
  </section>
  <section class="agenda-participate" aria-labelledby="participate-title">
    <h2 id="participate-title">Interested in working with us?</h2>
    <p>If you are interested in collaborating on these research questions, <a href="mailto:{{ site.email | escape }}">drop an email</a>. Prospective students can explore <a href="{{ '/vacancies' | relative_url }}">opportunities to join the lab</a>.</p>
  </section>
</main>
