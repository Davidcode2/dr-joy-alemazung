"use client";
import { useState, useEffect } from "react";
import { fetchAPI } from "../utils/fetch-api";
import { getStrapiMedia } from "../utils/api-helpers";
import Loader from "@/src/components/loader";
import HeroImage from "@/src/components/heroImage";
import SmallHeroImage from "@/src/components/shortHeroImage";

export default function Buergermeisterliches() {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const path = `/buergermeister`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          headerImage: { fields: ["url"] },
        },
      };
      const responseData = await fetchAPI(path, urlParamsObject);
      setData(responseData.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loader />;
  const imageUrl = getStrapiMedia(data.headerImage.url)!;
  return (
    <div>
      <SmallHeroImage url={imageUrl}></SmallHeroImage>
      <div className="p-10">
        <h1 className="text-7xl font-semibold font-serif">{data.heading}</h1>
        <h2 className="text-3xl font-semibold">{data.subHeading}</h2>
      </div>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"></p>
    </div>
  );
}
