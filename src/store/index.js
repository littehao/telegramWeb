import { configureStore } from '@reduxjs/toolkit'
import baseStore from './base/baseStore'

export default configureStore({
  reducer: {
    baseStore: baseStore
  }
})