import React, { useEffect, useState } from "react";

export default function NavigateTopButton() {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop} = document.documentElement;
      const viewportHeight = window.innerHeight;

      setIsScrollable(scrollTop > viewportHeight);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .navigate-top-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px;
            background-color: var(--primary-medium);
            color: var(--text-dark);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px var(--shadow);
            transition: all 0.3s ease-in-out;
            z-index: 1000;
            opacity: 1;
            transform: translateY(0px);
          }

          .navigate-top-button.hidden {
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
          }

          .navigate-top-button svg {
            width: 20px;
            height: 20px;
            fill: var(--text-dark);
            transition: fill 0.3s ease;
          }
        `}
      </style>

      <button
        className={`navigate-top-button ${!isScrollable ? "hidden" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </button>
    </>
  );
}
