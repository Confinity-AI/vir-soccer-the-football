/**
 * @typedef {{ virSoccerRoot: string }} Paths
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/** Find folder that contains package.json (handles zip with one nested dir). */
export function findProjectRoot(extractDir) {
  const atRoot = path.join(extractDir, "package.json");
  if (fs.existsSync(atRoot)) return extractDir;
  const entries = fs.readdirSync(extractDir, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory());
  if (dirs.length === 1) {
    const sub = path.join(extractDir, dirs[0].name);
    if (fs.existsSync(path.join(sub, "package.json"))) return sub;
  }
  throw new Error(
    `Could not find package.json under ${extractDir}. Is this a Next.js / Node project export?`,
  );
}

export function expandZip(zipPath, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  execFileSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `Expand-Archive -LiteralPath ${JSON.stringify(zipPath)} -DestinationPath ${JSON.stringify(destDir)} -Force`,
    ],
    { stdio: "inherit" },
  );
}

const KEEP_IN_SCRIPTS = new Set([
  "download-v0-backup.mjs",
  "apply-v0-zip.mjs",
  "v0-project-tools.mjs",
]);

function backupOurScripts(virSoccerRoot) {
  const scriptsDir = path.join(virSoccerRoot, "scripts");
  if (!fs.existsSync(scriptsDir)) return null;
  const tmp = path.join(
    process.env.TEMP || "/tmp",
    `vir-soccer-tools-${Date.now()}`,
  );
  fs.mkdirSync(tmp, { recursive: true });
  for (const name of KEEP_IN_SCRIPTS) {
    const p = path.join(scriptsDir, name);
    if (fs.existsSync(p)) {
      fs.copyFileSync(p, path.join(tmp, name));
    }
  }
  return tmp;
}

function restoreOurScripts(virSoccerRoot, backupDir) {
  if (!backupDir || !fs.existsSync(backupDir)) return;
  const scriptsDir = path.join(virSoccerRoot, "scripts");
  fs.mkdirSync(scriptsDir, { recursive: true });
  for (const name of KEEP_IN_SCRIPTS) {
    const from = path.join(backupDir, name);
    if (fs.existsSync(from)) {
      fs.copyFileSync(from, path.join(scriptsDir, name));
    }
  }
  try {
    fs.rmSync(backupDir, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}

/** Remove everything under virSoccerRoot except .git */
export function clearProjectExceptGit(virSoccerRoot) {
  if (!fs.existsSync(virSoccerRoot)) {
    throw new Error(`Missing project root: ${virSoccerRoot}`);
  }
  for (const name of fs.readdirSync(virSoccerRoot)) {
    if (name === ".git") continue;
    fs.rmSync(path.join(virSoccerRoot, name), { recursive: true, force: true });
  }
}

/** Copy all files/folders from projectRoot into virSoccerRoot (dest must exist). */
export function copyProjectTree(projectRoot, virSoccerRoot) {
  for (const name of fs.readdirSync(projectRoot)) {
    const from = path.join(projectRoot, name);
    const to = path.join(virSoccerRoot, name);
    fs.cpSync(from, to, { recursive: true });
  }
}

/**
 * Replace placeholder site with v0 export. Keeps .git and restores import helper scripts.
 */
export function applyExtractedToVirSoccer(extractedDir, virSoccerRoot) {
  const projectRoot = findProjectRoot(extractedDir);
  const scriptBackup = backupOurScripts(virSoccerRoot);
  clearProjectExceptGit(virSoccerRoot);
  copyProjectTree(projectRoot, virSoccerRoot);
  restoreOurScripts(virSoccerRoot, scriptBackup);
}

export function runNpmInstall(virSoccerRoot) {
  execFileSync("npm", ["install"], {
    cwd: virSoccerRoot,
    stdio: "inherit",
    shell: true,
  });
}
