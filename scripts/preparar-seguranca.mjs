import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const hashes = new Set();

for (const name of readdirSync(root).filter(name => name.endsWith('.html')).sort()) {
  const html = readFileSync(join(root, name), 'utf8');
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/i.test(match[1]) || !match[2].trim()) continue;
    const script = match[2].replace(/\r\n?/g, '\n');
    const digest = createHash('sha256').update(script, 'utf8').digest('base64');
    hashes.add(`'sha256-${digest}'`);
  }
}

const policy = [
  "default-src 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  `script-src 'self' ${[...hashes].join(' ')}`,
  "script-src-attr 'none'",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "frame-src https://www.google.com https://maps.google.com",
  "connect-src 'none'",
  "form-action 'self' https://wa.me",
  'upgrade-insecure-requests',
].join('; ');

const output = [
  '# Gerado por: node scripts/preparar-seguranca.mjs',
  '# Regerar depois de alterar scripts inline ou dados JSON-LD das paginas.',
  '# Publicar este arquivo junto com index.html no Netlify.',
  '/*',
  `  Content-Security-Policy: ${policy}`,
  '  X-Content-Type-Options: nosniff',
  '  X-Frame-Options: DENY',
  '  Referrer-Policy: strict-origin-when-cross-origin',
  '  Permissions-Policy: camera=(), microphone=(), geolocation=()',
  '  Strict-Transport-Security: max-age=31536000',
  '',
].join('\n');

writeFileSync(join(root, '_headers'), output, 'utf8');
console.log(`_headers preparado com ${hashes.size} hashes de scripts inline. Validar os cabecalhos e os recursos no site publicado.`);
