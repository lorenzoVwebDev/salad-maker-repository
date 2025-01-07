  import { useContext, useState } from "react";
  import { SaladContext } from "../Saladmaker/Saladmaker";

function SaladSummary() {
  const [ reload, setReload] = useState(false)
  const { salad, setSalad } = useContext(SaladContext);

  const update = (type, itemName) => {
    setSalad({
      actionType: type,
      item: {
        name: itemName
      }
    })
    setReload(!reload);
  }

  const totalQuantity = salad.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity
  }, 0)

  return (
    <div className="salad-summary-wrapper">
      <ul className="salad-summary-ul">
      {
        salad.map(item => {
          if (item.maxQuantity) {
            setTimeout(() => {
              item.maxQuantity = false;
              setReload(!reload);
            }, 1500)
          }
          
          return (
          <div className="li-box">
            <li key={item.name}>{item.name} <span>{item.quantity>1? 'x2' : '' }</span><span className="max-quantity">{item.maxQuantity ? `You can add an ingredient up to two times!`: ''}</span><button onClick={()=> 
              update('remove', item.name)
            }>Remove</button></li>
          </div>
          )
        })
      }
        <h4 className="max-quantity">{salad.length>=6 || totalQuantity>=6?'Max quantity has been reached!':''}</h4>
      </ul>
    </div>
  )
}

export default SaladSummary;