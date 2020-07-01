import { combineReducers } from 'redux'
import signatureData from './postReducer'
import toggleTab from './toggleReducer'
import copySignature from './copySignature'

export default combineReducers({
  toggleTab,
  signatureData,
  copySignature
})