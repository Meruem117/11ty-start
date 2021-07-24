---
title: Post
layout: layouts/base.njk
pagination:
    data: posts
    size: 10
    alias: posts
---

{% for post in posts %}
<div class="post">
    <h2>
        <a href="/post/{{ post.title | slug }}/">
            {{ post.id }}.{{ post.title }}
        </a>
    </h2>
    <P>{{ post.body }}</p>
</div>
{% endfor %}

{% set page_index = 1 %}
{% for page in pagination.hrefs %}
<a href="{{ page }}">{{ page_index }}</a>
{% set page_index = page_index + 1 %}
{% endfor %}