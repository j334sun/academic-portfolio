# Jacquelyn Sun — Academic Portfolio

A responsive academic portfolio for Jialu Jacquelyn Sun, an MSc student in Statistics at Western University. Designed for PhD applications, research collaborations, and opportunities in statistics and machine learning.

## Design

Warm ivory, forest green, serif headings, generous spacing, and a decorative probability-curve illustration. Includes research, manuscripts and conference contributions, selected projects, applied experience, teaching, education, contact links, and a print-friendly academic CV.

## Run locally

The site is plain HTML, CSS, and JavaScript with no build step or external dependencies.

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. In the GitHub copy, the website files are at the repository root, so use `python3 -m http.server 8080`.

## Edit

- `dist/index.html`: portfolio content
- `dist/cv.html`: printable academic CV
- `dist/styles.css`: layout, colors, and mobile/print styling
- `dist/script.js`: copyright year and CV print action
- `dist/favicon.svg`: site icon

The GitHub copy places these files at the repository root. Use the CV page's Print / Save as PDF button for a browser-generated PDF.

## Hosting

Deployed with ChatGPT Sites at https://jacquelyn-academic-portfolio.toasty-charm-4581.chatgpt.site . The deployed website is public. The public GitHub repository is a separate source copy; a GitHub commit does not automatically redeploy the Sites version. The static files can also be deployed to any static host.

## Content

Academic content follows the supplied CV revised October 15, 2026. The newer CV takes precedence over the older résumé when dates differ. Manuscripts are explicitly labelled in preparation. Phone number and personal address are not included. The probability curves are decorative rather than results from a study.
