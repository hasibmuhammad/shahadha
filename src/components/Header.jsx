import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-10 lg:px-0">
      <div className="flex items-center justify-center lg:justify-between">
        <Link href={"/"}>
          <h1 className={`uppercase text-3xl tracking-widest`}>Shahadha</h1>
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.facebook.com/profile.php?id=61559482554618&mibextid=ZbWKwL"
          }
        >
          <button class="hidden relative lg:inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Order Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
