export default function handler(req, res) {
  res.status(200).json({
    deployed: "SECURE-V1",
    method: req.method,
    token: process.env.API_TOKEN,
    authHeader: req.headers.authorization || null
  });
}
