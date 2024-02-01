import { FormBuilder } from './components/FormBuilder'
import { FormElementOptions } from './components/FormElementOptions.tsx'
import { FormElementsMenu } from './components/FormElementsMenu'
import { PanelsLayout } from './components/PanelsLayout'
import FormBuilderStoreProvider from './store/FormBuilderStoreProvider'

function App() {
  return (
    <FormBuilderStoreProvider>
      <PanelsLayout
        mainPanel={<FormBuilder />}
        leftPanel={<FormElementsMenu />}
        rightPanel={<FormElementOptions />}
      />
    </FormBuilderStoreProvider>
  )
}

export default App
