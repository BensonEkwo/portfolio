import { useState } from "react";
import { Link } from "react-router-dom";
import DP from "/src/images/Rectangle 1.png";
const Home = () => {
  const [userName, setUserName] = useState("Ekwo");
  return (
    <div className="min-h-screen mb-20">
      <div className="flex space-y-8 flex-col lg:flex-row items-center justify-between">
        <div className="space-y-4 lg:mb-20 mb-5">
          <h3 className="text font-semibold">
            Hi, I&apos;m {userName}, A passionate Developer based in Abuja,
            Nigeria.
          </h3>
          <h1 className="text-6xl font-extrabold ">
            Front-End React Developer
          </h1>
          <div className="">
            <span className="inline-block min-w-min-content text-xl font-extrabold hover:underline duration-300 hover:scale-105 transform transition-transform">
              <Link to={"/contact"}>Contact Me</Link>
            </span>
            <div className="pt-4 flex flex-row">
              <a href="https://github.com/BensonEkwo">
                <svg
                  className="w-10 h-10 fill-current text-white hover:text-gray-500 hover:scale-105 duration-300"
                  viewBox="0 0 68 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="akar-icons_github-fill">
                    <path
                      id="Path"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34 0C15.215 0 0 14.4528 0 32.2968C0 46.5881 9.7325 58.659 23.2475 62.9383C24.9475 63.2209 25.585 62.252 25.585 61.4042C25.585 60.6372 25.5425 58.0938 25.5425 55.3889C17 56.8827 14.79 53.4108 14.11 51.5941C13.7275 50.6655 12.07 47.7992 10.625 47.0322C9.435 46.4266 7.735 44.9329 10.5825 44.8925C13.26 44.8521 15.1725 47.234 15.81 48.2029C18.87 53.0878 23.7575 51.7152 25.7125 50.8674C26.01 48.7681 26.9025 47.3551 27.88 46.5477C20.315 45.7403 12.41 42.9547 12.41 30.6012C12.41 27.0889 13.7275 24.1822 15.895 21.9214C15.555 21.114 14.365 17.8036 16.235 13.3628C16.235 13.3628 19.0825 12.515 25.585 16.6732C28.305 15.9465 31.195 15.5832 34.085 15.5832C36.975 15.5832 39.865 15.9465 42.585 16.6732C49.0875 12.4746 51.935 13.3628 51.935 13.3628C53.805 17.8036 52.615 21.114 52.275 21.9214C54.4425 24.1822 55.76 27.0485 55.76 30.6012C55.76 42.9951 47.8125 45.7403 40.2475 46.5477C41.48 47.557 42.5425 49.4948 42.5425 52.5226C42.5425 56.8423 42.5 60.3142 42.5 61.4042C42.5 62.252 43.1375 63.2613 44.8375 62.9383C51.5868 60.7738 57.4518 56.653 61.607 51.1564C65.7621 45.6595 67.998 39.0636 68 32.2968C68 14.4528 52.785 0 34 0Z"
                    />
                  </g>
                </svg>
              </a>
              <a className="mx-4" href="https://wa.link/kx9t1o">
                <svg
                  className="fill-current text-stone-100 hover:text-green-400 hover:scale-105 duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="40px"
                  height="40px"
                >
                  {" "}
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="lg:max-w-[600px] max-h-[736px] max-w-96 max-h-98 object-cover w-full"
            src={DP}
            alt="dispaly picture"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
