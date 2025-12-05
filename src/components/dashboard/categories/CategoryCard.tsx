import { Card, CardContent } from "@/components/ui/card";
import type { CategoryCardProps } from "@/types";

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="group cursor-pointer p-3 rounded-[6px]  border-[#E5E7EB] h-[88px] hover:border-[#4EA674] transition-all duration-200 hover:shadow-sm">
      <CardContent className="ps-0">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 rounded-lg border border-neutral-300 p-2">
            <img
              src={category.image}
              alt={category.name}
              className=""
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML = `<div class="h-full w-full flex bg-background items-center justify-center"><span class="text-xs text-gray-500 font-medium">${category.name.charAt(
                  0
                )}</span></div>`;
              }}
            />
          </div>

          <span className="text-sm font-medium text-[#111827]">
            {category.name}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
