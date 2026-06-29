module.exports = function handler(req, res) {
  const raw = process.env.GEMINI_API_KEY || '';
  // Nettoie BOM, espaces et tout caractère non-API (garde uniquement alphanum, point, tiret, underscore)
  const k = raw.replace(/[^A-Za-z0-9._\-]/g, '');
  if (!k) return res.status(500).json({ error: 'not configured' });
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ k });
};
