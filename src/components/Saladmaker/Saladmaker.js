import { createContext, useReducer, useState, lazy, Suspense } from 'react';
import { ingredients } from '../../data/saladData'
import SaladBuilder from '../Saladbuilder/Saladbuilder';
import { add, remove } from '../../services/operations';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  saladImageWrapper: {
    display: 'none'
  }
})

const SaladSummary = lazy(() => {
  return import('../Saladsummary/SaladSummary')
})

export const SaladContext = createContext()

function reducer(state, action) {
  let totalQuantity = 0;
  state.forEach(ingredient => {
    totalQuantity += ingredient?.quantity
  })

  if (action.actionType === 'add') {
    if (state.length <= 6 && totalQuantity <= 5) {
      return add(state, action.item)
    } else {
      return state
    };
  } else if (action.actionType === 'remove') {
        return remove(state, action.item)
    }

} 


function SaladMaker() {
const [ salad, setSalad ] = useReducer(reducer, []);
const [totQuantity, setTotalQuantity] = useState();
const [saladImage, setSaladImage ] = useState({});
const classNames = useStyles();
let bool = false;
salad.length > 0 ? bool = true : bool = false;
return (
  <>
  <h1 ><span>🍎</span>Build your own salad!<span>🥦</span></h1>
  <div className="salad-maker-wrapper">
      <SaladContext.Provider 
        value={{
          salad,
          setSalad,
          totQuantity,
          setTotalQuantity,
          setSaladImage
        }}
      >
        <SaladBuilder/>
        <Suspense>
          {bool && <SaladSummary/>}
        </Suspense>
      </SaladContext.Provider>
  </div>
  {saladImage.responseStatus != 401 ? <div className={saladImage.url? "salad-image-wrapper":classNames.saladImageWrapper}><div className="salad-image-container">
    <img src={saladImage.url} alt="" className="salad-image" />
  </div><h1>{saladImage.quantity == 0? '' : saladImage.quantity == 1 ? 'XS Salad': saladImage.quantity == 2 ? 'S Salad': saladImage.quantity == 3 ? 'M Salad' : saladImage.quantity == 4 ? 'L Salad' : saladImage.quantity == 5 ? 'XL Salad' : saladImage.quantity == 6 ? 'XXL salad' : ''}</h1></div> : <h1>
      You have to choose at least one ingredient!
    </h1>}

  </>
)
}

export default SaladMaker;