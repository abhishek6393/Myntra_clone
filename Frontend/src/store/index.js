import {configureStore} from "@reduxjs/toolkit"
import itemslice from "./Itemslice";
import fetchstatusSlice from "./fetchstatusslice";
import bagSlice from "./BagSlice";






  const myntrastore=configureStore({reducer:

    {
        items:itemslice.reducer,
        fetachstatus:fetchstatusSlice.reducer,
        bag:bagSlice.reducer



    }
})

export default myntrastore;






