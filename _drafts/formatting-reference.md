---
title: Formatting reference
subtitle: Everything the site can render, in one place. Lives in _drafts/, so it never publishes.
date: 2026-11-04
tags: [meta]
math: true
---

Run `bundle exec jekyll serve --drafts` to preview this page locally.

* TOC
{:toc}

## Text

Regular paragraphs, **bold**, *italic*, `inline code`, ==highlight== is not standard Markdown — use <mark>mark tags</mark> instead. [Links](https://example.com) are underlined subtly.

A paragraph can be turned into a callout box by adding `{: .callout}` on the line right after it.
{: .callout}

## Quotes

> Blockquotes get a left rule. They can span
> multiple paragraphs.
>
> — Someone quotable

## Lists

- Unordered
- Lists
  - Nested

1. Ordered
2. Lists

## Footnotes

Claims that need a citation get a footnote.[^cite] Multiple footnotes are numbered automatically.[^two]

[^cite]: Source: a footnote, with a [link](https://example.com).
[^two]: A second footnote.

## Math

Set `math: true` in the front matter. Inline: $$e^{i\pi} + 1 = 0$$ inside a sentence. Display (on its own line):

$$
\mathbb{E}[X] = \sum_{i} p_i x_i
$$

## Tables

| Scenario | Probability | Notes |
|---|---:|---|
| Base case | 60% | Most likely |
| Upside | 25% | |
| Downside | 15% | |

## Code

```python
def expected_value(outcomes):
    return sum(p * x for p, x in outcomes)
```

## Images

![Alt text describing the image](https://picsum.photos/seed/blog/1200/600)
*Captions: an italic line directly under an image.*

---

A horizontal rule (`---`) renders as a section break.
