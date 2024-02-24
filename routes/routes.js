import { Router } from "express";
import { getHtml } from "../src/controller/homeControllers.js";
import {
  getSongs,
  addSong,
  editSong,
  deleteSong,
} from "../src/controller/cancionesControllers.js";

const router = Router();

router.get("/", getHtml)
router.get("/canciones", getSongs);
router.post("/canciones", addSong);
router.put("/canciones/:id", editSong);
router.delete("/canciones/:id", deleteSong);

export default router;
