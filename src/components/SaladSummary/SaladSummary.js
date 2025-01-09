  import { useContext, useState } from "react";
  import { SaladContext } from "../Saladmaker/Saladmaker";
  import { createUseStyles } from "react-jss";

  const useStyle = createUseStyles({
    '@keyframes opacity': {
      '0%': {opacity: 0},
      '50%': {opacity: 0.8},
      '100%': {opacity: 0}
    }, maxQuantityJss: {
      color: 'red',
      position: 'absolute',
      top: '-0.8vw',
      animationName: '$opacity',
      animationDuration: '2.5s',
      border: 'solid 1px 0.5px black',
      backgroundColor: '#D3D3D3',
      boxSizing: 'content-box',
      padding: '0.5vw 0.5vw 0.5vw 0.5vw',
      borderRadius: '10px'
    }
  })

function SaladSummary() {
  const classes = useStyle();
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
            }, 2000)
          }
          
          return (
            <div className="li-box">
            <h3 key={item.name} >{item.name} <span>{item.quantity>1? 'x2' : '' }</span></h3><span className={`${item.maxQuantity? classes.maxQuantityJss : 'max-quantity'}`}>You can add an ingredient up to two times!</span><button onClick={()=> 
              update('remove', item.name)
            }>➖</button>
            </div>
          )
        })
      }
        <h4 className="max-quantity-alert">{salad.length>=6 || totalQuantity>=6?'You can add up to 6 ingredients/overall quantity!':''}</h4>
      </ul>
    </div>
  )
}

export default SaladSummary;