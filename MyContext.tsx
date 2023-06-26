import React, { createContext, useContext, useState } from "react";

interface MyContextData {
  dishData: any;
  updateValue: (newValue: any) => void;
}

export const MyContext = createContext<MyContextData>({
  dishData: [],
  updateValue: () => {},
});
