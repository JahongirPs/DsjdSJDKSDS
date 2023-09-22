export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const toggleLike = (productId) => {
  return {
    type: TOGGLE_LIKE,
    payload: productId
  };
};