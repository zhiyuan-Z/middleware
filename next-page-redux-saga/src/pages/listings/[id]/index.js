import { getAllListings } from "@/api/listingsApi";
import Image from "next/image";

// SSG (static site generation)
export async function getStaticPaths() {
  const listings = await getAllListings();

  // paths that need to be prerendered
  const paths = listings.map(listing => ({
    params: { id: listing.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  console.log("params", params);
  const res = await fetch(`http://localhost:5000/listings/${params.id}`);
  const listingDetail = await res.json();
  return { props: { listingDetail } };
};

export default function listingDetailPage({ listingDetail }) {
  const {
    title,
    postTime,
    bedroom,
    bathroom,
    startDate,
    endDate,
    rent,
    petFriendly,
    street,
    city,
    state,
    zip,
    gallery,
  } = listingDetail;
  return (
    <div className="max-w-[1000px] m-auto p-8">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="pb-4">Posted: {new Date(postTime).toLocaleString()}</p>
      <div className="grid grid-cols-2">
        <div className="relative w-[300px] flex flex-col gap-3">
          {gallery.map(image => (
            <Image
              key={image}
              src={image}
              alt="apartment image"
              width={300}
              height={300}
              className="object-contain"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-y-3 auto-rows-min">
          <div className="font-semibold">Number of bedroom(s)</div>
          <div>{bedroom}</div>
          <div className="font-semibold">Number of bathroom(s)</div>
          <div>{bathroom}</div>
          <div className="font-semibold">Lease start date</div>
          <div>{new Date(startDate).toLocaleDateString()}</div>
          <div className="font-semibold">Lease end date</div>
          <div>{new Date(endDate).toLocaleDateString()}</div>
          <div className="font-semibold">Monthly rent</div>
          <div>{rent}</div>
          <div className="font-semibold">Pet friendly?</div>
          <div>{petFriendly}</div>
          <div className="font-semibold">Address</div>
          <div>
            <p>{street}</p>
            <span>{city}</span>, <span>{state}</span> <span>{zip}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
