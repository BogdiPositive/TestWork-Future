import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//  export const loadMoreBooks = createAsyncThunk('search/fetchBooks', async (url) => {
//    try {
//     let response = await fetch(
//         url
//       );
//      let data =  await response.json();
//      return data
//    } catch (error) {
//     console.log(error)
//    } 
   
//     }
// ) 

export const fetchBooks = createAsyncThunk('search/fetchBooks', async (url) => {
    try {
     let response = await fetch(
         url
       );
      let data =  await response.json();
      return data
    } catch (error) {
     console.log(error)
    } 
    
     }
 ) 

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        books: [],
        allSearch:{},
        title: '',
        category:'',
        sortedBy: '',
        
    },
    reducers: {
     handelSearchQuery (state){
        state.allSearch={}
        state.books = []
       
     },

     handelSearchMedia(state, action){
        state.title = action.payload.title
        state.category = action.payload.category
        state.sortedBy = action.payload.sortedBy
        
      
        
     }
     

    },
    extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
        
        state.allSearch = action.payload
        state.books.push(...state.allSearch.items)
    })
    },
    // extraReducers: (builder) => {
    //     builder.addCase(loadMoreBooks.fulfilled, (state, action) => {
    //         state.allSearch = action.payload
    //         state.books.push(...state.allSearch.items)
    //     })
    //     },

})

export const {handelSearchQuery, handelSearchMedia,} = searchSlice.actions

export default searchSlice.reducer