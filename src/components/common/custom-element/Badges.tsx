"use client";
import { Badge } from "@/components/ui/badge";

interface BadgeProps {
  title: string[];
}

const Badges: React.FC<BadgeProps> = ({ title }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {title.map((item) => (
        <Badge
          key={item}
          className="px-2 py-1 text-[10px] font-medium bg-gray-700 text-white rounded-full"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default Badges;
