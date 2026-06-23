import {Router} from "express";
import { listPotions, createPotion, deletePotion } from "../controllers/potionController.js";

const router = Router();

router.get("/potions", listPotions); // GET /potions - Lista todas as poções
router.post("/potions", createPotion); // POST /potions - Cria uma nova poção
router.delete("/potions/:id", deletePotion);

export default router;