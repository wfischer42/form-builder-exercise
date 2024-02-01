import React from "react"

enum ElementType {
  ShortQuestion = "SHORT_QUESTION",
  LongQuestion = "LONG_QUESTION",
  Video = "VIDEO",
  Radio = "RADIO",
  FormElementOption = "OPTION_LIST_ITEM"
}

enum VideoProviders {
  YouTube = 'YOUTUBE'
}


export type FormElementBase = {
  id: string
  label: string
  type: ElementType
  required: boolean
}

type TextFieldOptions = {
  type: ElementType.LongQuestion
  min?: number
  max?: number
}

export type LongQuestionElement = FormElementBase & TextFieldOptions & {
  type: ElementType.LongQuestion
}

export type ShortQuestionElement = FormElementBase & TextFieldOptions & {
  type: ElementType.ShortQuestion
}

export type VideoElement = FormElementBase & {
  type: ElementType.Video
  url: string
  title: string
  provider: VideoProviders
  autoplay?: boolean
}

export type FormElementOption = Omit<FormElementBase, 'required'> & {
  type: ElementType.FormElementOption
}

export type RadioElement = FormElementBase & {
  type: ElementType.Radio
  optionsList: FormElementOption[]
}

export type FormElement = TextFieldOptions | LongQuestionElement | ShortQuestionElement | VideoElement | RadioElement

export type FormElementOrder = { id: string }[]

export type FormElements = { [id: string]: FormElement }