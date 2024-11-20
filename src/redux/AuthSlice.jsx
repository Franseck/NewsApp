import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:"",
  password:"",
}

export const AuthSlice = createSlice({
  name: 'authReducer',
  initialState,

  reducers: {
createUser:()=>{

},

deleteUser:()=>{

}

  },
})

// Action creators are generated for each case reducer function
export const { createUser, deleteUser} = AuthSlice.actions

export default AuthSlice.reducer