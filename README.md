# Pursuit of Curiosity

A personal site for essays and notes, built with [Jekyll](https://jekyllrb.com/) and hosted free on GitHub Pages at **https://cam-hash-glitch.github.io**.

## One-time setup

1. Merge this branch into `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, branch `main`, folder `/ (root)`.
3. Edit `_config.yml`: set `title`, `tagline`, and the `author` block (name, one-line headline, photo, links). Put a square photo at `assets/img/avatar.jpg` and set `author.avatar: /assets/img/avatar.jpg`.
4. Write the "about me" text shown on the home page in `_includes/intro.md`.
5. Rewrite `about.md`, and replace or delete the sample essay and note.

GitHub rebuilds the site automatically on every push to `main` (usually within a minute).

## Writing

| What | Where | Filename |
|---|---|---|
| Blog post | `_posts/` | `YYYY-MM-DD-slug.md` |
| Note (short) | `_notes/` | `YYYY-MM-DD-slug.md` |
| Unfinished draft | `_drafts/` | `slug.md` (never published) |

The minimum file:

```markdown
---
title: My essay title
---

Text goes here, in Markdown.
```

Optional front-matter fields:

```yaml
subtitle: One-sentence dek shown under the title and in listings
description: Overrides the excerpt used in listings, search engines, and social previews
tags: [economics, ai]
featured: true        # blog posts only: show under "Suggested reading" on the home page (up to 3)
updated: 2026-12-01   # shows an "Updated" line
math: true            # load KaTeX; write $$...$$ for math
image: /assets/img/cover.png   # social-preview image
```

Footnotes (`text[^1]` … `[^1]: note`), tables, a table of contents (`* TOC` then `{:toc}` on the next line), callout boxes (`{: .callout}` after a paragraph), and math are shown in `_drafts/formatting-reference.md`.

Images: put them in `assets/img/` and reference them as `![alt text](/assets/img/name.png)`.

You can write entirely in the GitHub web UI: open `_posts/`, click **Add file → Create new file**, and name it `2026-11-05-my-title.md`.

## Site structure

- `/`: about-me intro, suggested reading, latest blog posts, recent notes
- `/blog/`: all blog posts, grouped by year
- `/notes/`: running stream of the 30 newest notes, shown in full
- `/archive/`: everything, with a title/tag filter and an essays/notes toggle
- `/tags/`, `/about/`, `/subscribe/`
- Feeds: `/feed.xml` (blog), `/feed/notes.xml` (notes)

## Email subscriptions

GitHub Pages is static, so it can't send email itself. By default the subscribe boxes show RSS links. To collect emails, create a free list with a service such as Buttondown, then put its form endpoint in `_config.yml` under `newsletter.action`, and the boxes become an email form.

## Previewing locally (optional)

Requires Ruby 3.x.

```bash
bundle install
```

```bash
bundle exec jekyll serve --drafts
```

Then open http://localhost:4000. The `Gemfile` pins the `github-pages` gem, so local builds match production.

## Customizing the look

All styling is in `assets/css/main.css`. Colors are CSS variables at the top: light theme in `:root`, dark theme below it. Change `--accent` to restyle links and buttons.
