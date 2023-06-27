import React, { createContext, useContext, useState } from "react";
import DishType from "./types/dish";
import { BlogData } from "./types/blog";
interface MyContextData {
  dishData: DishType[];
  blogData: BlogData[];
  updateDishData: (newValue: DishType[]) => void;
  updateBlogData: (newValue: BlogData[]) => void;
}

export const MyContext = createContext<MyContextData>({
  dishData: [],
  blogData: [],
  updateDishData: () => {},
  updateBlogData: () => {},
});
