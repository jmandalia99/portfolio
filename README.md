# jinalmandalia.com

Personal website of Jinal Mandalia — live at https://www.jinalmandalia.com

## Change the content
All text (journey, research, skills, certifications…) is in **`src/content.js`**.
Photos are in `public/images/`, the resume is `public/resume.pdf` (keep the same file names).

## Publish changes
```bash
npm install        # first time only
npm start          # preview at http://localhost:3000
npm run deploy     # builds and publishes to GitHub Pages
```
Then save the source too: `git add . && git commit -m "update" && git push`.

`public/CNAME` keeps the custom domain connected on every deploy — don't delete it.

## Visitor tracking (Google Analytics)
Reports: https://analytics.google.com

- **Personal links** — give each application its own link: `https://www.jinalmandalia.com/?r=amazon-tpm`.
  In GA: Reports → Acquisition → Traffic acquisition → *Session source* shows `amazon-tpm`.
  Standard `?utm_source=...` links work too.
- **Don't count your own visits** — open `https://www.jinalmandalia.com/?me=1` once on each of your devices
  (`?me=0` turns it back on).
- **Events** (Reports → Engagement → Events):
  `section_about`, `section_journey`, `section_research`, `section_projects`, `section_skills`,
  `section_education`, `section_certifications`, `section_beyond`, `section_contact` — which parts people scrolled to;
  `resume_open`, `email_click`, `email_copy`, `linkedin_click`, `github_click`, `journey_open`,
  `research_stage`, `project_filter`, `project_open`, `project_github`, `project_paper`, `certificate_open`,
  `personal_link_visit`.
- To see details like *which* project was opened, register these event parameters once in
  GA → Admin → Custom definitions → Create custom dimension (scope: Event):
  `project_name`, `role`, `ref`, `from`, `certificate`, `stage`.
