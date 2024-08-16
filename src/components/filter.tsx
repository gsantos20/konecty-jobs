import { ReactNode } from 'react';

type ProductListProps = {
  count: number,
  children: ReactNode 
}

export const Filter: React.FC<ProductListProps> = ({ count, children }) => {
  return (
    <div className="py-4 w-full">
      <div className="py-3">
        <p className="py-2 text-4xl font-extrabold">Tênis</p>
        <p className="text-medium font-extralight">{count} produtos encontrados</p>
      </div>
      
      {children}
    </div>
  )
}


