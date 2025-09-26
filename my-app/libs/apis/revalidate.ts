export async function revalidate(paths: string[]) {
  await fetch("/api/revalidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ paths }),
  });
}
