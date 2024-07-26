import express from "express";
import {
  getList,
  getListById,
  createList,
  updateList,
  deleteList,
} from "../controller/ListController.js";

const router = express.Router();

router.get("/lists", getList);
router.get("/lists/:id", getListById);
router.post("/lists", createList);
router.patch("/lists/:id", updateList);
router.delete("/lists/:id", deleteList);

export default router;
