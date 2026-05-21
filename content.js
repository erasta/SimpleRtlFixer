const fix = (root) => root.querySelectorAll(
  'p, li, blockquote, div[class*="message"], textarea'
).forEach(el => el.setAttribute('dir', 'auto'));

fix(document);
new MutationObserver(muts => muts.forEach(m =>
  m.addedNodes.forEach(n => n.nodeType === 1 && fix(n))
)).observe(document.body, { childList: true, subtree: true });
