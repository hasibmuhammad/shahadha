import Image from "next/image";
import model from "../../public/model.webp";
import model2 from "../../public/model2.webp";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 px-10 lg:px-0">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-5xl leading-tight font-bold">
          #1.
          <br />
          Premium <br /> Collection
        </h1>
        <p>
          You will get all the latest collection on Shahadha. <br /> We are here
          to offer you the best products in affordable price. <br /> Just choose
          your products and Order we will deliver to you.
        </p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Shop Now
          </span>
        </button>
      </div>
      <div className="relative">
        <Image
          className="hidden md:block w-1/2 object-cover rounded-md"
          src={model}
          alt="Model Image"
        />
        <Image
          className="hidden md:block w-1/2 absolute top-28 left-72 rounded-lg"
          src={model2}
          alt="Model Image"
        />
      </div>
    </div>
  );
};

export default Hero;
