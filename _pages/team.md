---
title: "Beyond Defense Lab - Team"
layout: gridlay
excerpt: "Beyond Defense Lab: Team members"
sitemap: false
permalink: /team/
---

<main class="team-page" markdown="0">
  <h1>Group Members</h1>
  <section aria-labelledby="current-title">
    <h2 id="current-title">Members</h2>
    <div class="team-profile-grid team-faculty-grid">
      {% for member in site.data.team_members limit:2 %}
        {% include team-profile.html person=member %}
      {% endfor %}
    </div>
    <div class="team-profile-grid">
      {% for member in site.data.team_members offset:2 %}
        {% unless member.name == 'This could be you !' %}
          {% include team-profile.html person=member %}
        {% endunless %}
      {% endfor %}
      {% for member in site.data.alumni_members %}
        {% include team-profile.html person=member %}
      {% endfor %}
    </div>
  </section>

  <section id="collaborators" aria-labelledby="collaborators-title">
    <h2 id="collaborators-title">Frequent Collaborators</h2>
    <div class="team-profile-grid">
      {% for c in site.data.collaborators %}
      <article class="team-profile">
        <img src="{{ '/images/teampic/' | append: c.photo | relative_url }}" class="team-photo" width="110" height="110" loading="lazy" decoding="async" alt="{{ c.name | strip_html | strip | escape }}">
        <h3>{{ c.name }}</h3>
        <span class="team-role">{{ c.affiliation }}</span>
        {% if c.note %}<span class="team-highlight">{{ c.note }}</span>{% endif %}
      </article>
      {% endfor %}
    </div>
  </section>



  <section id="lab-visitors" aria-labelledby="visitors-title">
    <h2 id="visitors-title">Visitors</h2>
    <div class="team-history-grid">
      <div>
        <h3>Master’s Students</h3>
        <ul>{% for member in site.data.alumni_msc %}<li>{{ member.name }}</li>{% endfor %}</ul>
      </div>
      <div>
        <h3>Undergraduate Students</h3>
        <ul>{% for member in site.data.alumni_bsc %}<li>{{ member.name }}</li>{% endfor %}</ul>
      </div>
    </div>
  </section>

  <section class="team-join" aria-labelledby="team-join-title">
    <h2 id="team-join-title">Join the lab</h2>
    <p>Interested in working with us? Explore our <a href="{{ '/research/' | relative_url }}">research</a> and <a href="{{ '/vacancies' | relative_url }}">opportunities to join the lab</a>.</p>
  </section>
</main>
