import ListingTable from "@/components/ListingTable";
import { wrapper } from "@/store";
import { getAllListings } from "@/store/listings/actions";
import Link from "next/link";
import { useMemo } from "react";
import { END } from "redux-saga";

const columns = [
  { property: "title", header: "Title" },
  { property: "bedroom", header: "Bedroom" },
  { property: "bathroom", header: "Bathroom" },
  { property: "rent", header: "Rent" },
  { property: "startDate", header: "Start date" },
  { property: "endDate", header: "End date" },
  { property: "zip", header: "Zipcode" },
  { property: "postTime", header: "Posted" },
];

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({req, res}) => {
  await store.dispatch(getAllListings());
  await store.dispatch(END);
  // the END action will terminate all the blocked Sagas and wait for all the
  // child tasks to terminate before terminating the task
  await store.sagaTask.toPromise()
  // wait for the saga to complete before continuing
  return {
    props: {
      state: store.getState(),
    },
  };
})

export default function ListingsPage(props) {
  const { listings: listingsData } = props.state.listings;

  const listings = useMemo(() => {
    return listingsData.map(listing => {
      return {
        ...listing,
        title: (
          <Link
            href={`/listings/${listing.id}`}
            className="hover:underline focus:underline"
          >
            {listing.title}
          </Link>
        ),
        startDate: new Date(listing.startDate).toLocaleDateString(),
        endDate: new Date(listing.endDate).toLocaleDateString(),
        postTime: new Date(listing.postTime).toLocaleDateString(),
      };
    });
  }, [listingsData]);

  return (
    <div className="p-2 flex flex-col items-center">
      <ListingTable columns={columns} listingData={listings} />
      <Link className="btn w-96 m-auto" href="listings/newListing">Create A New Listing</Link>
    </div>
  );
}
