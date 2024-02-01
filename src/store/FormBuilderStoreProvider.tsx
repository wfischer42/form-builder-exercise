import { ReactNode, useReducer, useState } from 'react'
import { FormElement, FormElements, FormElementsOrderedList } from '../types'
import { FormBuilderStore } from './FormBuilderStore'
import { createElementFactory } from './createElementFactory'
import { Action, FormBuilderContext } from './types'

const elementsReducer = (state: FormElements, action: Action): FormElements => {
  const newState = { ...state }
  let newElementData: FormElement

  switch (action.type) {
    case 'addElement':
      newState[action.element.id] = action.element
      return newState
    case 'removeElement':
      delete newState[action.elementId]
      return newState
    case 'updateElement':
      // todo: type check action.data to guarantee merging of correct types
      newElementData = { ...state[action.elementId], ...action.data } as FormElement
      newState[action.elementId] = newElementData
      return newState
    default:
      return state
  }
}

const FormBuilderStoreProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [focusElementId, setFocusElementId] = useState<string>()

  const [elementsOrderedList, setElementsOrderedList] = useState<FormElementsOrderedList>([])
  const [state, dispatch] = useReducer(elementsReducer, {})

  const focusElement = focusElementId ? state[focusElementId] : undefined

  const addElement: FormBuilderContext['addElement'] = ({ type, insertionIndex }) => {
    const newElement = createElementFactory(type)

    dispatch({ type: 'addElement', element: newElement })

    setElementsOrderedList((list) => {
      if (typeof insertionIndex === 'number')
        return [...list.slice(0, insertionIndex), newElement.id, ...list.slice(insertionIndex)]
      else return [...list, newElement.id]
    })

    setFocusElementId(newElement.id)
  }

  const removeElement: FormBuilderContext['removeElement'] = (elementId) => {
    dispatch({ type: 'removeElement', elementId })
  }
  const updateElement: FormBuilderContext['updateElement'] = ({ elementId, data }) => {
    dispatch({ data, elementId, type: 'updateElement' })
  }

  const moveElement: FormBuilderContext['moveElement'] = () => {
    throw new Error('moveElement function not yet implemented')
  }

  return (
    <FormBuilderStore.Provider
      value={{
        addElement,
        removeElement,
        updateElement,
        moveElement,
        focusOnElement: setFocusElementId,
        focusElement,
        formElements: state,
        elementsOrderedList,
      }}
    >
      {children}
    </FormBuilderStore.Provider>
  )
}

export default FormBuilderStoreProvider
