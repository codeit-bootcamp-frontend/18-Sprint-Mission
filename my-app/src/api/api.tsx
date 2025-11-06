const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/items`;

export async function getData() {
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

export async function postData(todoData: string) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: todoData }),
    });
    if (!response.ok) {
      throw new Error("서버 요청 실패" + response.status);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log("에러 발생", error);
  }
}

export async function patchData(
  itemId: number,
  updateData: Partial<{ name: string; isCompleted: boolean }>
) {
  try {
    const response = await fetch(`${BASE_URL}/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      throw new Error("서버 요청 실패" + response.status);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log("에러 발생", error);
  }
}
