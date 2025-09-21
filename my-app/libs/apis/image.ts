import HttpClient from "./http-client";

export async function uploadImage(file: File): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const client = new HttpClient();
    const result = await client.post("images/upload", formData, {
      isFormData: true,
    });
    return (result as { url: string }).url;
  } catch (error) {
    return null;
  }
}
