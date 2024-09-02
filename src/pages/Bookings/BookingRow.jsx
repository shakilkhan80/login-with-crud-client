// eslint-disable-next-line react/prop-types
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, img, price, serviceName, email, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{serviceName}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-white bg-green-600 rounded-xl px-4 py-1">
            Confirmed
          </span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-sm btn-primary"
          >
           Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
