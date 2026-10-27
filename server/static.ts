import { applyHtmlSeo } from "./htmlSeo";
import { pagePaths } from "@shared/pagePaths";
import express, { type Express } from "express";
import fs from "fs";
import path from "path";

const frontendPaths = new Set<string>([...Object.values(pagePaths), "/admin", "/admin/login"]);

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const template = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
  app.get("/index.html", (_req, res) => res.redirect(301, "/home"));
  app.use(express.static(distPath, { index: false }));

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (req, res) => {
    const normalizedPath = req.originalUrl.split("?")[0].replace(/\/+$/, "") || "/";
    const status = frontendPaths.has(normalizedPath) ? 200 : 404;
    if (status === 404) res.setHeader("X-Robots-Tag", "noindex, nofollow");
    res.status(status).type("html").send(applyHtmlSeo(template, normalizedPath));
  });
}
