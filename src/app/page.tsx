"use client"

import { Filter } from "@/components/Filter";
import InputSearch from "@/components/InputSearch";
import ProductsList, { TProductWithCategory } from "@/components/ProductList";
import ScrollCategories from "@/components/ScrollCategories";
import { fetchCategories } from "@/services/category";
import { fetchProducts } from "@/services/products";
import { Category as TCategory } from "@prisma/client";
import { useEffect, useState } from "react";

type HomeProps = {
  dataP: TProductWithCategory[]
  dataC: TCategory[]
}


export const Home: React.FC<HomeProps> = ({ dataP, dataC }) => {
  const [products, setProducts] = useState<TProductWithCategory[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProductWithCategory[]>([]);
  const [categories, setCategories] = useState<TCategory[]>([]);
  
    useEffect(() => {

      const getData = async () => {
        console.log(dataP, dataC)
        setProducts(dataP);
        setFilteredProducts(dataP);
        setCategories(dataC);
      }


     
      
      getData();
    }, []);

    const handleSearch = (query: string) => {
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) 
      || p.category.title.toLowerCase().includes(query.toLowerCase()) 
      );
      setFilteredProducts(filtered);
    };
  
    const handleFilter = (categories: string[]) => {
      if (categories.length == 0) {
        setFilteredProducts(products);
        return
      }

      const filtered = products.filter((p) => categories.includes(p.category.slug) );
      console.log(products)
      console.log(filtered)
      setFilteredProducts(filtered);
    };

  

  return (
    <>
      <div className="container mx-auto p-6 py-10 px-6 md:px-16 lg:px-24 xl:px-36 2xl:px-12">
        <InputSearch onSearch={handleSearch} />

        <Filter count={filteredProducts.length}>
          <ScrollCategories categories={categories} onFilter={handleFilter}/>
        </Filter>
        <ProductsList products={filteredProducts}/>
      </div>
    </>
  )
}

export default Home;