import { baseUrl } from "lib/utils";
import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
};

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // In a real application, you would fetch your product, collection, and page data here
  // and map them to the Route type.
  // For now, we'll keep fetchedRoutes empty.

  const routesMap = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  let fetchedRoutes: Route[] = [];

  return [...routesMap, ...fetchedRoutes];
}
