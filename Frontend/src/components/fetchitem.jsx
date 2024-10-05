import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemaction } from "../store/Itemslice"
import { FetchSliceAction } from "../store/fetchstatusslice"

export default function FetchItem(){


    const dispatch=useDispatch()



     const fetachstatus=useSelector((store)=>store.fetachstatus)

     useEffect(()=>{

        if(fetachstatus.fetchDone) return;

       

        dispatch(FetchSliceAction.markfetchingStarting())
        fetch("http://localhost:8080/items").then((res)=>


            res.json()
        ).then(({items})=>
        {


            
            dispatch(itemaction.additem(items))
            dispatch(FetchSliceAction.markfetchDone())

            dispatch(FetchSliceAction.markfetchingFinished())
            
          

        }
        )
     },[fetachstatus])




    return(




        <>
        
      
        
        </>
    )
}