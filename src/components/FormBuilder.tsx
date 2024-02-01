import { useFormBuilderStore } from '../store/useFormBuilder'
import { FormElementGeneric } from './FormElementGeneric'

export const FormBuilder: React.FC = () => {
  const { formElements, elementsOrderedList, focusOnElement } = useFormBuilderStore()

  return (
    <div className="flex flex-col p-8">
      {elementsOrderedList.map((id) => (
        // todo: add visual indication for focused element
        <div className="p-4 hover:border-blue-500 border w-full" onClick={() => focusOnElement(id)}>
          <FormElementGeneric element={formElements[id]} />
        </div>
      ))}
    </div>
  )
}
