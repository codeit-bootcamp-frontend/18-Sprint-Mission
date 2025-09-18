"use server";

import { ActionState } from "@/types";
import { revalidateTag } from "next/cache";

export default async function addTaskAction(
  prevData: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name")?.toString();

  if (!name) return { status: false, error: "할 일을 입력해주세요" };

  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) return { status: false, error: response.statusText };

    revalidateTag("todo");

    return { status: true, error: "" };
  } catch (error) {
    return { status: true, error: `할 일 등록에 실패했습니다. ${error}` };
  }
}
