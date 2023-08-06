import { baseUrl } from "@/config/env";

export const getAllListings = async () => {
  const response = await fetch(`${baseUrl}/listings`);
  return await response.json();
};
