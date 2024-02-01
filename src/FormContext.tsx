import { createContext, useReducer } from "react";
import { FormElements } from "./types";

const Store = createContext<FormElements>({})

export const ProvideFormStore: React.FC = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'updateElement':
        state[action.element_id] = {...state[action.element_id], ...action.data}
        break;
    
      default:
        break;
    }

    return state
  }, {})
  
  return <Store.Provider value={} />
}
