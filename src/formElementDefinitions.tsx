import { PlaceholderElement } from './components/PlaceholderElement'
import { ShortQuestionFormElement } from './components/ShortQuestionFormElement'
import { FormElementType } from './types'

type Config = {
  [type in FormElementType]: {
    type: FormElementType
    label: string
    // todo: strengthen typing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.FC<{ element: any }>
  }
}

const formElementDefinitions: Config = {
  [FormElementType.ShortQuestion]: {
    type: FormElementType.ShortQuestion,
    label: 'Short Question',
    component: ShortQuestionFormElement,
  },
  [FormElementType.LongQuestion]: {
    type: FormElementType.LongQuestion,
    label: 'Long Question',
    component: PlaceholderElement,
  },
  [FormElementType.Radio]: {
    type: FormElementType.Radio,
    label: 'Radio',
    component: PlaceholderElement,
  },
  [FormElementType.Video]: {
    type: FormElementType.ShortQuestion,
    label: 'Video',
    component: PlaceholderElement,
  },
}

const formElementMenuOrder: FormElementType[] = [
  FormElementType.ShortQuestion,
  FormElementType.LongQuestion,
  FormElementType.Radio,
  FormElementType.Video,
]

export { formElementDefinitions, formElementMenuOrder }
