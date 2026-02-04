"use client";

import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/src/app/[lang]/utils/api-helpers";
import { t } from "@/src/lib/i18n";
import { ArrowRight } from "lucide-react";

type Page = {
  id: number;
  heading: string;
  subHeading?: string;
  slug: string;
  heroImage?: {
    url: string;
    alternativeText?: string;
  };
};

type ImageMenuProps = {
  pages: Page[];
  locale: string;
};

export default function ImageMenu({ pages, locale }: ImageMenuProps) {
  const pagesWithImages = pages.filter(
    (page) => page.heroImage?.url
  );

  if (pagesWithImages.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {pagesWithImages.map((page) => {
        const imageUrl = getStrapiMedia(page.heroImage!.url);
        if (!imageUrl) return null;

        return (
          <Link
            key={page.id}
            href={`/${locale}/${page.slug}`}
            className="group relative aspect-[4/3] overflow-hidden block"
          >
            <Image
              src={imageUrl}
              alt={page.heroImage?.alternativeText || page.heading}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl md:text-2xl font-serif font-semibold mb-2">
                {page.heading}
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-(--light-accent) flex items-center justify-center transition-all duration-300 group-hover:bg-(--accent) group-hover:scale-110">
                  <ArrowRight
                    size={16}
                    className="text-white transition-colors duration-300"
                  />
                </div>
                <span className="text-white/90 text-sm md:text-base">
                  {page.subHeading || t("learnMore", locale)}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
