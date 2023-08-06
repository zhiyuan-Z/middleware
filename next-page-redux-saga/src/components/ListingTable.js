export default function ListingTable({ columns, listingData }) {
  return (
    <div className="p-2">
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listingData.map(listing => {
            return (
              <tr key={listing.id}>
                {columns.map(column => (
                  <td key={column.header}>{listing[column.property]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
