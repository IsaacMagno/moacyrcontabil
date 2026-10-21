import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import os from "os";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "docs", "plano-assinatura-manutencao.html");
const pdfPath = path.join(root, "docs", "plano-assinatura-manutencao.pdf");

const require = createRequire(import.meta.url);

function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    path.join(
      os.homedir(),
      "AppData",
      "Local",
      "Google",
      "Chrome",
      "Application",
      "chrome.exe"
    ),
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

async function main() {
  if (!fs.existsSync(htmlPath)) {
    console.error("HTML não encontrado:", htmlPath);
    process.exit(1);
  }

  let puppeteer;
  try {
    puppeteer = require("puppeteer");
  } catch {
    console.log("Instalando puppeteer...");
    const { execSync } = await import("child_process");
    execSync("npm install --no-save puppeteer", { cwd: root, stdio: "inherit" });
    puppeteer = require("puppeteer");
  }

  const executablePath = findChrome();
  const launchOpts = { headless: true };
  if (executablePath) {
    launchOpts.executablePath = executablePath;
    console.log("Chrome:", executablePath);
  }

  const browser = await puppeteer.launch(launchOpts);
  const page = await browser.newPage();
  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
  });
  await page.evaluateHandle("document.fonts.ready");
  await new Promise((r) => setTimeout(r, 800));
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await browser.close();
  console.log("PDF gerado:", pdfPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
