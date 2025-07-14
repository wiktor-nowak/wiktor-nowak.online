import { MetadataRoute } from "next";
import { NEXT_PUBLIC_SITE_URL } from "../variables/general";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${NEXT_PUBLIC_SITE_URL}`,
    },
    {
      url: `${NEXT_PUBLIC_SITE_URL}/contact`,
    },
  ];
}
