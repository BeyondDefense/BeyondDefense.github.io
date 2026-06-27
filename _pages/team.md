---
title: "Beyond Defense Lab - Team"
layout: gridlay
excerpt: "Beyond Defense Lab: Team members"
sitemap: false
permalink: /team/
---

<div class="team-page" markdown="1">

# Group Members

<div class="team-search-wrap">
  <input type="search" id="teamSearch" placeholder="Search by name, degree, or institution…" autocomplete="off" />
</div>

Jump to [current](#current), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [lab visitors](#lab-visitors).

## Current
<div id="current"></div>

<div class="row row-faculty">
{% for member in site.data.team_members limit:2 %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="team-photo" />
  <h4>{{ member.name }}</h4>
  <span class="team-role">{{ member.info }}</span>
  <ul class="team-edu">
  {% if member.number_educ >= 1 %}<li>{{ member.education1 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 2 %}<li>{{ member.education2 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 3 %}<li>{{ member.education3 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 4 %}<li>{{ member.education4 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 5 %}<li>{{ member.education5 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  </ul>
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
  <ul class="team-edu">
  {% if member.number_educ >= 1 %}<li>{{ member.education1 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 2 %}<li>{{ member.education2 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 3 %}<li>{{ member.education3 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 4 %}<li>{{ member.education4 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  {% if member.number_educ >= 5 %}<li>{{ member.education5 | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>{% endif %}
  </ul>
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

## Master and Bachelor Students
<div id="master-and-bachelor-students"></div>
{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="team-photo" />
  <h4>{{ member.name }}</h4>
  <span class="team-role">{{ member.info }}</span>
  <ul class="team-edu">
  {% if member.number_educ >= 1 %}<li>{{ member.education1 }}</li>{% endif %}
  {% if member.number_educ >= 2 %}<li>{{ member.education2 }}</li>{% endif %}
  {% if member.number_educ >= 3 %}<li>{{ member.education3 }}</li>{% endif %}
  {% if member.number_educ >= 4 %}<li>{{ member.education4 }}</li>{% endif %}
  </ul>
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

## Lab Visitors
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
