import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData=createAsyncThunk("NewsSlice/getData", async ()=>{
  const response = await axios(
 "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56593e3a139c4e5f8b5c1a1e474239e6"
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