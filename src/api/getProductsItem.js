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

export const getProductsItemComments = async ({id, limit = 20}) => {
  try {
    const res = await instance.get(`/products/${id}/comments?limit=${limit}`);
    const body = res.data;
    return body;
  } catch (e) { 
    throw new Error(e);
  }
}