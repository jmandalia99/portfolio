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
