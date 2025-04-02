import { Store } from "@/components/store"

export default function StorePage({ params }: { params: { id: string } }) {
  return <Store id={params.id} />
}

