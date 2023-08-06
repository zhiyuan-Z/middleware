import FormRow from "@/components/FormRow";
import Input from "@/components/Input";
import InputGroup from "@/components/InputGroup";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { addListing } from "@/store/listings/actions";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function newListingPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { register, handleSubmit, control, formState } = useForm();

  const { field: startDate } = useController({
    name: "startDate",
    control,
    defaultValue: new Date().getTime(),
    rules: { required: true },
  });

  const { field: endDate } = useController({
    name: "endDate",
    control,
    defaultValue: new Date().getTime(),
    rules: { required: true },
  });

  const onSubmit = data => {
    dispatch(addListing(data));
    router.push("/listings");
  };

  console.log("errors", formState.errors);

  return (
    <div className="p-8 m-auto w-[800px]">
      <h1 className="text-xl font-semibold">Create a new listing</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor="title">Listing Title</Label>
          <Input
            id="title"
            {...register("title", { required: true })}
            placeholder="Listing Title"
          />
        </InputGroup>
        <FormRow>
          <InputGroup>
            <Label htmlFor="bedroom">Number of bedroom(s)</Label>
            <Select id="bedroom" {...register("bedroom", { required: true })}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5+">5+</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="bathroom">Number of bathroom(s)</Label>
            <Select id="bathroom" {...register("bathroom", { required: true })}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5+">5+</option>
            </Select>
          </InputGroup>
        </FormRow>
        <FormRow>
          <InputGroup>
            <Label htmlFor="startDate">Earliest Lease Start Date</Label>
            <DatePicker
              className="border rounded p-1 border-neutral-300 w-full"
              id="startDate"
              name="startDate"
              selected={startDate.value}
              onChange={date => startDate.onChange(date.getTime())}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="endDate">Latest Lease End Date</Label>
            <DatePicker
              className="border rounded p-1 border-neutral-300 w-full"
              id="endDate"
              name="endDate"
              selected={endDate.value}
              onChange={date => endDate.onChange(date.getTime())}
            />
          </InputGroup>
        </FormRow>
        <FormRow>
          <InputGroup>
            <Label htmlFor="rent">Monthly Rent</Label>
            <Input
              id="rent"
              type="number"
              {...register("rent", { required: true })}
              placeholder="Monthly Rent"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="petFriendly">Pet Friendliness</Label>
            <Select
              id="petFriendly"
              {...register("petFriendly", { required: true })}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Cat Only">Cat Only</option>
              <option value="Dog Only">Dog Only</option>
            </Select>
          </InputGroup>
        </FormRow>
        <InputGroup>
          <Label htmlFor="street">Street</Label>
          <Input
            id="street"
            {...register("street", { required: true })}
            placeholder="Street Address"
          />
        </InputGroup>
        <FormRow>
          <InputGroup>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              {...register("city", { required: true })}
              placeholder="City"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="state">State</Label>
            <Select
              id="state"
              defaultValue
              {...register("state", { required: true })}
            >
              <option disabled value>
                --select a state--
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Select>
          </InputGroup>
        </FormRow>
        <InputGroup>
          <Label htmlFor="zip">Zipcode</Label>
          <Input
            id="zip"
            type="number"
            {...register("zip", { required: true })}
            placeholder="Zipcode"
          />
        </InputGroup>
        <Input type="submit" value="Create New Listing" />
      </form>
    </div>
  );
}
