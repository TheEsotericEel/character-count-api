export default function handler(req, res) {
  const expectedToken = process.env.API_TOKEN;
  const authHeader = req.headers.authorization;

  res.status(200).json({
    injectedToken: expectedToken,
    receivedAuthHeader: authHeader
  });
}
