/**
 * Prefixes root-relative asset URLs in CSS (`url(/images/..)`) with NEXT_PUBLIC_BASE_PATH.
 * Next.js prefixes JS-referenced assets itself but leaves CSS `url()` untouched. No-op when the variable is empty.
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const pattern = /url\(\s*(['"]?)(\/[^'")\s]*)/g;

module.exports = () => ({
  postcssPlugin: 'infina-base-path',
  Declaration(decl) {
    if (!base || !decl.value.includes('url(')) return;
    const next = decl.value.replace(pattern, (match, quote, path) => {
      // Skip protocol-relative URLs and values that already carry the prefix (visitors re-run on changed nodes).
      if (path.startsWith('//') || path === base || path.startsWith(base + '/')) return match;
      return 'url(' + quote + base + path;
    });
    if (next !== decl.value) decl.value = next;
  },
});
module.exports.postcss = true;
