import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const { NEXT_PUBLIC_SITE_URL } = process.env;
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"]
      }
    ],
    sitemap: `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`
  };
}
