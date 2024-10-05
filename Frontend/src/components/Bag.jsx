import { useSelector } from "react-redux";
import BagItem from "./BagIntem";
import Bagsummary from "./Bagsummary";


export default function Bag(){

 const bagItem=useSelector((store)=>store.bag)
 const items=useSelector((store)=>store.items)


const finalitem=items.filter((item)=>{


  const itemIndex=bagItem.indexOf(item.id)
  return itemIndex>=0
})

    return(


      
        
        
       
    <main>
      <div className="bag-page">
        <div className="bag-items-container">


          {

            finalitem.map((item)=><BagItem key={item.id} item={item}></BagItem>)
          }

          
        </div>

        <Bagsummary></Bagsummary>
      

      </div>
    </main>
   
        
      
    )
}