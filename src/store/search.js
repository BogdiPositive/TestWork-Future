import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


 export const fetchBooks = createAsyncThunk('search/fetchBooks', async (url) => {
    let response = await fetch(
        url
      );
     let data =  await response.json();
   return data
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
    async  handelSearchQuery (state){
        // let response = await fetch(
        
        //     `https://www.googleapis.com/books/v1/volumes?q=${state.title}&subject=${state.category}&orderBy=${state.sortedBy}&maxResults=30&key=AIzaSyB4YE5q0m9o4GCVyM7PUGgZ3013M3ffgCg`
        //   );
        //   state.allSearch = await response.json();
        //   console.log(state.allSearch )
      
        state.books.push(...state.allSearch.items)
       
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
    }
})

export const {handelSearchQuery, handelSearchMedia} = searchSlice.actions

export default searchSlice.reducer