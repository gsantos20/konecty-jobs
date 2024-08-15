import { Filter } from "@/components/filter";
import { Products, TProductWithCategory } from "@/components/products";
import { Input } from "@/components/ui/input"
import { Category as TCategory } from "@prisma/client";

export default async function Home() {
    const products: TProductWithCategory[] = await fetch('http://localhost:3000/api/products',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) =>
      res.json()
    )

    const categories: TCategory[] = await fetch('http://localhost:3000/api/categories',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) =>
      res.json()
    )

  

  return (
    <>
      <div className="py-10 px-6 md:px-16 lg:px-24 xl:px-36 w-full">
        <Input type="text" className="p-4 focus-visible:border-stone-300 rounded-xl focus-visible:ring-transparent" placeholder="Buscar produto"/>

        <Filter count={products.length} data={categories}/>
        <Products data={products}/>
      </div>
    </>
  )
}