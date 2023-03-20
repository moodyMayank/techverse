import { Link } from "react-router-dom";

const ChallengeProblemCard = () => {
  return (
    <div class="p-8 max-w-md mx-auto dark:bg-gray-900">
      <Link
        href="#"
        class="group relative block overflow-hidden border dark:bg-gray-500 border-gray-100 dark:border-gray-400"
      >
        <button class="absolute right-4 top-4 z-10 rounded-full dark:text-gray-300 bg-transparent p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            ></path>
          </svg>
        </button>
        <img
          src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70"
          alt=""
          class="py-4 h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div class="relative border-t dark:bg-gray-700 border-gray-100 dark:border-gray-400 bg-white p-6">
          <span class="whitespace-nowrap bg-indigo-500 text-white px-3 py-1.5 text-xs font-medium">
            New
          </span>
          <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            APPLE iPhone 13 (Midnight, 128 GB)
          </h3>
          <p class="mt-1.5 text-sm text-gray-700 dark:text-gray-200">₹61,999</p>
          <form class="mt-4">
            <button class="w-full rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
              Add to Cart
            </button>
          </form>
        </div>
      </Link>
    </div>
  );
};

export default ChallengeProblemCard;
