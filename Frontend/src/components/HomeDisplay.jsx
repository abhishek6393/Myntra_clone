import { useDispatch, useSelector } from "react-redux"
import { bagction } from "../store/BagSlice"
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function Display({item}){

    const dispatch=useDispatch()

  const bag=  useSelector((store)=>store.bag)

  const itemid=bag.indexOf(item.id)>=0;

 
  


    function handleAddtoBag(){


        dispatch(bagction.addtobag(item.id))




    }

    function handleRemovetoBag(){


        dispatch(bagction.removetobag(item.id))




    }



    return(



        <div className="item-container">
        <img className="item-image" src={item.image} alt="item image"/>
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {


itemid?<button type="button" className="btn btn-danger btn-add-bag " onClick={handleRemovetoBag}><MdDelete /> &nbsp;Remove From Bag</button>:
        
       

<button type="button" className="btn btn-success btn-add-bag" onClick={handleAddtoBag}><IoIosAddCircle /> &nbsp;Add To Bag</button>}

      </div>
    )
}
