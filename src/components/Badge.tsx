import { ToggleGroupItem } from "./ui/toggle-group";

type BadgeProps = {
  title: string,
  slug: string
}

export const Badge: React.FC<BadgeProps> = ({ title, slug }) =>  {
  return (
    <ToggleGroupItem className="shadow px-8 py-2 rounded-full data-[state=off]:bg-neutral-200 data-[state=off]:shadow-gray-300
  data-[state=on]:bg-sky-400 data-[state=on]:border-sky-100 data-[state=on]:text-white" value={slug} aria-label={slug}>
      <p className="text-sm font-medium">{title}</p>
    </ToggleGroupItem>
  )
}
