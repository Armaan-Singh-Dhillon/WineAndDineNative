import React, { createContext, useContext, useState } from "react";
import DishType from "./types/dish";
import { BlogData } from "./types/blog";
import { User } from "./types/user";
interface MyContextData {
  dishData: DishType[];
  blogData: BlogData[];
  isModal: boolean;
  user: User | null;
  isLoggedIn: boolean;
  updateLoggedIn: (newValue: boolean) => void;
  updateUser: (newValue: User) => void;
  updateVisibility: () => void;
  updateDishData: (newValue: DishType[]) => void;
  updateBlogData: (newValue: BlogData[]) => void;
}

export const MyContext = createContext<MyContextData>({
  dishData: [],
  blogData: [],
  user: null,
  isModal: false,
  isLoggedIn: false,
  updateLoggedIn: () => {},
  updateUser: () => {},
  updateVisibility: () => {},
  updateDishData: () => {},
  updateBlogData: () => {},
});
