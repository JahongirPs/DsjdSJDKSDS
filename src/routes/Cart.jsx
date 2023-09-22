import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cartProducts);

  function removeFromCart(id) {
    dispatch({ id, type: "REMOVE_FROM_CART" });
  }

  return (
    <div className="container">
      <div className="row top">
        {
          cartProducts?.map(({ title, price, images, description, id }) =>
            <div key={id} className="col-3">
              <div className="card" style={{width:"16rem"}}>
                <img src={images[0]} alt={description} className="images"/>
                <div className="card-body">
                  <h5 className="card-title">{title.slice(0, 12) + "..."}</h5>
                  <div style={{fontSize:"14px"}}>{description.slice(0, 35) + "..."}</div>
                  <div className="price">{price}</div>
                  <button onClick={() => removeFromCart(id)}
                          className="btn-primary">Remove</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>

  )
}

export default Cart;
