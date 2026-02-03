import Image from "next/image";
import { getStrapiMedia } from "@/src/app/[lang]/utils/api-helpers";
import {
  Asterisk,
  Blend,
  House,
  School,
  Heart,
  Star,
  MapPin,
  Calendar,
} from "lucide-react";

type VitaItem = {
  id: number;
  icon: string;
  text: string;
};

type FamilyVitaData = {
  sectionTitle: string;
  image?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  vitaItems: VitaItem[];
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  asterisk: Asterisk,
  blend: Blend,
  house: House,
  school: School,
  heart: Heart,
  star: Star,
  "map-pin": MapPin,
  calendar: Calendar,
};

export default function FamilyVita({ data }: { data: FamilyVitaData }) {
  const imageUrl = data.image ? getStrapiMedia(data.image.url) : null;

  return (
    <div className="mx-4 md:mx-auto md:w-2/3 mb-40">
      <h2 className="text-center mt-0 py-40 text-5xl lg:text-4xl text-foreground font-serif">
        {data.sectionTitle}
      </h2>
      <div className="">
        {imageUrl && (
          <div className="flex items-center w-full justify-center">
            <Image
              src={imageUrl}
              alt={data.image?.alternativeText || "Portrait"}
              className="object-cover h-full rounded-t-lg"
              width={data.image?.width || 1200}
              height={data.image?.height || 1000}
            />
          </div>
        )}
        <div className="bg-(--ultralight-accent) mx-auto rounded-b-lg">
          <ul className="px-6 md:px-10 lg:mx-auto flex justify-center h-full flex-col">
            {data.vitaItems.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Asterisk;
              const isLast = index === data.vitaItems.length - 1;
              return (
                <li
                  key={item.id}
                  className={`${isLast ? "" : "border-b border-(--light-accent)"} py-10 my-0 ${isLast ? "grid grid-cols-[auto_1fr]" : "flex"} gap-x-4`}
                >
                  <IconComponent size={24} />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
