# tashriif.com

Static site for Tahmidur Rahman — CV and analysis portfolio, deployed on Netlify.

| Path | Page |
|---|---|
| `/` | Home |
| `/cv/` | CV (Premium + ATS views) |
| `/analysis/` | My Analysis — portfolio hub |
| `/analysis/sewing/` | Eurotex Sewing Pulse — live dashboard from Google Sheets |
| `/analysis/sewing-review/` | Eurotex Group Sewing Performance Review 2026 — target vs achievement (management review) |

No build step: Netlify publishes the repository root (see `netlify.toml`). Push to `main` to deploy.

## Sewing Review — monthly update
The review page reads the "Sewing Summary Report" Google Sheet when it opens on tashriif.com.
For a new month tab, add its name and gid (the number after `#gid=` in the tab URL) in columns A:B of the sheet's **Tabs** tab.
