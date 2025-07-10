export default function handler(req, res) {
  res.status(200).json({ success: true, deployed: true, time: new Date().toISOString() });
}
