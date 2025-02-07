const next = require("next");
const http = require("http");
const initializeSocket = require("./socket"); // ✅ Import from socket.js

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
  });

  // ✅ Initialize WebSocket server correctly
  initializeSocket(server);

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
