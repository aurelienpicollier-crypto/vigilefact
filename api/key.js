module.exports = function handler(req, res) {
  const k = process.env.GEMINI_API_KEY;
  if (!k) return res.status(500).json({ error: 'not configured' });
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ k });
};
