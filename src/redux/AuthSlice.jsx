import { createSlice } from '@reduxjs/toolkit'


export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    email: "",
    password: "",
  },

  reducers: {
createUser:(state, action)=>{
state.email = action.payload.email
state.password = action.payload.password
},

deleteUser:(state)=>{
state.email=""
state.password=""
}
  }
})

// Action creators are generated for each case reducer function

export const { createUser, deleteUser} = AuthSlice.actions
export default AuthSlice.reducer