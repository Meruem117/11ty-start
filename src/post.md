---
title: Post
layout: layouts/base.njk
---

{% for post in posts %}
<div class="post">
    <h2>
        <a href="#">
            {{ post.id }}.{{ post.title }}
        </a>
    </h2>
    <P>{{ post.body }}</p>
</div>
{% endfor %}