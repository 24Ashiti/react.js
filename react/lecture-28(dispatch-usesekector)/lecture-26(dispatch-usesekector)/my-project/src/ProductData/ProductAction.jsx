import { PRODUCT_ADD } from "./ProductConstant";

export const ProductData = async (data) => {
  let productList = await fetch("http://localhost:3000/Product");
  data = productList.json();
  console.warn(data);
  console.warn("ProductData Called ", data);
  return {
    type: PRODUCT_ADD,
  };
};
