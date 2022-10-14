import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface CounterState {
    isModalVisible: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
    isModalVisible: false,
}

export const uiSlice = createSlice({
    name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    showModal: (state) => {
        state.isModalVisible = true;
    },
    hideModal: (state) => {
        state.isModalVisible = false;
    }
}
})

export const { showModal, hideModal } = uiSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isModalVisible = (state: RootState) => state.ui.isModalVisible

export default uiSlice