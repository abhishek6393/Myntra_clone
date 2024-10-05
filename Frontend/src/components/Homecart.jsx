
import { useSelector } from 'react-redux'
import Display from './HomeDisplay'

export default function Homecart(){


    const items=useSelector(store=>store.items)

  
    
    
//   let item={
//     id: '008',
//     image: 'images/P1.jpg',
//     company: 'Nivea',
//     item_name: 'Men Fresh Deodrant 150ml',
//     original_price: 285,
//     current_price: 142, 
//     discount_percentage: 50,
//     return_period: 14,
//     delivery_date: '10 Oct 2023',
//     rating: {
//         stars: 4.2,
//         count: 5200}
//   }



    return(




        <main>
        <div className="items-container">

    {

        items.map((item)=>{


            return <Display key={item.id} item={item}></Display>
        })
    }
            


          

         
        </div>
    </main>
    )
}