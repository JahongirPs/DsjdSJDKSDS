import {useDispatch, useSelector} from "react-redux";
import {AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai";
import {toggleLike} from "./action";

const Liked = () => {
  const dispatch = useDispatch();
  const likedProducts = useSelector(state => state.likedProducts);


  return (
    <div className="container">
      <div className="row top">
        {
          likedProducts?.map(({ title, price, images, description, id }) =>
            <div key={id} className="col-3">
              <div className="card" style={{width:"16rem"}}>
                <img src={images} alt={description} className="images"/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>

                  <div className="price">{price}</div>
                  {
                    likedProducts.some(product => product.id === id) ?
                      <AiTwotoneHeart
                        style={{fontSize:"30px",cursor:"pointer"}}
                        onClick={() => dispatch(toggleLike({id, title, price, images, description}))}
                        color='black'
                      /> :
                      <AiOutlineHeart
                        style={{fontSize:"30px",cursor:"pointer"}}
                        onClick={() => dispatch(toggleLike({id, title, price, images, description}))}
                        color='black'
                      />
                  }

                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Liked;
