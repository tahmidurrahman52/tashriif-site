# tashriif.com

Static site for Tahmidur Rahman — CV and analysis portfolio, hosted on GitHub Pages (custom domain in `CNAME`).

| Path | Page |
|---|---|
| `/` | Home |
| `/cv/` | CV (Premium + ATS views) |
| `/analysis/` | My Analysis — portfolio hub |
| `/analysis/sewing/` | Eurotex Sewing Pulse — live dashboard from Google Sheets |
| `/analysis/rental-machines/` | Rental Machine Analysis — EKL & Bally Cotton floor audit |
| `/analysis/rental-discrepancy/` | Rental Machine Discrepancy — own stock vs rent, for management discussion |
| `/analysis/sewing-review/` | Eurotex Group Sewing Performance Review 2026 — target vs achievement (management review) |

No build step: GitHub Pages publishes the repository root from `main`. Push to `main` to deploy (live in about a minute).

## Sewing Review — monthly update
The review page reads the "Sewing Summary Report" Google Sheet when it opens on tashriif.com.
For a new month tab, add its name and gid (the number after `#gid=` in the tab URL) in columns A:B of the sheet's **Tabs** tab.
