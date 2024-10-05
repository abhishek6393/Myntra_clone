

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

import {Outlet} from 'react-router-dom'
import FetchItem from './components/fetchitem';
import { useSelector } from 'react-redux';
import Spiner from './components/Spiner';



function App() {


  const fetachstatus=useSelector((store)=>store.fetachstatus)

  

  return (
 <>
 
 <Header></Header>
 <FetchItem></FetchItem>


 {
    fetachstatus.currentylFetching?<Spiner></Spiner>:<Outlet></Outlet>

 }
 
   

    <Footer></Footer>
   
 
 
 </>
  )
}

export default App
