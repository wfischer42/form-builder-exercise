import { useContext } from 'react'
import { FormBuilderStore } from './FormBuilderStore'

export const useFormBuilderStore = () => useContext(FormBuilderStore)
