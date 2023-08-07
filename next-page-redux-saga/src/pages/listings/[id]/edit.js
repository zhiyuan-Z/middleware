import { getListingDetail } from "@/api/listingsApi";
import ListingForm from "@/components/ListingForm";
import { editListing } from "@/store/listings/actions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export const getServerSideProps = async context => {
  const listingDetail = await getListingDetail({ id: context.params.id });
  return { props: { listingDetail } };
};

export default function EditListingPage(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = data => {
    dispatch(editListing({editedListing: data, id: router.query.id}));
    router.push(`/listings/${router.query.id}`);
  };

  return (
    <div className="p-8 m-auto w-[800px]">
      <h1 className="text-xl font-semibold">Edit listing</h1>
      <ListingForm
        onSubmit={onSubmit}
        submitText={"Save"}
        prefillData={props.listingDetail}
      />
    </div>
  );
}
