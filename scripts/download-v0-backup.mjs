/**
 * Downloads the real v0 chat project as a ZIP via the Platform API, then extracts it.
 *
 * Prerequisite: create a v0 API key at https://v0.dev/chat/settings/keys
 * and either:
 *   - set env:  $env:V0_API_KEY = "v0_..."   (PowerShell)
 *   - or create .env.local in this project root with:
 *       V0_API_KEY=v0_...
 *
 * Usage (from project root):
 *   node scripts/download-v0-backup.mjs
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

/** Override if your API uses an internal chat id (see GET response `id`). */
const CHAT_ID =
  process.env.V0_CHAT_ID || "vir-soccer-academy-website-qVQFD5VOV6D";
const API = "https://api.v0.dev/v1";

function loadDotEnvLocal() {
  const p = path.join(ROOT, ".env.local");
  if (!fs.existsSync(p)) return;
  const text = fs.readFileSync(p, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (key === "V0_API_KEY" && !process.env.V0_API_KEY) {
      process.env.V0_API_KEY = val;
    }
  }
}

loadDotEnvLocal();

const apiKey = process.env.V0_API_KEY;
if (!apiKey) {
  console.error(`
Missing V0_API_KEY.

1. Open https://v0.dev/chat/settings/keys and create an API key.
2. In PowerShell (this session only):
     $env:V0_API_KEY = "v0_..."
   Or create ${path.join(ROOT, ".env.local")} with:
     V0_API_KEY=v0_...
3. Run again:
     node scripts/download-v0-backup.mjs
`);
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${apiKey}`,
  Accept: "application/json",
};

async function main() {
  const chatUrl = `${API}/chats/${encodeURIComponent(CHAT_ID)}`;
  const chatRes = await fetch(chatUrl, { headers });
  if (!chatRes.ok) {
    const t = await chatRes.text();
    console.error(`GET ${chatUrl} failed ${chatRes.status}:`, t);
    process.exit(1);
  }
  const chat = await chatRes.json();
  const chatId = chat.id;
  const versionId = chat.latestVersion?.id;
  const status = chat.latestVersion?.status;
  if (!versionId) {
    console.error("No latestVersion on chat:", JSON.stringify(chat, null, 2));
    process.exit(1);
  }
  if (status && status !== "completed") {
    console.warn(`Warning: latestVersion status is "${status}" (expected completed).`);
  }

  const downloadUrl = `${API}/chats/${encodeURIComponent(chatId)}/versions/${encodeURIComponent(versionId)}/download?format=zip&includeDefaultFiles=true`;
  const zipRes = await fetch(downloadUrl, { headers: { Authorization: `Bearer ${apiKey}` } });
  if (!zipRes.ok) {
    const t = await zipRes.text();
    console.error(`Download failed ${zipRes.status}:`, t);
    process.exit(1);
  }

  const buf = Buffer.from(await zipRes.arrayBuffer());
  const backupRoot = path.join(
    process.env.USERPROFILE,
    "Desktop",
    "AmalgamSites",
    "backups",
    "v0-vir-soccer-real",
  );
  fs.mkdirSync(backupRoot, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const zipName = `vir-soccer-academy-${stamp}.zip`;
  const zipPath = path.join(backupRoot, zipName);
  fs.writeFileSync(zipPath, buf);

  const extractDir = path.join(backupRoot, `extracted-${stamp}`);
  fs.mkdirSync(extractDir, { recursive: true });

  execFileSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `Expand-Archive -LiteralPath ${JSON.stringify(zipPath)} -DestinationPath ${JSON.stringify(extractDir)} -Force`,
    ],
    { stdio: "inherit" },
  );

  console.log("\nBackup written:");
  console.log("  ZIP:       ", zipPath);
  console.log("  Extracted: ", extractDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
