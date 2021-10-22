import {createSlice} from '@reduxjs/toolkit';
import Blogdata from "../../mock_data/sampleblogdata.json"

export const initialState ={
      data:[],
      status:""
}

export const homeSlice =createSlice({
    name:"Home",
    initialState,
    reducers:{
        dataReq:(state) =>{
            state.status ="Req"
        },
        dataSuccess:(state,{payload})=>{
            state.status="Success"
            state.data=payload
        },
        dataError:(state)=>{
            state.status="Error"
        }
    }
})

export const {
    dataReq,dataSuccess,dataError
} = homeSlice.actions
const home=homeSlice.reducer;
export default home;
export function blogdata(modify,payload){
    return dispatch =>{
        dispatch(dataReq());
        if(modify){
            
            let datas=[...Blogdata.blog.contents.datas[0].content,...payload]
            console.log("newww",datas)
           return   dispatch(dataSuccess(datas))
        }
        else {
            let datas=[...Blogdata.blog.contents.datas[0].content]
            return dispatch(dataSuccess(datas))
        }
    }
}