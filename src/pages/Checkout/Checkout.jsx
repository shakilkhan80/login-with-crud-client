import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Checkout = () => {
  const { title, price, _id, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value ? form.email.value : user?.email;
    const date = form.date.value;
    const price = form.price.value;
    const order = {
      serviceId: _id,
      serviceName: title,
      name,
      img,
      email,
      date,
      price,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("bookings confirm");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>Book Now: {title}</h1>

      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-5">
        <form onSubmit={handleOrder}>
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={"$" + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Confirm Booking"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
