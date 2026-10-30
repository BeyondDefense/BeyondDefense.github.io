---
title: "Beyond Defense Lab - Home"
layout: homelay
excerpt: "Beyond Defense Lab at University of New Mexico"
sitemap: false
permalink: /
---

<div class="home-intro" markdown="0">
  <div class="home-hero">
    <div class="home-hero-text">
  <p class="home-body">We are a cybersecurity research group in the <a href="https://www.cs.unm.edu/">Department of Computer Science</a> at <a href="https://www.unm.edu/">The University of New Mexico</a>, led by Afsah Anwar. We uncover and defend against emerging threats to VPNs, satellites, mobile apps, and web applications through malware analysis, vulnerability research, and threat intelligence.</p>
  <div class="home-ctas">
    <a class="cta-btn cta-primary" href="/team/">Meet the Team</a>
    <a class="cta-btn cta-secondary" href="/research/">Our Research</a>
  </div>
    </div>
    <div class="home-cover">
      <picture>
        <source type="image/webp"
                sizes="(max-width: 767px) 100vw, 530px"
                srcset="{{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-700.webp 700w,
                        {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-1050.webp 1050w,
                        {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-1400.webp 1400w,
                        {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-2100.webp 2100w,
                        {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-2800.webp 2800w">
        <img src="{{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-1400.jpg"
             sizes="(max-width: 767px) 100vw, 530px"
             srcset="{{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-700.jpg 700w,
                     {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-1050.jpg 1050w,
                     {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-1400.jpg 1400w,
                     {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-2100.jpg 2100w,
                     {{ site.url }}{{ site.baseurl }}/images/homepage/lab-group-2800.jpg 2800w"
             width="1400" height="670"
             fetchpriority="high" decoding="async"
             alt="Members of the Beyond Defense Lab outside the Farris Engineering Center at the University of New Mexico">
      </picture>
    </div>
  </div>

  <section class="home-mission" aria-labelledby="home-mission-title">
    <h2 id="home-mission-title">Our mission</h2>
    <p>To protect people and society by advancing the security of technologies essential to freedom, safety, and progress.</p>
  </section>

  <section class="home-impact" aria-labelledby="home-impact-title">
    <h2 class="section-heading" id="home-impact-title">Research Impact</h2>
    <div class="home-impact-row">
      <h3>Security weaknesses uncovered and addressed</h3>
      <div class="home-impact-evidence">
        <p>Our VPN research led to <strong>more than 50 responsible disclosures</strong>. Our analysis of SMS-delivered URLs uncovered personal-data exposure across <strong>177 online services</strong>, with <strong>seven providers fixing vulnerabilities</strong> following disclosure.</p>
        <p class="home-impact-sources"><a href="https://beyondefense.org/downloads/manuscripts/mvpnalyzer.pdf">MVPNalyzer</a> · <a href="https://arxiv.org/pdf/2601.09232">SMS URL research</a> · <a href="https://arstechnica.com/security/2026/01/millions-of-people-imperiled-through-sign-in-links-sent-by-sms/">Ars Technica</a>
        </p>
      </div>
    </div>
    <div class="home-impact-row">
      <h3>New threats documented</h3>
      <div class="home-impact-evidence">
        <p>We reveal overlooked attack paths in privacy tools, online services, and spacecraft. A spacecraft attack technique identified through our research is now documented in <strong>The Aerospace Corporation’s SPARTA framework</strong>.</p>
        <p class="home-impact-sources"><a href="{{ '/research/' | relative_url }}">Research directions</a> · <a href="https://sparta.aerospace.org/technique/DE-0012/">SPARTA</a></p>
      </div>
    </div>
    <div class="home-impact-row">
      <h3>Research reaching practitioners</h3>
      <div class="home-impact-evidence">
        <p>Our findings have reached security practitioners through media coverage and recognition from <strong>UK NCSC and Azerbaijani CERT</strong>. Our spacecraft research also prompted <strong>NASA IV&amp;V </strong>to contact us about the work.</p>
        <p class="home-impact-sources"><a href="https://ctoatncsc.substack.com/p/cto-at-ncsc-summary-week-ending-february-df7">NCSC newsletter</a> · <a href="https://cert.gov.az/en/news/sms-delivered-login-links-have-created-security-risks-for-millions-of-users-9097">Azerbaijani CERT</a> · <a href="https://securityaffairs.com/183303/hacking/unverified-cots-hardware-enables-persistent-attacks-in-small-satellites-via-spychain.html">Security Affairs</a>
         · <a href="https://beyondefense.org/downloads/manuscripts/Silent_Subversion_FINAL.pdf">Silent Subversion</a>
         </p>
      </div>
    </div>
  </section>
</div>

<div class="home-research-areas" markdown="0">
  <h2 class="section-heading">Research Directions</h2>
  <div class="home-area-grid home-area-grid--2">
    <article class="home-area-card home-direction-card">
      <div class="home-area-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9"/>
          <ellipse cx="12" cy="12" rx="4" ry="9"/>
          <path d="M3 12h18M5 6.5c4 2 10 2 14 0M5 17.5c4-2 10-2 14 0"/>
          <circle cx="3" cy="12" r="1.5" fill="currentColor" stroke="none"/>
          <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none"/>
          <circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      </div>
      <h3>Internet Freedom &amp; Security</h3>
      <p>People rely on Internet services to access information and communicate, yet censorship, surveillance, and insecure privacy tools can put them at risk.</p>
      <p>Our mission is to protect people’s ability to access information and communicate freely and privately, without fear of censorship, surveillance, or retaliation.</p>
      {% include home-publications.html publications=site.data.home_publications.internet %}
    </article>
    <article class="home-area-card home-direction-card">
      <div class="home-area-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <g transform="rotate(-35 12 12)">
            <rect x="9" y="8" width="6" height="8" rx="1"/>
            <path d="M9 12H7m8 0h2M12 8V5m-2-1a2 2 0 0 0 4 0"/>
            <rect x="2" y="9" width="5" height="6" rx=".5"/>
            <rect x="17" y="9" width="5" height="6" rx=".5"/>
            <path d="M4.5 9v6M19.5 9v6M2 12h5m10 0h5" stroke-width="1"/>
          </g>
          <path d="M3 19c3 3 10 3 14 0"/>
        </svg>
      </div>
      <h3>Space Systems Security</h3>
      <p>Communications, navigation, and other essential services depend on space infrastructure. Security weaknesses in these systems can have consequences on Earth.</p>
      <p>Our mission is to protect society’s dependence on space technologies by securing the infrastructure and services essential to safety, connectivity, and progress.</p>
      {% include home-publications.html publications=site.data.home_publications.space %}
    </article>
  </div>
  <!-- <p class="home-other-research">Our research also spans <a href="/publications/?topic=web">Web &amp; Mobile security</a>, <a href="/publications/?topic=malware">malware and threat intelligence</a>, and related privacy challenges.</p> -->
  <p class="home-research-link"><a href="{{ '/research/' | relative_url }}">Explore our research →</a></p>
</div>

<div class="join-card" markdown="0">
  <div class="join-card-text">
    <h4>Join the Lab</h4>
    <p>We are looking for passionate PhD students and a postdoc to work on real-world security problems.</p>
  </div>
  <a class="cta-btn cta-primary" href="/vacancies">See Open Positions →</a>
</div>

<div class="sponsors-block" markdown="0">
  <p class="sponsors-label">Support &amp; Funding</p>
  <div class="sponsors-logos">
    <div class="support-logo support-logo--nsf">
      <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/NSF.png" width="1722" height="1731" alt="National Science Foundation">
    </div>
    <div class="support-logo support-logo--unm">
      <img class="theme-light" src="{{ site.url }}{{ site.baseurl }}/images/logopic/new-cs-logo.png" width="2364" height="704" alt="UNM Department of Computer Science">
      <img class="theme-dark" src="{{ site.url }}{{ site.baseurl }}/images/logopic/new-cs-logo-dark.png" width="2364" height="704" alt="UNM Department of Computer Science">
    </div>
    <div class="support-logo support-logo--otf">
      <img class="theme-light" src="{{ site.url }}{{ site.baseurl }}/images/logopic/OTF.png" width="250" height="77" alt="Open Technology Fund">
      <img class="theme-dark" src="{{ site.url }}{{ site.baseurl }}/images/logopic/OTF-dark.png" width="250" height="77" alt="Open Technology Fund">
    </div>
  </div>
</div>
