import express from "express";
import cors from "cors";

// import dotenv and load environment variables from .env
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db.js";
import { Song } from "./models/song.model.js";

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());              
app.use(express.json());

await connectDB(process.env.MONGO_URL);

// api/songs (Read all songs)
app.post("/api/songs", async (req, res) => {
    try {
    const { title = "", artist = "", year } = req.body || {};
    const created = await Song.create({
    title: title.trim(),
    artist: artist.trim(),
    year
    });
    res.status(201).json(created);
    } catch (err) {
    res.status(400).json({ message: err.message || "Create failed" });
    }
    });

// api/songs (Insert song)

// /api/songs/:id (Update song)


// /api/songs/:id (Delete song)

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

/*  =================================================================
 *  TODO 4— GET /api/songs (Read all) file: server/server.js
 *  =================================================================
 *  Goal:
 *    - Use Song.find() to get all songs from DB.
 *    - Sort by newest first (createdAt descending).
 *    - Return JSON array of songs.
 *
 *  Syntax hint:
      app.get("__________", async (____, res) => {
        const rows = await __________.find().sort({ createdAt: ___ });
        res.json(____);
      });

      app.get("______________", async (req, res) => {
        const s = await __________.findById(__________);
        if (!s) return res.status(___).json({ message: "______________" });
        res.json(____);
      });
 */

/** =================================================================
 *  TODO 5 — PUT /api/songs/:id (Update) file: server/server.js
 *  =================================================================
 *  Goal:
 *    - Update an existing song by its ID.
 *    - Use Song.findByIdAndUpdate() with {new:true, runValidators:true}.
 *    - If not found → 404 {message:"Song not found"}.
 *
 *  Syntax hint:
      app.put("______________", async (req, res) => {
        try {
          const updated = await __________.findByIdAndUpdate(
            __________,
            __________ || {},
            { new: _____, runValidators: _____, context: "________" }
          );
          if (!updated) return res.status(___).json({ message: "______________" });
          res.json(__________);
        } catch (err) {
          res.status(___).json({ message: err.message || "_____________" });
        }
      });
 */

/** =================================================================
 *  TODO 6 — DELETE /api/songs/:id file: server/server.js
 *  =================================================================
 *  Goal:
 *    - Delete a song from DB by its ID.
 *    - If not found → 404 {message:"Song not found"}.
 *    - On success → 204 No Content.
 *
 *  Syntax hint:
      app.delete("______________", async (req, res) => {
        const deleted = await __________.findByIdAndDelete(__________);
        if (!deleted) return res.status(___).json({ message: "______________" });
        res.status(___).end();
      });
 */