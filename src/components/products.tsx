
import Image from 'next/image'
import { Category as TCategory, Product as TProduct } from '@prisma/client';

export type TProductWithCategory = TProduct & {
  category: TCategory;
}

export async function Products({ data }: { data: TProductWithCategory[] } ) {
  return (
    <div className="py-4 grid grid-rows-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
      {data.map((product) => <ProductCard key={product.id} {...product} /> )} 
    </div>
  )
}

export function ProductCard({ image, title, category, price }: TProductWithCategory) {
  return (
    <div className="p-5 md:p-4 lg:p-7 border border-gray-300 border-opacity-70 shadow-sm shadow-gray-300 rounded-2xl w-auto">
      <div className='items-center align-middle flex'>
        <Image src={image} 
          width={180} height={120} alt={"test " + title} className='w-full'
        />
      </div>
      <div className='grid gap-3'>
        <p className="font-semibold text-lg">{category.title}</p>
        <p className="font-light text-xs text-zinc-400">{title}</p>
        <p className="font-semibold text-base">R${price}</p>
      </div>
    </div>
  )
}