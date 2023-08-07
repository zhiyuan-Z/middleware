import ListingForm from "@/components/ListingForm";
import { addListing } from "@/store/listings/actions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function NewListingPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = data => {
    dispatch(addListing(data));
    router.push("/listings");
  };

  return (
    <div className="p-8 m-auto w-[800px]">
      <h1 className="text-xl font-semibold">Create a new listing</h1>
      <ListingForm onSubmit={onSubmit} submitText={"Create New Listing"} />
    </div>
  );
}
