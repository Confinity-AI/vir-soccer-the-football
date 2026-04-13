/**
 * Apply a v0 "Download ZIP" (or any export zip) into vir_soccer, replacing the placeholder.
 *
 *   node scripts/apply-v0-zip.mjs "C:\path\to\export.zip"
 *
 * No API key required if you downloaded the zip from v0.app while logged in.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  applyExtractedToVirSoccer,
  expandZip,
  findProjectRoot,
  runNpmInstall,
} from "./v0-project-tools.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VIR_SOCCER = path.join(__dirname, "..");

const argvZip = process.argv.find((a) => a.startsWith("--zip="));
const zipFromFlag = argvZip?.replace(/^--zip=/, "").trim();
const zipArg = process.argv.find((a) => !a.startsWith("-") && a.endsWith(".zip"));
const zipPath = zipFromFlag
  ? path.resolve(zipFromFlag.replace(/^["']|["']$/g, ""))
  : zipArg
    ? path.resolve(zipArg)
    : null;

if (!zipPath || !fs.existsSync(zipPath)) {
  console.error(`
Usage:
  node scripts/apply-v0-zip.mjs "C:\\path\\to\\v0-export.zip"

Or:
  node scripts/apply-v0-zip.mjs --zip=C:\\path\\to\\export.zip
`);
  process.exit(1);
}

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const tempExtract = path.join(
  process.env.TEMP || "/tmp",
  `v0-apply-${stamp}`,
);

try {
  fs.mkdirSync(tempExtract, { recursive: true });
  expandZip(zipPath, tempExtract);
  const inner = findProjectRoot(tempExtract);
  console.log("Detected project root:", inner);
  console.log("Applying into:", VIR_SOCCER);
  applyExtractedToVirSoccer(tempExtract, VIR_SOCCER);
  console.log("Running npm install...");
  runNpmInstall(VIR_SOCCER);
  console.log("\nDone. Run: npm run dev");
  console.log("Then: git status   → commit and push to fix GitHub.");
} finally {
  try {
    fs.rmSync(tempExtract, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}
