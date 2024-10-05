import { useSelector } from "react-redux"

export default function Bagsummary(){


  const bagItem=useSelector((store)=>store.bag)


  
  const items=useSelector((store)=>store.items)
 
 
 const finalitem=items.filter((item)=>{
 
 
   const itemIndex=bagItem.indexOf(item.id)
   return itemIndex>=0
 })


    let totalItem=bagItem.length;

    let convinence_fee=99;

let totalMRP=0;
let totalDiscount=0;









finalitem.forEach((item)=>{

  totalMRP+=item.original_price;
  totalDiscount+=item.original_price-item.current_price;
})

let finalPayment=totalMRP-totalDiscount+convinence_fee;



   








    return(




        <div className="bag-summary">


                <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{convinence_fee}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
        </div>
    )
}