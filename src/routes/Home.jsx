import {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { toggleLike } from './action';




const  Home = () => {
  const dispatch = useDispatch()
  const  [productsData, setProductsData ]  = useState([]);
  const likedProducts = useSelector(state => state.likedProducts) || [];



  useEffect(() => {
    (async  () => {
      const response = await  fetch  ("https://api.escuelajs.co/api/v1/products")
      const  data = await response.json()
      setProductsData(data);
    })()
  },[])
console.log(productsData)


  function addToCart(addedProducts) {
 dispatch({addedProducts, type:"ADD_TO_CART"})
  }

return (
  <div className="container">
    <div className="row top">
        {
          productsData?.map(({id,title, price, images, description}) =>
              <div key={id} className="col-3">
            <div className="card" style={{width:"16rem"}}>
              <img src={images[0]} alt={description} className="images"/>
              <div className="card-body">
                <h5 className="card-title">{title.slice(0.12) + "..."}</h5>
                
                <div className="action-items">
                  <button onClick={() => addToCart({id,title, price, images, description})}
                          className="btn-primary">Add....</button>
                  {
                    likedProducts.some(product => product.id === id) ?
                      <AiTwotoneHeart style={{fontSize:"30px",cursor:"pointer"}}
                        onClick={() => dispatch(toggleLike({id, title, price, images, description}))}
                        color='black'
                      /> :
                      <AiOutlineHeart
                        style={{fontSize:"30px",cursor:"pointer",}}
                        onClick={() => dispatch(toggleLike({id, title, price, images, description}))}
                        color='black'
                      />
                  }
                </div>
              </div>
            </div>
          </div>
          )
        }
    </div>
  </div>
)
}
export default Home