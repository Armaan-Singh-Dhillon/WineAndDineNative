import React, { createContext, useContext, useState } from "react";
import DishType from "./types/dish";
interface MyContextData {
  dishData: DishType[];
  updateValue: (newValue: DishType[]) => void;
}

export const MyContext = createContext<MyContextData>({
  dishData: [],
  updateValue: () => {},
});
