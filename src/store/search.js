import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
    name: 'search',
    initialState:{
        books: [],
        allSearch:0,
        title: '',
        category:'',
        sortedBy: '',
        
    },
    reducers: {
     handelSearchQuery(state, action){
        state.allSearch = action.payload
        state.books.push(...action.payload.items)
       
     },

     handelSearchMedia(state, action){
        state.title = action.payload.title
        state.category = action.payload.category
        state.sortedBy = action.payload.sortedBy
        
      
        
     }
     

    }
})

export const {handelSearchQuery, handelSearchMedia} = searchSlice.actions

export default searchSlice.reducer