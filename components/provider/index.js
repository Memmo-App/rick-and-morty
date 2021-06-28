import { useReducer, useContext, createContext } from 'react'
import {
	ON_FETCH_LOCATIONS,
	ON_FILTER_SELECTION,
	ON_VIEW_SELECTION,
	ON_SELECTED_LOCATION,
	ON_SELECTED_RESIDENT,
} from '../../actions';
const AppStateContext = createContext()

const initialState = {
	filters: { type: '', dimension: ''},
	view: 'list',
} 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_FETCH_LOCATIONS:
      return {
		  ...state,
		  	locations: action.payload,
	  }
    case ON_SELECTED_LOCATION:
      return {
		  ...state,
		  	selectedLocation: action.payload,
	  }
    case ON_SELECTED_RESIDENT:
      return {
		  ...state,
		  	selectedResident: action.payload,
	  }
    case ON_FILTER_SELECTION:
      return {
		  ...state,
		  	filters: { ...state.filters, ...action.payload },
	  }
    case ON_VIEW_SELECTION:
      return {
		  ...state,
		  	view: action.payload,
	  }
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
		<AppStateContext.Provider value={{state, dispatch}}>
			{	children}
		</AppStateContext.Provider>
  )
}

export const useAppContext = () => useContext(AppStateContext)
