import { Category as TCategory } from "@prisma/client";

export const fetchCategories = async () => {
  const response = await fetch('/api/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: { revalidate: 10 }
  });

  const data = await response.json() as TCategory[];
  return data
};