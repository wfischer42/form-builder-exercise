import { FormElementBase } from '../types'

export const PlaceholderElement: React.FC<{ element: FormElementBase }> = ({ element }) => {
  console.log('Placeholder re-render: ', element.id)

  return (
    <div className="flex flex-col">
      <div>This is a placeholder. ID: {element.id}</div>

      <label>{element.label}</label>
    </div>
  )
}
