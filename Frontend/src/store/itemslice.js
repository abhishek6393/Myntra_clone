
import { createSlice} from "@reduxjs/toolkit"
import { Initaildata } from "../data/items";




  const itemslice=createSlice({


    name:'item',
    initialState:[],
    reducers:{


        additem:(state,action)=>{

          

          let newstore=action.payload


          


          return newstore;
        }
    }



})


export const itemaction=itemslice.actions


export default itemslice;