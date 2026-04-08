import { useQuery } from "@tanstack/react-query";
import { api, type SiteCopyResponse } from "@shared/routes";
import { normalizeSiteCopy } from "@shared/siteCopy";

export function useSiteCopy() {
  return useQuery({
    queryKey: [api.siteCopy.get.path],
    staleTime: 0,
    gcTime: 5 * 60 * 1000,
    refetchOnMount: "always",
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    queryFn: async () => {
      const res = await fetch(api.siteCopy.get.path, {
        credentials: "include",
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch site copy");
      const data = await res.json();
      return normalizeSiteCopy(data) as SiteCopyResponse;
    },
  });
}
