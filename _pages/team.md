---
title: "Beyond Defense Lab - Team"
layout: gridlay
excerpt: "Beyond Defense Lab: Team members"
sitemap: false
permalink: /team/
---

<div class="team-page" markdown="1">

# Group Members

<!-- <div class="team-search-wrap">
  <input type="search" id="teamSearch" placeholder="Search by name or degree" autocomplete="off" />
</div> -->


<!-- ## Current
<div id="current"></div> -->

<div class="row row-faculty">
{% for member in site.data.team_members limit:2 %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="team-photo" />
  <h4>{{ member.name }}</h4>
  <span class="team-role">{{ member.info }}</span>
  <span class="team-role">{{ member.duration }}</span>
</div>
{% endfor %}
</div>

{% assign number_printed = 0 %}
{% for member in site.data.team_members offset:2 %}

{% assign mod4 = number_printed | modulo: 4 %}

{% if mod4 == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="team-photo" />
  <h4>{{ member.name }}</h4>
  <span class="team-role">{{ member.info }}</span>
  {% if member.duration and member.duration != "b" %}<span class="team-duration">{{ member.duration }}</span>{% endif %}
  {% if member.highlight and member.highlight != "b" %}<span class="team-highlight">{{ member.highlight }}</span>{% endif %}
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if mod4 == 3 %}
</div>
{% endif %}

{% endfor %}

{% assign leftover = number_printed | modulo: 4 %}
{% if leftover != 0 %}
</div>
{% endif %}



## Frequent Collaborators
<div id="collaborators"></div>
<div class="collab-grid">
{% for c in site.data.collaborators %}
<div class="collab-card">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ c.photo }}" class="collab-photo" />
  <h4>{{ c.name }}</h4>
  <span class="collab-affil">{{ c.affiliation }}</span>
  <span class="collab-note">{{ c.note }}</span>
</div>
{% endfor %}
</div>

## Alumni
<div id="alumni"></div>
{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="team-photo" />
  <h4>{{ member.name }}</h4>
  <span class="team-role">{{ member.info }}</span>
  <span class="team-duration">{{ member.duration }}</span>
  <span class="team-highlight">{{ member.highlight }}</span>
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

## Visitors
<div id="lab-visitors"></div>
<div class="visitors-grid">
<div class="visitors-card">
<h4>Master Students</h4>
<ul>{% for member in site.data.alumni_msc %}<li>{{ member.name }}</li>{% endfor %}</ul>
</div>
<div class="visitors-card">
<h4>Undergrad Students</h4>
<ul>{% for member in site.data.alumni_bsc %}<li>{{ member.name }}</li>{% endfor %}</ul>
</div>
</div>

</div><!-- /.team-page -->
