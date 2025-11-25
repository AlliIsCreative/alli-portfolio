<!-- .github/copilot-instructions.md: guidance for AI coding agents working on this repo -->

# Copilot / AI agent instructions — Alli Is Creative (Jekyll theme)

Keep suggestions actionable and specific to this repository. This project is a Jekyll theme/repository (theme packaged as a gem) used to build a personal portfolio and blog. Focus on edits that follow the project's structure and conventions listed below.

- **Big picture**: This is a theme-style Jekyll site. Templates live under `_layouts` and `_includes`. Content is provided via `_posts` and a `projects` collection (`_projects`). Static assets live in `assets/` (prebuilt `assets/css/dist-style.css` is checked in).
- **Build / dev workflow**:
  - Install dependencies: `bundle` (uses the `Gemfile`).
  - Local preview: `bundle exec jekyll serve` (the README recommends this). For sites served at root, consider `bundle exec jekyll serve --baseurl ''` to ignore the configured `baseurl`.
  - This repo is distributed as a gem (see `awesome-jekyll-theme.gemspec` and `Rakefile` using `bundler/gem_tasks`). Common gem tasks are available (`rake build`, `rake install`, `rake release`) via bundler tasks.
- **Important config files**:
  - `_config.yml`: site-level settings (collections, plugins, languages, `baseurl`, `contact_channels`). Adjusting language or contact channels here changes site behavior across templates.
  - `Gemfile` / `gemspec`: governs theme gem packaging and runtime dependencies.

- **Key patterns & conventions** (use these when modifying or generating code):
  - Navbar/footer inclusion is controlled by front matter flags: `nav: true` and `footer: true`. If `title` is missing, the filename becomes the label.
  - Project collection: `_projects/` (configured under `collections:` in `_config.yml`). Project items should use front matter consistent with the examples in `_projects/`.
  - Post templates: `_layouts/post.html` expects front matter keys such as `title`, `date`, `author`, `categories`, and optional `image`.
  - Use Liquid filters for URLs and assets: prefer `| relative_url` and the `relative_url` / `absolute_url` helpers to respect `baseurl`.
  - Internationalization: site uses `jekyll-polyglot`. Translations and UI strings live under `_data/[lang]/strings.yml`. Change `default_lang` and `languages` in `_config.yml` to add languages.

- **Assets & styles**:
  - `assets/css/dist-style.css` is the compiled CSS used by the site and is checked into the repo. Source SCSS files live under `assets/css/` (e.g., `fonts.scss`, `style.css`). A `tailwind.config.js` is present — there is no explicit Node/webpack configuration in this repo; if you change SCSS/Tailwind sources you must run your local CSS build (not committed here) to regenerate `dist-style.css` before committing.

- **Packaging notes**:
  - This project is prepared as a theme gem. If you modify files that must be included in the gem, update `awesome-jekyll-theme.gemspec` accordingly (the README mentions bundling `_layouts`, `_includes`, `_sass`, and `assets`).

- **What to change vs what to keep**:
  - Edit templates in `_layouts` and `_includes` for structural/template changes.
  - Edit `_data/*` and `_config.yml` for content, translations, and site-wide options.
  - Avoid large binary or compiled asset changes unless you also include the build step or updated `dist-style.css`.

- **Commands & examples** (copyable):
  - Install deps: `bundle` or `bundle install`
  - Serve locally: `bundle exec jekyll serve`
  - Serve ignoring baseurl (useful when `baseurl` is set): `bundle exec jekyll serve --baseurl ''`
  - Build gem/publish tasks available via Rake (bundler gem tasks): `rake -T`

- **Files to inspect for context when making changes**:
  - `_layouts/*` (especially `default.html`, `post.html`)
  - `_includes/*` (navbar, footer, sharing, comment system)
  - `_posts/*` and `_projects/*`
  - `_data/en/strings.yml` (i18n strings)
  - `assets/` (CSS, JS, images)
  - `_config.yml`, `Gemfile`, `awesome-jekyll-theme.gemspec`, `Rakefile`, `README.md`

If any of these files are missing or you need a build step added (for example, to produce `dist-style.css` from Tailwind/SCSS), ask the maintainer before generating build scripts. After applying changes, prefer small, focused commits and include a short description explaining why the change is needed.

---
If anything above is unclear or you want me to include additional examples (e.g., a sample front matter block for a `project` or `post`), tell me which part to expand. 
