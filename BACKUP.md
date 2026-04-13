# Full backup of the real v0 site + fix GitHub

The preview you see in v0 is stored on v0’s servers. The GitHub repo was a **placeholder** until you import the real export here and push again.

Pick **one** path:

---

## A) API download + replace this project (recommended)

Creates a ZIP under `Desktop\AmalgamSites\backups\...` **and** copies the real app into `vir_soccer` (keeps `.git`).

1. API key: [v0.dev/chat/settings/keys](https://v0.dev/chat/settings/keys)
2. PowerShell:

```powershell
cd C:\Users\ryana\Desktop\AmalgamSites\sites\vir_soccer
$env:V0_API_KEY = "v0_your_key"
npm run backup:v0:apply
```

Or put `V0_API_KEY=...` in `.env.local` (see `backup-v0.env.example`), then:

```powershell
npm run backup:v0:apply
```

3. Verify: `npm run dev` → then commit + push (see [GITHUB-AND-V0.md](./GITHUB-AND-V0.md)).

---

## B) Manual ZIP from v0 (no API key)

1. In **v0.app** (logged in), open your chat → **Download ZIP** (or `tar` in v0’s terminal).
2. Run (use your real path to the file):

```powershell
cd C:\Users\ryana\Desktop\AmalgamSites\sites\vir_soccer
node scripts/apply-v0-zip.mjs "C:\Users\ryana\Downloads\your-export.zip"
```

3. Same as above: `npm run dev`, then git commit + push.

---

## API: ZIP only (no replace)

Same as path **A**, but run `npm run backup:v0` instead of `backup:v0:apply`. Outputs:

- **ZIP:** `Desktop\AmalgamSites\backups\v0-vir-soccer-real\vir-soccer-academy-<timestamp>.zip`
- **Extracted:** `Desktop\AmalgamSites\backups\v0-vir-soccer-real\extracted-<timestamp>\`

You can open that folder or run `node scripts/apply-v0-zip.mjs` on the ZIP later.
