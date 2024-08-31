import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  console.log(bookings);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">
        Your Bookings:{bookings.length}
      </h2>
    </div>
  );
};

export default Bookings;
