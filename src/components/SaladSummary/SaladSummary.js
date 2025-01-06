  import { useContext, useState } from "react";
  import { SaladContext } from "../SaladMaker/SaladMaker";

function SaladSummary() {
  const [ reload, setReload] = useState(false)
  const { salad, setTotalQuantity, totalQuantity, setSalad } = useContext(SaladContext);

  const update = (type, itemName) => {
    setSalad({
      actionType: type,
      item: {
        name: itemName
      }
    })
  }

  console.log(salad)
  return (
    <div className="salad-summary-wrapper">
      <ul>
      {
        salad.map(item => {
          if (item.maxQuantity) {
            setTimeout(() => {
              item.maxQuantity = false;
              setReload(!reload);
            }, 1500)
          }
          setTotalQuantity(totalQuantity + item?.quantity)
          return (
          <>
            <h6></h6>
            <li key={item.name}>{item.name} <span>{item.quantity>1? 'x2' : '' }</span><span className="max-quantity">{item.maxQuantity ? `You can add an ingredient up to two times!`: ''}</span><button onClick={()=> 
              update('remove', item.name)
            }>Remove</button></li>
            </>
          )
        })
      }
        <h4 className="max-quantity">{totalQuantity>=6 || salad.length >=6 ? 'Max quantity has been reached!':''}</h4>
      </ul>
    </div>
  )
}

export default SaladSummary;