# Full backup of the real v0 site (official API)

The preview you see in v0 is stored on v0’s servers. To save **the actual generated files** to this PC, use the **v0 Platform API** (same archive as “Download ZIP” in the UI).

## One-time: API key

1. Open [v0 API keys](https://v0.dev/chat/settings/keys).
2. Create a key and copy it (starts with `v0_`).

## Run the backup script

From **PowerShell**:

```powershell
cd C:\Users\ryana\Desktop\AmalgamSites\sites\vir_soccer
$env:V0_API_KEY = "v0_paste_your_key_here"
node scripts/download-v0-backup.mjs
```

Or put the key in **`.env.local`** (gitignored; see `backup-v0.env.example`):

```env
V0_API_KEY=v0_paste_your_key_here
```

Then:

```powershell
node scripts/download-v0-backup.mjs
```

## Where files go

- **ZIP:** `Desktop\AmalgamSites\backups\v0-vir-soccer-real\vir-soccer-academy-<timestamp>.zip`
- **Extracted folder:** `Desktop\AmalgamSites\backups\v0-vir-soccer-real\extracted-<timestamp>\`

That extracted folder is a full copy of the project you can open in an editor or merge into `sites/vir_soccer`.

## npm shortcut

```powershell
npm run backup:v0
```

(after `V0_API_KEY` is set as above)
