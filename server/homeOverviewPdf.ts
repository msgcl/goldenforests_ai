import {
  PDFDocument,
  StandardFonts,
  rgb,
  type PDFFont,
  type PDFPage,
} from "pdf-lib";
import type { SiteCopy } from "@shared/siteCopy";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_X = 48;
const TOP_MARGIN = 56;
const BOTTOM_MARGIN = 52;

const COLORS = {
  offWhite: rgb(0.984, 0.988, 0.969),
  plantationLight: rgb(0.957, 0.894, 0.757),
  agarwoodGreen: rgb(0.176, 0.314, 0.086),
  mangoLeaf: rgb(0.42, 0.557, 0.137),
  gold: rgb(0.784, 0.627, 0.439),
  body: rgb(0.165, 0.216, 0.18),
  muted: rgb(0.345, 0.404, 0.357),
  white: rgb(1, 1, 1),
};

type PdfContext = {
  pdfDoc: PDFDocument;
  regularFont: PDFFont;
  boldFont: PDFFont;
  serifFont: PDFFont;
  page: PDFPage;
  cursorY: number;
  logoImage?: Uint8Array;
  heroImage?: Uint8Array;
};

function cleanText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function splitTextIntoLines(text: string, font: PDFFont, size: number, maxWidth: number) {
  const words = cleanText(text).split(" ").filter(Boolean);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (font.widthOfTextAtSize(nextLine, size) <= maxWidth) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }
    currentLine = word;
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function ensurePage(ctx: PdfContext, heightNeeded = 0) {
  if (ctx.cursorY - heightNeeded >= BOTTOM_MARGIN) {
    return;
  }

  ctx.page = ctx.pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  ctx.page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: COLORS.offWhite,
  });
  ctx.cursorY = PAGE_HEIGHT - TOP_MARGIN;
}

function drawSectionEyebrow(ctx: PdfContext, text: string) {
  ensurePage(ctx, 30);
  ctx.page.drawText(text.toUpperCase(), {
    x: MARGIN_X,
    y: ctx.cursorY,
    font: ctx.boldFont,
    size: 10,
    color: COLORS.mangoLeaf,
  });
  ctx.cursorY -= 18;
}

function drawHeading(ctx: PdfContext, text: string, size = 24) {
  const maxWidth = PAGE_WIDTH - MARGIN_X * 2;
  const lineHeight = size * 1.15;
  const lines = splitTextIntoLines(text, ctx.serifFont, size, maxWidth);
  ensurePage(ctx, lines.length * lineHeight + 12);
  let lineY = ctx.cursorY;

  for (const line of lines) {
    ctx.page.drawText(line, {
      x: MARGIN_X,
      y: lineY - size,
      font: ctx.serifFont,
      size,
      color: COLORS.agarwoodGreen,
    });
    lineY -= lineHeight;
  }

  ctx.cursorY = lineY - 8;
}

function drawParagraph(ctx: PdfContext, text: string, options?: { size?: number; color?: ReturnType<typeof rgb>; maxWidth?: number; lineHeight?: number }) {
  const size = options?.size ?? 11.5;
  const color = options?.color ?? COLORS.body;
  const maxWidth = options?.maxWidth ?? PAGE_WIDTH - MARGIN_X * 2;
  const lineHeight = options?.lineHeight ?? size * 1.55;
  const lines = splitTextIntoLines(text, ctx.regularFont, size, maxWidth);

  ensurePage(ctx, lines.length * lineHeight + 4);
  let lineY = ctx.cursorY;

  for (const line of lines) {
    ctx.page.drawText(line, {
      x: MARGIN_X,
      y: lineY - size,
      font: ctx.regularFont,
      size,
      color,
    });
    lineY -= lineHeight;
  }

  ctx.cursorY = lineY - 4;
}

function drawBulletList(ctx: PdfContext, items: string[], options?: { size?: number; color?: ReturnType<typeof rgb>; maxWidth?: number }) {
  const size = options?.size ?? 11.5;
  const color = options?.color ?? COLORS.body;
  const maxWidth = options?.maxWidth ?? PAGE_WIDTH - MARGIN_X * 2 - 18;
  const lineHeight = size * 1.5;

  for (const item of items) {
    const lines = splitTextIntoLines(item, ctx.regularFont, size, maxWidth);
    ensurePage(ctx, lines.length * lineHeight + 10);

    let lineY = ctx.cursorY;
    ctx.page.drawText("•", {
      x: MARGIN_X,
      y: lineY - size,
      font: ctx.boldFont,
      size: size + 1,
      color: COLORS.gold,
    });

    lines.forEach((line, index) => {
      ctx.page.drawText(line, {
        x: MARGIN_X + 16,
        y: lineY - size,
        font: ctx.regularFont,
        size,
        color,
      });
      lineY -= lineHeight;
      if (index < lines.length - 1) {
        ensurePage(ctx, lineHeight + 4);
      }
    });

    ctx.cursorY = lineY - 2;
  }

  ctx.cursorY -= 6;
}

function drawDivider(ctx: PdfContext) {
  ensurePage(ctx, 20);
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: ctx.cursorY },
    end: { x: PAGE_WIDTH - MARGIN_X, y: ctx.cursorY },
    thickness: 1,
    color: COLORS.plantationLight,
  });
  ctx.cursorY -= 20;
}

function drawTwoColumnCards(
  ctx: PdfContext,
  items: Array<{ title: string; body: string }>,
  eyebrow?: string,
) {
  if (eyebrow) {
    drawSectionEyebrow(ctx, eyebrow);
  }

  const gap = 16;
  const cardWidth = (PAGE_WIDTH - MARGIN_X * 2 - gap) / 2;
  const padding = 16;

  for (let index = 0; index < items.length; index += 2) {
    const rowItems = items.slice(index, index + 2);
    const measuredHeights = rowItems.map((item) => {
      const titleLines = splitTextIntoLines(item.title, ctx.boldFont, 13, cardWidth - padding * 2);
      const bodyLines = splitTextIntoLines(item.body, ctx.regularFont, 10.5, cardWidth - padding * 2);
      return padding * 2 + titleLines.length * 18 + bodyLines.length * 15 + 10;
    });

    const rowHeight = Math.max(...measuredHeights, 110);
    ensurePage(ctx, rowHeight + 12);
    const y = ctx.cursorY - rowHeight;

    rowItems.forEach((item, itemIndex) => {
      const x = MARGIN_X + itemIndex * (cardWidth + gap);
      ctx.page.drawRectangle({
        x,
        y,
        width: cardWidth,
        height: rowHeight,
        color: COLORS.white,
        borderColor: COLORS.plantationLight,
        borderWidth: 1,
      });

      const titleLines = splitTextIntoLines(item.title, ctx.boldFont, 13, cardWidth - padding * 2);
      const bodyLines = splitTextIntoLines(item.body, ctx.regularFont, 10.5, cardWidth - padding * 2);
      let textY = y + rowHeight - padding - 12;

      titleLines.forEach((line) => {
        ctx.page.drawText(line, {
          x: x + padding,
          y: textY,
          font: ctx.boldFont,
          size: 13,
          color: COLORS.agarwoodGreen,
        });
        textY -= 18;
      });

      textY -= 4;
      bodyLines.forEach((line) => {
        ctx.page.drawText(line, {
          x: x + padding,
          y: textY,
          font: ctx.regularFont,
          size: 10.5,
          color: COLORS.body,
        });
        textY -= 15;
      });
    });

    ctx.cursorY = y - 12;
  }
}

function drawFooter(page: PDFPage, regularFont: PDFFont, pageNumber: number, pageCount: number) {
  page.drawLine({
    start: { x: MARGIN_X, y: 28 },
    end: { x: PAGE_WIDTH - MARGIN_X, y: 28 },
    thickness: 0.8,
    color: COLORS.plantationLight,
  });

  page.drawText("Golden Forests Overview", {
    x: MARGIN_X,
    y: 14,
    font: regularFont,
    size: 9,
    color: COLORS.muted,
  });

  const label = `Page ${pageNumber} of ${pageCount}`;
  page.drawText(label, {
    x: PAGE_WIDTH - MARGIN_X - regularFont.widthOfTextAtSize(label, 9),
    y: 14,
    font: regularFont,
    size: 9,
    color: COLORS.muted,
  });
}

async function readOptionalAsset(assetUrl: string) {
  try {
    const response = await fetch(assetUrl);
    if (!response.ok) return undefined;
    return new Uint8Array(await response.arrayBuffer());
  } catch {
    return undefined;
  }
}

export async function buildHomeOverviewPdf(siteCopy: SiteCopy) {
  const pdfDoc = await PDFDocument.create();
  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const serifFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  const logoImage = await readOptionalAsset(
    "https://res.cloudinary.com/dezfh7wug/image/upload/v1775463650/golden-forests/sidebar-logo-20260406.png",
  );
  const heroImage = await readOptionalAsset(
    "https://res.cloudinary.com/dezfh7wug/image/upload/v1774850962/golden-forests/plantation-image-home-20260330.jpg",
  );

  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: COLORS.offWhite,
  });

  const ctx: PdfContext = {
    pdfDoc,
    regularFont,
    boldFont,
    serifFont,
    page,
    cursorY: PAGE_HEIGHT - TOP_MARGIN,
    logoImage,
    heroImage,
  };

  const copy = siteCopy.home;

  page.drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - 168,
    width: PAGE_WIDTH,
    height: 168,
    color: COLORS.agarwoodGreen,
  });

  if (ctx.logoImage) {
    try {
      const logo = await pdfDoc.embedPng(ctx.logoImage);
      const logoWidth = 92;
      const logoHeight = (logo.height / logo.width) * logoWidth;
      page.drawImage(logo, {
        x: MARGIN_X,
        y: PAGE_HEIGHT - 128,
        width: logoWidth,
        height: logoHeight,
      });
    } catch {
      // Ignore asset decode errors and continue with text branding.
    }
  }

  page.drawText("GOLDEN FORESTS", {
    x: MARGIN_X + 112,
    y: PAGE_HEIGHT - 78,
    font: boldFont,
    size: 18,
    color: COLORS.white,
  });

  page.drawText("Investment Overview", {
    x: MARGIN_X + 112,
    y: PAGE_HEIGHT - 100,
    font: regularFont,
    size: 11,
    color: COLORS.plantationLight,
  });

  ctx.cursorY = PAGE_HEIGHT - 194;

  if (ctx.heroImage) {
    try {
      const hero = await pdfDoc.embedJpg(ctx.heroImage);
      const heroWidth = PAGE_WIDTH - MARGIN_X * 2;
      const heroHeight = 188;
      page.drawImage(hero, {
        x: MARGIN_X,
        y: ctx.cursorY - heroHeight,
        width: heroWidth,
        height: heroHeight,
      });
      page.drawRectangle({
        x: MARGIN_X,
        y: ctx.cursorY - heroHeight,
        width: heroWidth,
        height: heroHeight,
        borderColor: COLORS.plantationLight,
        borderWidth: 1,
        opacity: 0,
      });
      ctx.cursorY -= heroHeight + 28;
    } catch {
      ctx.cursorY -= 12;
    }
  }

  drawSectionEyebrow(ctx, copy.heroBadge);
  drawHeading(ctx, copy.heroTitle, 28);
  copy.heroParagraphs.forEach((paragraph) => drawParagraph(ctx, paragraph, { size: 12 }));

  drawDivider(ctx);
  drawSectionEyebrow(ctx, copy.narrativeEyebrow);
  copy.narrativeParagraphs.forEach((paragraph) => drawParagraph(ctx, paragraph));

  drawDivider(ctx);
  drawTwoColumnCards(
    ctx,
    copy.pillarTitles.map((title, index) => ({
      title,
      body: copy.pillarDescriptions[index] ?? "",
    })),
    "Three Value Pillars",
  );

  drawDivider(ctx);
  drawSectionEyebrow(ctx, copy.differentiationEyebrow);
  drawHeading(ctx, copy.differentiationTitle, 20);
  drawBulletList(
    ctx,
    copy.differentiatorTitles.map((title, index) => `${title}: ${copy.differentiatorDescriptions[index] ?? ""}`),
    { size: 10.8 },
  );

  drawDivider(ctx);
  drawTwoColumnCards(
    ctx,
    copy.investmentOpportunityTitles.map((title, index) => ({
      title,
      body: copy.investmentOpportunityDescriptions[index] ?? "",
    })),
    copy.investmentSectionEyebrow,
  );

  drawDivider(ctx);
  drawSectionEyebrow(ctx, copy.credibilityEyebrow);
  drawHeading(ctx, copy.credibilityTitle, 18);
  drawBulletList(
    ctx,
    copy.credibilityPartnerNames.map(
      (name, index) => `${name}: ${copy.credibilityPartnerDescriptions[index] ?? ""}`,
    ),
    { size: 10.8 },
  );

  drawDivider(ctx);
  drawSectionEyebrow(ctx, copy.missionEyebrow);
  drawHeading(ctx, copy.missionStatement, 22);
  drawParagraph(ctx, copy.missionPanelText, { size: 12, color: COLORS.muted });

  drawParagraph(
    ctx,
    `Next steps: ${copy.missionCtaLabel} or ${copy.missionSecondaryCtaLabel} by contacting the Golden Forests team through the official contact page.`,
    { size: 10.8 },
  );

  const pages = pdfDoc.getPages();
  pages.forEach((pdfPage, index) => drawFooter(pdfPage, regularFont, index + 1, pages.length));

  return pdfDoc.save();
}
