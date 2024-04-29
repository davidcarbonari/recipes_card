import { createSlice } from "@reduxjs/toolkit"
export const srcUrlSlice = createSlice({
    name: 'updateUrl',
    initialState: {
        value: "",
    },
    reducers: {
        srcUrl: (state, action) => {
            state.value = `https://dummyjson.com/recipes/search?q=${action.payload}`
        }

    }
},
)

export const { srcUrl } = srcUrlSlice.actions
export const srcUrlReducer = srcUrlSlice.reducer
