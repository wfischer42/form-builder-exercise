import { formElementDefinitions, formElementMenuOrder } from '../formElementDefinitions'
import { useFormBuilderStore } from '../store/useFormBuilder'

export const FormElementsMenu: React.FC = () => {
  const { addElement } = useFormBuilderStore()

  return (
    <div className="p-8 flex flex-row flex-wrap gap-2">
      {formElementMenuOrder.map((element) => {
        return (
          // todo: extract component & enhance styling (icons, hover, etc)
          <button className="border p-2 text-sm" onClick={() => addElement({ type: element })}>
            {formElementDefinitions[element].label}
          </button>
        )
      })}
    </div>
  )
}
