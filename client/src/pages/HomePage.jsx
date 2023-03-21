import { Link } from "react-router-dom";
import HomePagePhoto from "../assets/HomepagePhoto.png";

const HomePage = () => {
  return (
    <section className="lg:py-12 lg:flex lg:justify-center bg-[#F6F1F1]">
      <div className="overflow-hidden lg:mx-8 lg:flex lg:w-full lg:rounded-xl ">
        <div className="flex flex-col justify-center max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800  md:text-3xl">
            Learning made easier with
            <span className="text-primary"> TECHVERSE</span>
          </h2>

          <p className="mt-4 text-gray-500 text-justify">
            Bringing the Practical Roadmaps to help learn and practice different
            technologies.Personalized Paths and many options to choose on the
            way. Offering different levels which challenge you to bring the best
            out of you.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto ">
            <Link
              to={"/dashboard"}
              className="inline-flex items-center rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:opacity-80"
            >
              Dashboard
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:h-full">
            <img
              className="object-cover w-full h-full"
              src={HomePagePhoto}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
