
export enum FormElementType {
  ShortQuestion = "SHORT_QUESTION",
  LongQuestion = "LONG_QUESTION",
  Video = "VIDEO",
  Radio = "RADIO",
}

export enum VideoProviders {
  YouTube = 'YOUTUBE',
  vimeo = 'VIMEO'
}

// todo: add 'value' and 'onChange' types

export type FormElementBase = {
  id: string
  label: string
  type: FormElementType
  required: boolean
}

type TextFieldOptions = {
  min?: number
  max?: number
}

export type LongQuestionElement = FormElementBase & TextFieldOptions & {
  type: FormElementType.LongQuestion
}

export type ShortQuestionElement = FormElementBase & TextFieldOptions & {
  type: FormElementType.ShortQuestion
}

export type VideoElement = FormElementBase & {
  type: FormElementType.Video
  url: string
  title: string
  provider?: VideoProviders
  autoplay?: boolean
}

export type FormElementOption = {
  id: string
  label: string
  type: "FORM_ELEMENT_OPTION"
}

export type RadioElement = FormElementBase & {
  type: FormElementType.Radio
  optionsList: FormElementOption[]
}

export type FormElement = LongQuestionElement | ShortQuestionElement | VideoElement | RadioElement

export type FormElementsOrderedList = string[]

export type FormElements = { [id: string]: FormElement }
