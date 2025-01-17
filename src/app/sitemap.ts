import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { NEXT_PUBLIC_SITE_URL } = process.env;
  return [
    {
      url: `${NEXT_PUBLIC_SITE_URL}`
    },
    {
      url: `${NEXT_PUBLIC_SITE_URL}/contact`
    }
  ];
}
