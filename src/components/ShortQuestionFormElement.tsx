import { ShortQuestionElement } from '../types'

export const ShortQuestionFormElement: React.FC<{ element: ShortQuestionElement }> = ({
  element,
}) => {
  return (
    <label className="flex flex-col">
      {element.label}
      <input></input>
    </label>
  )
}
