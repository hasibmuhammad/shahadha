"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const scrollToTobVisibilityHandler = () => {
      window.scrollY > 300 ? setShowBtn(true) : setShowBtn(false);
    };

    window.addEventListener("scroll", scrollToTobVisibilityHandler);

    return () => {
      window.removeEventListener("scroll", scrollToTobVisibilityHandler);
    };
  }, []);

  const handleScrolltoTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {showBtn && (
        <div onClick={handleScrolltoTop} className="fixed bottom-5 right-7">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
