const express = require("express");
const path = require("path");
require("dotenv").config();
const axios = require("axios");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Search API
app.post("/search", async (req, res) => {
  const { query } = req.body;

  try {
    const url = `${process.env.AZURE_SEARCH_ENDPOINT}/indexes/${process.env.AZURE_SEARCH_INDEX}/docs/search?api-version=2023-11-01`;

    const response = await axios.post(
      url,
      {
        search: query
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.AZURE_SEARCH_API_KEY
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Azure error:", error.response?.data || error.message);
    res.status(500).json({ error: "Azure Search failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
