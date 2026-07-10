import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://your-domain.vercel.app";

  return [
    { url },
    { url: `${url}/about` },
    { url: `${url}/contact` },
    { url: `${url}/howItWorks` },
    { url: `${url}/faq` },
    { url: `${url}/privacy-policy` },
    { url: `${url}/terms-and-conditions` },
    { url: `${url}/cookies-policy` },

    { url: `${url}/services/home-shifting` },
    { url: `${url}/services/office-relocation` },
    { url: `${url}/services/local-shifting` },
    { url: `${url}/services/intercity-relocation` },
    { url: `${url}/services/bike-transport` },
    { url: `${url}/services/car-transport` },
    { url: `${url}/services/packing-unpacking` },
    { url: `${url}/services/loading-unloading` },
  ];
}