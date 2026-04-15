import mongoose from "mongoose";

// db schema

export const Song = mongoose.model("Song", songSchema);
/** =================================================================
 *  TASK 2 — Create Schema & Model (file: server/models/song.model.js)
 *  =================================================================
 *  Goal:
 *    - Define a Song schema with fields:
 *        title (String, required)
 *        artist (String, required)
 *        year (Number)
 *    - Export a Mongoose model named "Song".
 *
 *  Example:
 *    name: { type: String, required: true, trim: true }
 *      Note: trim is used to remove the extra spaces automatically.
 * 
 *  Syntax hint:
 * 
      const songSchema = new mongoose.Schema({
        title:  { type: _______, required: _____, trim: _____ },
        artist: { type: _______, required: _____, trim: _____ },
        year:   { type: _______, min: _____, max: _____ }
      }, { timestamps: _____ });

      const Song = mongoose.model("Song", songSchema);
 */