import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        token: null
    },
    reducers:{
        setUsertoken: (state,action)=>{
            state.token = action.payload;
            window.localStorage.setItem('ecommerceuser',JSON.stringify(action.payload))
        },
        removeUsertoken: (state)=>{
            state.token = null;
            window.localStorage.removeItem('ecommerceuser')
        },
        setUsertokenFromLocalStorage: (state)=>{
            var usertoken = window.localStorage.getItem('ecommerceuser');
        //    console.log("38 auth",usertoken)
            if(usertoken){
                 usertoken = JSON.parse(usertoken);
                // console.log("41",usertoken)
                state.token = usertoken;
            }else{
                state.token = null;
            }
        }
    }
});

export const {setUsertoken,removeUsertoken,setUsertokenFromLocalStorage} = authSlice.actions

export default authSlice.reducer;