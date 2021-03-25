import { Router } from "express";

import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories:Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category();
  
  Object.assign(category,{
    name,
    description,
    create_at: new Date()
  });
  console.log(category.id);
  categories.push(category);
  return res.status(201).json(category);
});

export { categoriesRoutes };