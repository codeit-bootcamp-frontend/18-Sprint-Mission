import instance from "../instance";

const getItems = async ({ page = 1, pageSize = 10, orderBy = "recent", keyword = "" }) => {
  try {
    const { data } = await instance.get("/products", {
      params: {
        page,
        pageSize,
        orderBy,
        keyword,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getItems;
