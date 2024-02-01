import { createContext } from "react";
import { FormBuilderContext } from "./types";

export const FormBuilderStore = createContext<FormBuilderContext>({
  addElement() { },
  removeElement() { },
  updateElement() { },
  moveElement() { },
  focusOnElement() { },
  formElements: {},
  elementsOrderedList: [],
})