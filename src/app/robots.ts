import type { MetadataRoute } from "next";
import { NEXT_PUBLIC_SITE_URL } from "../variables/general";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
