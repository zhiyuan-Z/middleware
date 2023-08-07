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

export const getListingDetail = async ({ id }) => {
  const res = await fetch(`http://localhost:5000/listings/${id}`);
  return await res.json();
};

export const editListing = async ({ id, editedListing }) => {
  const response = await fetch(`${baseUrl}/listings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedListing),
  });
  return await response.json();
};
