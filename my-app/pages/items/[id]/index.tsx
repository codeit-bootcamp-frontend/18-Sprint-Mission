import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <div>Todo Detail Page {router.query.id}</div>;
}
