import React from 'react'
import { formElementDefinitions } from '../formElementDefinitions'
import { FormElement } from '../types'

export type FormElementGenericProps = {
  element: FormElement
}

// todo: strengthen type checking

export const FormElementGeneric = React.memo<FormElementGenericProps>(
  ({ element }) => {
    const RenderComponent = formElementDefinitions[element.type].component
    return <RenderComponent element={element} />
  },
  (previous, next) => {
    return previous.element === next.element
  }
)
