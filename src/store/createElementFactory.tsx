import {
  FormElement,
  FormElementBase,
  FormElementType,
  LongQuestionElement,
  RadioElement,
  ShortQuestionElement,
  VideoElement,
} from '../types'

export const createElementFactory = (type: FormElementType): FormElement => {
  const baseElement: FormElementBase = {
    id: crypto.randomUUID(),
    label: type,
    type: type,
    required: false,
  }

  switch (type) {
    case FormElementType.ShortQuestion:
      return { ...(baseElement as ShortQuestionElement), label: 'New Short Question' }
    case FormElementType.LongQuestion:
      return baseElement as LongQuestionElement
    case FormElementType.Video:
      return {
        ...baseElement,
        url: '',
        title: '',
      } as VideoElement
    case FormElementType.Radio:
      return { ...baseElement, optionsList: [] } as RadioElement
    default:
      throw new Error(`Unsupported element type: ${type}`)
  }
}
