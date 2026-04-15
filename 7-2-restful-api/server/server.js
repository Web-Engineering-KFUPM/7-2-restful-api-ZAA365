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


// api/songs (Insert song)

// /api/songs/:id (Update song)


// /api/songs/:id (Delete song)

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));



/** =================================================================
 *  TODO 3 — POST /api/songs (Insert) file: server/server.js
 *  =================================================================
 *  Goal:
 *    - Insert a new song into DB.
 *    - Expect JSON body: { title, artist, year }.
 *    - Respond 201 + created song on success.
 *    - Respond 400 + {message} on validation error.
 *
 *  Syntax hint:
      app.post("__________", async (req, res) => {
        try {
          const { title = "", artist = "", year } = __________ || {};
          const created = await __________.create({
            title: __________.trim(),
            artist: __________.trim(),
            year
          });
          res.status(____).json(__________);
        } catch (err) {
          res.status(____).json({ message: err.message || "____________" });
        }
      });
 */

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