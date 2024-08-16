import { useState } from "react";
import { Badge } from "./Badge";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { ToggleGroup } from "./ui/toggle-group";
import { Category as TCategory } from '@prisma/client';

type ProductListProps = {
  categories: TCategory[]
  onFilter: (categories: string[]) => void;
}


const ScrollCategories: React.FC<ProductListProps> = ({ categories, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChange = (value: string[]) => {
    setSelectedCategories(value);
    onFilter(value);
  };

  return (
    <ScrollArea type="auto" className="whitespace-nowrap w-full overflow-x-auto">
      <ToggleGroup 
        size={"lg"} 
        type="multiple" 
        className="py-5 items-start justify-start gap-6" 
        onValueChange={(value) => handleChange(value)}
      >
        {categories.map((category: TCategory) => 
          <Badge 
            key={category.slug}
            title={category.title}
            slug={category.slug}
           /> 
        )}
      </ToggleGroup>
      <ScrollBar orientation="horizontal" className="w-full" />
    </ScrollArea>
  )
}

export default ScrollCategories;