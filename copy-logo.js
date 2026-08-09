const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\harin\\.gemini\\antigravity\\brain\\9e045b8a-66e7-49a4-a96e-0967cc09a05d\\.user_uploaded\\media_1786304868980.png';
const dest = 'c:\\Users\\harin\\Downloads\\bakery website\\sg-bakery-logo.png';

fs.copyFileSync(src, dest);
console.log('Logo copied successfully to', dest);
