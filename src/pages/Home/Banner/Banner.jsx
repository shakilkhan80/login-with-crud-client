import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-md overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-full object-cover" />
        <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide4"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❯
          </a>
        </div>
        <div className="absolute w-1/2 text-white h-full left-0 justify-center flex flex-col  pl-7  bg-gradient-to-r from-[#151515] to-[#1515150a]">
          <h1 className="text-6xl font-bold my-6">
            Affordable Price For Car Servicing
          </h1>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="my-6">
            <button className="btn btn-outline btn-primary">
              Discover More
            </button>
            <button className="btn ml-3  btn-primary">Latest Projects</button>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-full object-cover" />
        <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide1"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❯
          </a>
        </div>
        <div className="absolute w-1/2 text-white h-full left-0 justify-center flex flex-col  pl-7  bg-gradient-to-r from-[#151515] to-[#1515150a]">
          <h1 className="text-6xl font-bold my-6">
            Affordable Price For Car Servicing
          </h1>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="my-6">
            <button className="btn btn-outline btn-primary">
              Discover More
            </button>
            <button className="btn ml-3  btn-primary">Latest Projects</button>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-full object-cover" />
        <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide2"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❯
          </a>
        </div>
        <div className="absolute w-1/2 text-white h-full left-0 justify-center flex flex-col  pl-7  bg-gradient-to-r from-[#151515] to-[#1515150a]">
          <h1 className="text-6xl font-bold my-6">
            Affordable Price For Car Servicing
          </h1>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="my-6">
            <button className="btn btn-outline btn-primary">
              Discover More
            </button>
            <button className="btn ml-3  btn-primary">Latest Projects</button>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full h-full object-cover" />
        <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide3"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle btn-outline btn-warning mr-5"
          >
            ❯
          </a>
        </div>
        <div className="absolute w-1/2 text-white h-full left-0 justify-center flex flex-col  pl-7  bg-gradient-to-r from-[#151515] to-[#1515150a]">
          <h1 className="text-6xl font-bold my-6">
            Affordable Price For Car Servicing
          </h1>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="my-6">
            <button className="btn btn-outline btn-primary">
              Discover More
            </button>
            <button className="btn ml-3 btn-primary">Latest Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
