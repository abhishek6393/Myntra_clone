import { createSlice} from "@reduxjs/toolkit"





  const bagSlice=createSlice({


    name:'item',
    initialState:[],
    reducers:{


        addtobag:(state,action)=>{

          

          state.push(action.payload)

          
          


          


          
        },
        removetobag:(state,action)=>{

          

           return state.filter((itemId)=>itemId!==action.payload

           
            



          )
  
  
            
  
  
            
          }


    }



})


export const bagction=bagSlice.actions


export default bagSlice;