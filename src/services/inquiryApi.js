const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * 문의 데이터를 가져온다.
 * @param {string} productId
 */
export const requestInquiryLists = async (productId) => {
  const url = new URL(`${BASE_URL}products/${productId}/comments`);
  url.searchParams.append("limit", 3);

  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

/**
 * 문의 내용을 등록한다.
 * @param {object{}} inquiryData 상품 아이디와 문의 내역 객체
 * @returns
 */
export const requestPostInquiry = async (inquiryData) => {
  const url = new URL(`${BASE_URL}products/${inquiryData.productId}/comments`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryData.inquiry),
    });

    if (!response.ok) {
      alert("데이터를 전송하지 못했습니다. 다시 시도해주세요");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
