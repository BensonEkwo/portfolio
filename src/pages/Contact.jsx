import { useState, useRef } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [empty, setEmpty] = useState(false);
  const change = (e) => {
    const { name, value } = e.target;
    if (name === "Name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };
  const handleSubmit = (e) => {
    if (name.length === 0 && email.length === 0 && message.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    e.preventDefault();
    setInfo({ name, email, message });
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };
  const handleEnter = (e) => {
    if (e.key === "Enter" && name.length > 0) {
      e.preventDefault();
      setName(e.target.value);
      emailRef.current.focus();
      setEmpty(false)
    } else if (e.key === "Enter" && name.length === 0) {
      e.preventDefault();
      name.current.focus();
    }
  };
  const handleEmail = (e) => {
    if (e.key === "Enter" && email.length > 0) {
      e.preventDefault();
      setEmail(e.target.value);
      messageRef.current.focus();
    } else if (e.key === "Enter" && email.length === 0) {
      e.preventDefault();
      emailRef.current.focus();
    }
  };
  console.log(empty);
  return (
    <div className="flex flex-col justify-end ">
      <div className="mt-0 w-fit  group my-5 lg:my-10 rounded-xl shadow-lg p-10 pt-0 text-blue-100  hover:bg-slate-700 mb-4 transform transition-transform hover:scale-105 duration-300">
        <h1 className="group-hover:text-blue-500 font-semibold text-blue-500">
          CONTACT
          <span className="block mt-4 font-extrabold text-2xl text-blue-100">
            Don&apos;t be shy! Hit Me Up!
          </span>
        </h1>
        <p className="mt-4 group-hover:text-blue-200">
          I would love to hear about your project and how i can help. please
          fill in
          <span className="block">
            the form, and i will get back to you as soon as possible{" "}
          </span>
        </p>
        <div className="pt-4 flex flex-row">
          <a href="https://github.com/BensonEkwo">
            <svg
              className=" w-8 h-8 fill-current text-white hover:text-gray-500 hover:scale-105 duration-500 "
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
              className=" w-8 h-8 fill-current text-stone-100 hover:text-green-400 hover:scale-105 duration-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              {" "}
              <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full  flex-col justify-start mt-24">
        <form onSubmit={handleSubmit}>
          <div className="lg-8 flex flex-col lg:w-1/2">
            <label
              className={`${empty ? "font-serif text-red-500" : "font-serif"}`}
            >
              NAME
            </label>
            <input
              name="Name"
              onKeyDown={handleEnter}
              onChange={change}
              ref={nameRef}
              className={`${
                empty
                  ? "bg-transparent border-b border-red-600 pt-5 outline-none border-opacity-100 focus:border-opacity-100 focus:border-white"
                  : "bg-transparent border-b border-white pt-5 outline-none border-opacity-50 focus:border-opacity-100"
              }`}
              type="text"
            />
          </div>
          <div className="mb-8 flex flex-col lg:w-1/2">
            <label
              className={`${empty ? "font-serif text-red-500" : "font-serif"}`}
            >
              EMAIL
            </label>
            <input
              name="email"
              onKeyDown={handleEmail}
              onChange={change}
              ref={emailRef}
              className={`${
                empty
                  ? "bg-transparent border-b border-red-600 pt-4 outline-none border-opacity-100 focus:border-opacity-100 focus:border-white"
                  : "bg-transparent border-b border-white pt-4 outline-none border-opacity-50 focus:border-opacity-100"
              }`}
              type="text"
            />
          </div>
          <div className="mb-8 flex flex-col lg:w-1/2">
            <label
              className={`${empty ? "font-serif text-red-500" : "font-serif"}`}
            >
              MESSAGE
            </label>
            <textarea
              name="message"
              onChange={change}
              ref={messageRef}
              className={`${
                empty
                  ? "bg-transparent border-b border-red-600 pt-4 outline-none border-opacity-100 focus:border-opacity-100 focus:border-white"
                  : "bg-transparent border-b border-white pt-4 outline-none border-opacity-50 focus:border-opacity-100"
              }`}
            />
          </div>
          <div className="flex justify-center pt-10  border-b-2 border-white">
            <button
              className=" hover:bg-slate-700 px-2 py-2 rounded-2xl transform transition-transform hover:scale-110 text-blue-200 text-sm font-serif"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
