import { TProductWithCategory } from "@/components/ProductList";

export const fetchProducts = async () => {
  const response = await fetch('/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: { revalidate: 10 }
  });

  const data = await response.json() as TProductWithCategory[];
  return data
}