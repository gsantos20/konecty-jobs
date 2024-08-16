import React from 'react';
import Image from 'next/image'
import { TProductWithCategory } from "./ProductList";

type ProductCardProps = TProductWithCategory 


const ProductCard: React.FC<ProductCardProps> = ({ image, title, category, price }) =>  {
  return (
    <div className="p-5 md:p-4 lg:p-7 border border-gray-300 border-opacity-70 shadow-sm shadow-gray-300 rounded-2xl w-auto">
      <div className='items-center align-middle flex'>
        <Image src={image}
          width={100} height={100}
          alt={"test " + title} className='object-cover w-full'
        />
      </div>
      <div className='grid gap-3'>
        <p className="font-semibold text-lg">{category.title}</p>
        <p className="font-light text-xs text-zinc-400">{title}</p>
        <p className="font-semibold text-base">R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>
    </div>
  )
}

export default ProductCard;