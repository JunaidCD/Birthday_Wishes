import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from root directory
app.use(express.static(path.join(__dirname, "..")));

// Serve assets folder
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));

// Serve index.html for root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Catch all other routes and redirect to index
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Start server
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n🎉 Birthday page server running!`);
  console.log(`🌐 Server: http://0.0.0.0:${PORT}`);
  console.log(`\n⚠️  IMPORTANT: Add assets/happy_birthday.mp3 for music to work`);
  console.log(`📖 See README.md for where to get royalty-free music\n`);
});
