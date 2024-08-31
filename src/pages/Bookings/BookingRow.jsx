// eslint-disable-next-line react/prop-types
const BookingRow = ({ booking }) => {
  console.log(booking);
  // eslint-disable-next-line react/prop-types
  const { name, img, price, serviceName } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{serviceName}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
