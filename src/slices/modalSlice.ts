import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProject } from '../interfaces/IProject';


// Define a type for the slice state
interface modalState {
    modalData?: IProject;
}

// Define the initial state using that type
const initialState: modalState = {
    modalData: undefined,
}

export const modalSlice = createSlice({
    name: 'modal',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        loadModalData: (state, action: PayloadAction<IProject>) => {
        state.modalData = action.payload;
    },
        cleanModalData: ( state ) => {
        state.modalData = undefined;
    },
}
})

export const { loadModalData, cleanModalData } = modalSlice.actions




export default modalSlice