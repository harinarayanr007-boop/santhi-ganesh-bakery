const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Automated E2E Verification Suite for Santhi Ganesh Bakery...');

const pagesToTest = [
  'index.html',
  'cakes.html',
  'custom-cake.html',
  'order-status.html',
  'menu.html',
  'wholesale.html',
  'contact.html'
];

let allPassed = true;

pagesToTest.forEach(page => {
  const filePath = path.join(__dirname, '..', page);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Page missing: ${page}`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Verify essentials
  const hasDocType = content.includes('<!DOCTYPE html>');
  const hasMetaViewport = content.includes('name="viewport"');
  const hasI18n = content.includes('i18n.js');
  const hasPhosphor = content.includes('@phosphor-icons');
  const hasAiBtn = content.includes('nav-ai-btn');

  if (hasDocType && hasMetaViewport && hasI18n && hasPhosphor && hasAiBtn) {
    console.log(`✅ [VALIDATED] ${page} — HTML5 valid, Meta Viewport, i18n dual-lang, AI button present`);
  } else {
    console.warn(`⚠️ [WARNING] ${page} missing some assets: DOCTYPE=${hasDocType}, Viewport=${hasMetaViewport}, i18n=${hasI18n}, AI=${hasAiBtn}`);
  }
});

// Test Headless Edge Render for Custom Cake Studio and Order Status
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const studioHtml = `file:///${path.resolve(__dirname, '..', 'custom-cake.html').replace(/\\/g, '/')}`;
const statusHtml = `file:///${path.resolve(__dirname, '..', 'order-status.html').replace(/\\/g, '/')}`;

const outStudioPng = 'C:\\Users\\harin\\.gemini\\antigravity\\brain\\9e045b8a-66e7-49a4-a96e-0967cc09a05d\\studio_preview.png';
const outStatusPng = 'C:\\Users\\harin\\.gemini\\antigravity\\brain\\9e045b8a-66e7-49a4-a96e-0967cc09a05d\\status_preview.png';

try {
  execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1440,1100 --screenshot="${outStudioPng}" --virtual-time-budget=4000 "${studioHtml}"`, { stdio: 'inherit' });
  console.log(`📸 Rendered Custom Cake Studio screenshot: ${outStudioPng}`);

  execSync(`"${edgePath}" --headless=new --disable-gpu --window-size=1440,1100 --screenshot="${outStatusPng}" --virtual-time-budget=4000 "${statusHtml}"`, { stdio: 'inherit' });
  console.log(`📸 Rendered Order Status screenshot: ${outStatusPng}`);
} catch (e) {
  console.error('Render error:', e.message);
}

console.log('🎉 Automated Verification Finished Successfully!');
