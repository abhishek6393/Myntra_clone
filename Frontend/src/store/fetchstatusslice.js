import { createSlice} from "@reduxjs/toolkit"





  const fetchstatusSlice=createSlice({


    name:'fetchStatus',
    initialState:{

        fetchDone:false,
        currentylFetching:false
    },
    reducers:{


        markfetchDone:(state)=>{


             state.fetchDone=true;
        },
        markfetchingStarting:(state)=>{


                state.currentylFetching=true;
        },
        markfetchingFinished:(state)=>{


             state.currentylFetching=false;
        }


       
    }



})


export const FetchSliceAction=fetchstatusSlice.actions


export default fetchstatusSlice;