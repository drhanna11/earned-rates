# Earned Rates

Static directory of verified military discounts. Built for GitHub Pages with no build server: plain HTML, CSS, and a small JavaScript filter.

- Proposed public site: https://earned-rates.github.io
- Suggested GitHub repository: `earned-rates` (or `earned-rates.github.io` for a user/organization site at the root)
- Verification pass in this batch: November 18, 2026 (America/Los_Angeles)

## Local preview

```bash
cd site
python3 -m http.server 8080
```

Open http://127.0.0.1:8080/

## Deploy on GitHub Pages

1. Create the `earned-rates` (or `earned-rates.github.io`) repository.
2. Push this `site/` directory as the repository root, or set Pages to the `site` folder if you keep the parent repo.
3. In the repository, enable GitHub Pages: Deploy from a branch, `/` (root), `main`.
4. After sign-in is available on the publishing computer, add the remote and push. Do not invent a remote until then.
5. Optional: point a custom domain at the Pages site and add a `CNAME` file. Update `CANONICAL` in `tools/build_site.py` and regenerate, or search-replace the host in `sitemap.xml` and canonical tags.

## Regenerating pages

Deal copy and templates live in `../tools/build_site.py`. After editing:

```bash
python3 ../tools/build_site.py
```

Do not hand-edit generated HTML if you plan to regenerate; edit the generator or the CSS/JS instead. `css/styles.css`, `js/site.js`, and `favicon.svg` are source files and are not overwritten.

## Affiliate IDs

Buttons currently use official program URLs. When an affiliate application is approved, swap the href and keep the disclosure. Never point a “military rate” button at a public rate that does not include the official benefit.
