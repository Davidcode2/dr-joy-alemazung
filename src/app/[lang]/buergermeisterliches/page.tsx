"use client";
import { useState, useEffect } from "react";
import { fetchAPI } from "../utils/fetch-api";
import { getStrapiMedia } from "../utils/api-helpers";
import Loader from "@/src/components/loader";
import HeroImage from "@/src/components/heroImage";

export default function Buergermeisterliches() {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/buergermeister`;
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          headerImage: { fields: ["url"] },
        },
      };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      console.log(responseData);
      console.log(responseData.data.headerImage.url);
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
      <HeroImage url={imageUrl}>
        <h1 className="text-7xl font-semibold text-white">{data.heading}</h1>
        <h2 className="text-3xl font-semibold text-white">{data.subHeading}</h2>
      </HeroImage>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      </p>
    </div>
  );
}
