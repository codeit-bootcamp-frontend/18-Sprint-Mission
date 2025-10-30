export async function getData() {
  const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/items`;
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("서버 요청 실패" + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("에러 발생", error);
  }
}
