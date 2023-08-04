import { useRouter } from "next/router";

export default function listingDetailPage() {
  const router = useRouter();
  return <div>detail page: {router.query.id}</div>;
}
