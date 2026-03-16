import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const WIDTH = 1200;
const HEIGHT = 630;
const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

const COLORS = {
  bgBase:    '#0A0806',
  bgSurface: '#111009',
  border:    '#2A2420',
  orange:    '#FF4D00',
  text:      '#F5F0E8',
  muted:     '#6B6158',
  white:     '#FFFFFF',
};

const FONTS = {
  display:  'bold 64px Arial Black, Arial',
  displaySm:'bold 58px Arial Black, Arial',
  label:    '10px Arial',
  wordmark: 'bold 15px Arial',
  url:      '11px Arial',
  stat:     'bold 36px Arial Black, Arial',
  statLabel:'10px Arial',
};

const LEFT_X = 72;
const DIVIDER_RIGHT = 628;
const PANEL_SPLIT = 700;

ctx.fillStyle = COLORS.bgBase;
ctx.fillRect(0, 0, PANEL_SPLIT, HEIGHT);

const glow = ctx.createRadialGradient(350, 0, 0, 350, 0, 500);
glow.addColorStop(0, 'rgba(255, 77, 0, 0.06)');
glow.addColorStop(1, 'rgba(255, 77, 0, 0)');
ctx.fillStyle = glow;
ctx.fillRect(0, 0, PANEL_SPLIT, HEIGHT);

ctx.fillStyle = COLORS.bgSurface;
ctx.fillRect(PANEL_SPLIT, 0, WIDTH - PANEL_SPLIT, HEIGHT);

const rightGlow = ctx.createRadialGradient(950, 315, 0, 950, 315, 280);
rightGlow.addColorStop(0, 'rgba(255, 77, 0, 0.04)');
rightGlow.addColorStop(1, 'rgba(255, 77, 0, 0)');
ctx.fillStyle = rightGlow;
ctx.fillRect(PANEL_SPLIT, 0, WIDTH - PANEL_SPLIT, HEIGHT);

ctx.strokeStyle = COLORS.border;
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(PANEL_SPLIT, 0);
ctx.lineTo(PANEL_SPLIT, HEIGHT);
ctx.stroke();

ctx.strokeStyle = COLORS.orange;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(WIDTH, 0);
ctx.stroke();

ctx.fillStyle = COLORS.orange;
ctx.fillRect(LEFT_X, 72, 44, 44);

ctx.fillStyle = COLORS.white;
ctx.font = 'bold 26px Arial Black, Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('N', LEFT_X + 22, 72 + 22);

ctx.fillStyle = COLORS.orange;
ctx.font = FONTS.wordmark;
ctx.textAlign = 'left';
ctx.textBaseline = 'alphabetic';
ctx.fillText('NEUROX', LEFT_X, 150);

ctx.strokeStyle = COLORS.border;
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(LEFT_X, 172);
ctx.lineTo(DIVIDER_RIGHT, 172);
ctx.stroke();

const headingLines = [
  { text: 'PRECISION',     color: COLORS.text },
  { text: 'INTELLIGENCE',  color: COLORS.text },
  { text: 'FOR THE',       color: COLORS.orange },
  { text: 'NEURAL AGE',    color: COLORS.orange },
];

ctx.font = FONTS.display;
const maxWidth = headingLines.reduce((max, line) => {
  return Math.max(max, ctx.measureText(line.text).width);
}, 0);

const headingFont = maxWidth > 556 ? FONTS.displaySm : FONTS.display;
const lineH = maxWidth > 556 ? 72 : 78;
const headingStartY = 252;

ctx.textAlign = 'left';
ctx.textBaseline = 'alphabetic';

headingLines.forEach((line, i) => {
  ctx.fillStyle = line.color;
  ctx.font = headingFont;
  ctx.fillText(line.text, LEFT_X, headingStartY + i * lineH);
});

const lastHeadingY = headingStartY + (headingLines.length - 1) * lineH;
const divider2Y = lastHeadingY + 36;

ctx.strokeStyle = COLORS.border;
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(LEFT_X, divider2Y);
ctx.lineTo(DIVIDER_RIGHT, divider2Y);
ctx.stroke();

const pills = ['REACT + VITE', 'FRAMER MOTION', 'TAILWIND V4'];
const PILL_H = 28;
const PILL_PADDING_X = 20;
const PILL_GAP = 10;
const pillsY = divider2Y + 24;

ctx.font = FONTS.label;
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';

const pillWidths = pills.map(pill => {
  return Math.ceil(ctx.measureText(pill).width) + PILL_PADDING_X * 2;
});

let pillX = LEFT_X;

pills.forEach((pill, i) => {
  const pillW = pillWidths[i];
  const centerX = pillX + pillW / 2;
  const centerY = pillsY + PILL_H / 2;

  ctx.strokeStyle = COLORS.border;
  ctx.lineWidth = 1;
  ctx.strokeRect(pillX, pillsY, pillW, PILL_H);

  ctx.fillStyle = COLORS.muted;
  ctx.font = FONTS.label;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(pill, centerX, centerY);

  pillX += pillW + PILL_GAP;
});

const stats = [
  { label: 'LATENCY',    value: '< 1.2ms'  },
  { label: 'THROUGHPUT', value: '4.8 Pb/s' },
  { label: 'NODES',      value: '128.4K'   },
  { label: 'SYNC',       value: '99.999%'  },
];

const STAT_CENTER_X = 950;
const STAT_START_Y = 100;
const STAT_BLOCK_H = 118;

stats.forEach((stat, i) => {
  const blockY = STAT_START_Y + i * STAT_BLOCK_H;

  ctx.fillStyle = COLORS.muted;
  ctx.font = FONTS.statLabel;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(stat.label, STAT_CENTER_X, blockY + 16);

  ctx.fillStyle = COLORS.text;
  ctx.font = FONTS.stat;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  const valueY = blockY + 62;
  ctx.fillText(stat.value, STAT_CENTER_X, valueY);

  const underlineY = valueY + 16;
  const underlineW = 32;
  const underlineX = STAT_CENTER_X - underlineW / 2;
  ctx.fillStyle = COLORS.orange;
  ctx.fillRect(underlineX, underlineY, underlineW, 2);

  if (i < stats.length - 1) {
    ctx.strokeStyle = COLORS.border;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PANEL_SPLIT + 40, blockY + STAT_BLOCK_H - 2);
    ctx.lineTo(WIDTH - 40, blockY + STAT_BLOCK_H - 2);
    ctx.stroke();
  }
});

ctx.fillStyle = COLORS.muted;
ctx.font = FONTS.url;
ctx.textAlign = 'right';
ctx.textBaseline = 'alphabetic';
ctx.fillText('neurox-demo.vercel.app', WIDTH - 40, HEIGHT - 24);

const outputDir = path.resolve('./public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.resolve('./public/og-image.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);
console.log('✓ OG image generated:', outputPath);
console.log('  Size:', WIDTH, 'x', HEIGHT);
console.log('  File:', (buffer.length / 1024).toFixed(1), 'KB');
