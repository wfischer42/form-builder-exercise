import { useFormBuilderStore } from '../store/useFormBuilder'

export const FormElementOptions: React.FC = () => {
  const { focusElement, updateElement } = useFormBuilderStore()
  return (
    focusElement && (
      <div className="p-8 flex flex-col">
        <div>{focusElement.type}</div>
        <label className="flex gap-3 items-center">
          Label
          <input
            value={focusElement?.label}
            onChange={(e) => {
              e.target.value
              updateElement({ elementId: focusElement?.id, data: { label: e.target.value } })
            }}
          />
        </label>
      </div>
    )
  )
}
