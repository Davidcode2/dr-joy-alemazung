import Image from "next/image";
import { getStrapiMedia } from "../app/[lang]/utils/api-helpers";

export default function ImageComponent({ image }: { image: any } ) {
  return (
    <div className="my-6">
      <Image
        src={getStrapiMedia(image.url)!}
        alt={image.altText || image.caption || ""}
        width={600}
        height={400}
        className="rounded-lg"
      />
      {image?.caption && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {image.caption}
        </p>
      )}
    </div>
  );
}
