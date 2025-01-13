import { useEffect, useState} from 'react';
const backend = 'https://backend.lorenzo-viganego/';
const localhost = 'http://localhost:3000/'

function FetchImage (salad) {
  const [data, setData] = useState({});

  useEffect(() => {
    let isMounted = true;
    const arrayLength = salad.length;
    
    const request = async () =>  {
    let quantity = 0;
    salad.forEach(ingredient => {
      quantity+= ingredient.quantity
    })
    try {
    const response = await fetch(`${localhost}saladimages`, {
      method: "POST",
      body: JSON.stringify({
        arrayLength: arrayLength,
        quantity: quantity
      }), 
      headers: {
        "Content-Type": "application/json"}
    } );
    if (response.ok) {
      const {url} = await response.json(); 
      setData({url, quantity});
    } else {
      setData({responseStatus: response.status});
    }
  } catch(error) {
    console.error(error)
  }
  }

  if (arrayLength > 0) {
    request() 
  }

  return () => isMounted = false;
  
  }, [salad])

  return [data]
}

export default FetchImage;