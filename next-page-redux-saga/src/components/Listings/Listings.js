import Link from "next/link";

let listings = [
  {
    id: "1",
    title: "Cozy apartment with 2 bedrooms",
    postTime: 1684560740000,
    bedroom: 2,
    bathroom: 2,
    startDate: 1682919140000,
    endDate: 1691040754000,
    rent: 1600,
    zip: 12345,
  },
  {
    id: "2",
    title: "1 bedroom inside a stunning apartment",
    postTime: 1684819940000,
    bedroom: 1,
    bathroom: 1,
    startDate: 1688794340000,
    endDate: 1703050340000,
    rent: 900,
    zip: 23456,
  },
  {
    id: "3",
    userId: "1",
    title: "Great studio near subway station",
    postTime: 1685424740000,
    bedroom: 0,
    bathroom: 1,
    startDate: 1691904740000,
    endDate: 1717133540000,
    rent: 1300,
    zip: 34567,
  },
];

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

export default function Listings() {
  // fetch data, process data, convert timestamp to date object
  return (
    <div className="p-2">
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => {
            return (
              <tr>
                {columns.map(column => (
                  <td>
                    {column.property !== "title" ? (
                      listing[column.property]
                    ) : (
                      <Link
                        href={`/listings/${listing.id}`}
                        className="hover:underline focus:underline"
                      >
                        {listing[column.property]}
                      </Link>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
