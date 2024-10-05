import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homecart from './components/Homecart.jsx'
import Bag from './components/Bag.jsx'

import {Provider} from "react-redux"
import myntrastore from './store/index.js'


const router=createBrowserRouter([

  {

    path:"/",
    element:<App></App>,
    children:[

      {

        path:"/", element:<Homecart></Homecart>,
       
      },

      {

        path:"/bag",
        element:<Bag></Bag>
      }


    ]
  }



])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={myntrastore}>

    
    <RouterProvider router={router}></RouterProvider>

    </Provider>

   
  </StrictMode>
)
