import { FormElement, FormElementType, FormElements, FormElementsOrderedList } from "../types";

export type FormBuilderContext = {
  addElement: (props: { type: FormElementType; insertionIndex?: number }) => void
  removeElement: (elementId: string) => void
  updateElement: (props: { elementId: string; data: Partial<FormElement> }) => void
  moveElement: (props: { elementId: string; insertionIndex: number }) => void
  focusOnElement: (elementId: string) => void
  focusElement?: FormElement
  formElements: FormElements
  elementsOrderedList: FormElementsOrderedList
}

export type Action =
  | { type: 'addElement'; element: FormElement }
  | { type: 'removeElement'; elementId: string }
  | { type: 'updateElement'; elementId: string; data: Partial<FormElement> }