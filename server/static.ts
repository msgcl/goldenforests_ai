import express, { type Express } from "express";
import fs from "fs";
import path from "path";

const frontendPaths = new Set([
  "/",
  "/investment",
  "/investment/agarwood",
  "/investment/mango",
  "/golden-forests-group",
  "/plantation",
  "/asset-management",
  "/services",
  "/disclaimer",
  "/privacy-policy",
  "/cookie-policy",
  "/contact",
  "/admin",
  "/admin/login",
]);

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (req, res) => {
    const normalizedPath = req.path.replace(/\/+$/, "") || "/";
    const status = frontendPaths.has(normalizedPath) ? 200 : 404;
    res.status(status).sendFile(path.resolve(distPath, "index.html"));
  });
}
