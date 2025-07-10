export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const authHeader = req.headers.authorization;
  const expectedToken = process.env.API_TOKEN;

  if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { text } = req.body || {};
  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid \"text\" field." });
  }

  res.status(200).json({ count: text.length });
}
