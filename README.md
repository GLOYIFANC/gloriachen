# Gloria Chen — Personal Academic Website

A static personal website (no build step) for hosting on GitHub Pages, a university
web server, or any static host.

## Structure

```
Personal Website/
├── index.html        # About (photo, bio, contact, references)
├── research.html     # Work in progress + interactive flip-card findings
├── teaching.html     # Subjects taught + teaching-references placeholder
├── cv.html           # Web CV + link to the PDF
├── fun.html          # "Beyond Academia" — personalise the cards
├── styles.css        # Shared styling (Warm Browns palette)
├── script.js         # Nav toggle, flip cards, scroll reveal
└── assets/
    ├── profile.jpg            # Profile photo (resized)
    └── Gloria_Chen_CV.pdf     # Downloadable CV
```

## Colour palette — "Warm Browns"

| Name      | Hex       | Role                     |
|-----------|-----------|--------------------------|
| Champagne | `#EACEAA` | light warm tint          |
| Whiskey   | `#D39858` | primary accent           |
| Honey     | `#85431E` | deep accent / links      |
| Coffee    | `#34150F` | dark text / dark panels  |
| Balsamico | `#150C0C` | near-black               |

## Preview locally

From inside this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. (Opening `index.html` directly also works,
but a local server most closely matches GitHub Pages.)

## Deploy to GitHub Pages

1. Create a new GitHub repository. For a personal site at
   `https://<username>.github.io`, name the repo exactly `<username>.github.io`.
   (Any repo name also works — it will live at `https://<username>.github.io/<repo>/`.)
2. Put these files at the **root** of the repo (so `index.html` is at the top level).
3. Push to the `main` branch.
4. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   choose `main` / `(root)`, and Save.
5. Wait ~1 minute; your site appears at the URL shown on that settings page.

## Updating content

- **Bio / contact / references** — `index.html`
- **Papers & key-findings flip cards** — `research.html` (each paper is an `<article class="paper">`)
- **Teaching subjects & student quotes** — `teaching.html` (see `<!-- TEACHING QUOTES -->`)
- **CV entries** — `cv.html`, and replace `assets/Gloria_Chen_CV.pdf` to update the download
- **Hobbies** — `fun.html` (see `<!-- FUN CARDS -->`)

To update the profile photo, replace `assets/profile.jpg` (portrait orientation works best).
