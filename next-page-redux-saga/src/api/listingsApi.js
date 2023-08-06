import { baseUrl } from "@/config/env";

export const getAllListings = async () => {
  const response = await fetch(`${baseUrl}/listings`);
  return await response.json();
};

export const addListing = async ({ newListing }) => {
  const response = await fetch(`${baseUrl}/listings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newListing),
  });
  return await response.json();
};
