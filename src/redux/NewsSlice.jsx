import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData=createAsyncThunk("NewsSlice/getData", async ()=>{
  const response = await axios(
 "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
  );
  //console.log(response);
return response.data.articles;
})

const initialState = {
news:[],
loading:""
}

export const NewsSlice = createSlice({
name : "NewsSlice",
initialState,
reducers:{
  clearNews:()=>{

  }
},
extraReducers(builder) {
  builder
    .addCase(getData.pending, (state) => {
      state.loading = true;
    })
    .addCase(getData.fulfilled, (state, action) => {
state.news=action.payload
    state.loading = false 
  
      });

 },

})



export const { clearNews} = NewsSlice.actions

export default NewsSlice.reducer