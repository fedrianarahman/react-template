import { cibWindows } from '@coreui/icons'
import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  token : window.localStorage.getItem("token"),
  
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

console.log("line 19 store", initialState.token)
const store = createStore(changeState)
export default store
