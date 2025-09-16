import instance from "./api";

export const getProductsItem = async ({id}) => {
  try { 
    const res = await instance.get(`/products/${id}`);
    const body = res.data;
    return body;
  } catch (e) {
    throw new Error(e);
  }
}