import express from "express";
import mongoose from "mongoose";

import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

//api to return all recipes in the database

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
//creating new recipe
router.post("/", async (req, res) => {
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as recipesRouter };
