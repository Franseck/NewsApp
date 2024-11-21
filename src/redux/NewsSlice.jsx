import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData=createAsyncThunk("NewsSlice/getData", async ()=>{
  const response = await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
  );
  //console.log(response);
return response.data.articles;
})

const initialState = {
news:[],
loading:false
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