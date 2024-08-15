import {
  ToggleGroup,
} from "@/components/ui/toggle-group"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { ScrollBar } from "./ui/scroll-area"
import { Category as TCategory } from '@prisma/client';

export function Filter({ count, data } : { count: number, data: TCategory[] }) {
  return (
    <div className="py-4 w-full">
      <div className="py-3">
        <p className="py-2 text-4xl font-extrabold">Tênis</p>
        <p className="text-medium font-extralight">{count} produtos encontrados</p>
      </div>
      
      <ScrollCategories categories={data} />
    </div>
  )
}

export async function ScrollCategories({ categories } : { categories: TCategory[] }) {

  return (
    <ScrollArea type="auto" className="whitespace-nowrap w-full overflow-x-auto">
      <ToggleGroup size={"lg"} type="multiple" className="py-5 items-start justify-start gap-6">
        <Category title="Todos" slug="Todos"/>
        {categories.map((category: TCategory) => <Category key={category.slug} {...category} /> )}
      </ToggleGroup>
      <ScrollBar orientation="horizontal" className="bg-black h-20 w-full" />
    </ScrollArea>
  )
}

import { ToggleGroupItem } from "@radix-ui/react-toggle-group";

type propsCategory = {
  title: string,
  slug: string
}

export function Category({ title, slug }: propsCategory) {
  return (
    <ToggleGroupItem className="shadow px-8 py-2 rounded-full data-[state=off]:bg-neutral-200 data-[state=off]:shadow-gray-300
     data-[state=on]:bg-sky-400 data-[state=on]:border-sky-100 data-[state=on]:text-white" 
      value={slug} aria-label={slug}
    >
      <p className="text-sm font-medium">{title}</p>
    </ToggleGroupItem>
  )
}
