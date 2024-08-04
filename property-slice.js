import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
    //slice name:
    name: 'property',
    //internal state for property slice
    initialState: {
        properties: [],//array to hold all the properties that are fetched
        totalProperties: 0,
        searchParams: {},//parameters used to search
        error: null,//error state
        loading: false,//loading state for the property
    },
    //reducers function to handle different functions
    reducers: {
        getRequest(state) {
            state.loading = true;
        },
        //action to update the properties state with data
        getProperties(state, action) {
            state.properties = action.payload.data
            state.totalProperties = action.payload.all_properties
            state.loading = false
        },
        //action to search paramenters
        updateSearchParams: (state, action) => {
            state.searchParams = Object.keys(action.payload).length === 0 ? {} : { ...state.searchParams, ...action.payload }
        },
        //action to update error state
        getErrors: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const propertyAction = propertySlice.actions
export default propertySlice