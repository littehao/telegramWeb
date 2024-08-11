import { createSlice } from '@reduxjs/toolkit'

export const baseStore = createSlice({
  name: 'base',
  initialState: {
    lang: 'en-US'
  },
  reducers: {
    changeLang: (state,action) => {
      state.lang = action.payload
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { changeLang } = baseStore.actions

export default baseStore.reducer