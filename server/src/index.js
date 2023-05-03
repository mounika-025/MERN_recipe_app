import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
//generates connection towards server
mongoose.connect(
  "mongodb+srv://mounika025:mouni2000@recipe.sasj4ba.mongodb.net/recipe?retryWrites=true&w=majority"
);

app.listen(4000, () => console.log("Server started"));
