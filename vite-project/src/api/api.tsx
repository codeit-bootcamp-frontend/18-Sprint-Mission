import instance from "./axiosInstance";

export interface Items {
  id: number;
  name: string;
  price: number;
  tags: string[];
  images: string[];
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}
export type OrderBy = "recent" | "favorite";
export interface GetListsParams {
  page: number;
  pageSize: number;
  orderBy: OrderBy;
  keyword?: string;
}

export interface GetListsResponse {
  list: Items[];
}

export async function getLists({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: GetListsParams): Promise<GetListsResponse> {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  try {
    const { data } = await instance.get(`/products?${query}`);
    return data;
  } catch {
    throw new Error("상품 목록을 가져오는데 실패했습니다.");
  }
}
