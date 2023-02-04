import { configureStore } from "@reduxjs/toolkit"
import purchasesReduces from './slicer/purchasesSlice'

const store = configureStore({
  reducer: {
    purchasesDate: purchasesReduces
  }
})


export default store