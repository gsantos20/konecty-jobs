import { Category as TCategory, Product as TProduct } from '@prisma/client';
import  ProductCard from './ProductCard';

export type TProductWithCategory = TProduct & {
  category: TCategory;
}

type ProductListProps = {
  products: TProductWithCategory[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="py-4 grid grid-rows-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
      {products.map((product) => 
        <ProductCard 
          key={product.id} 
          {...product} 
        /> 
      )} 
    </div>
  )
}

export default ProductList;