---
layout: layouts/base.njk
pagination:
    data: posts
    size: 1
    alias: post
permalink: post/{{ post.title | slug }}/
---

<div class="post">
    <h2>{{ post.id }}.{{ post.title }}</h2>
    <P>{{ post.body }}</p>
</div>

<a href="/post">Back</a>