import { Link } from "react-router-dom";
import { useState } from "react";
import close from '/src/images/close_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import menu from '/src/images/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg'
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [showborder,setShowborder]= useState(false)
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  const handleScroll=()=>{
    const scrolled=window.scrollY;
    if(scrolled>0){
      setShowborder(true);
    }
    else{
      setShowborder(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return (
    <nav className={`mx-auto flex-wrap flex justify-evenly items-center text-white sticky top-0 z-50  py-4 ${showborder? 'border-b border-gray-300 bg-slate-950':'border-none bg-slate-910'}`}>
       <span className="font-bold  mx-4 cursor-pointer">B3nson.Dev</span> 
      <div className="hidden lg:flex space-x-4 ml-auto mx-10 ">
      <Link className="hover:text-blue-300 font-semibold hover:underline duration-300" to="/">Home</Link>
      <Link className="hover:text-blue-300 font-semibold hover:underline duration-300" to="/about">About</Link>
      <Link className="hover:text-blue-300 font-semibold hover:underline duration-300" to="/project">Projects</Link>
      <Link className="hover:text-blue-300 font-semibold hover:underline duration-300" to="/contact">Contact</Link>
      </div>
      <div className="lg:hidden mx-4 ml-auto">
        <button onClick={handleClick}>{isOpen?<img src={close}/> :<img src={menu}/>}</button>
      </div>

        {isOpen && 
            <div className={`lg:hidden fixed z-20 right-0 flex flex-col top-10 space-y-2  text-center p-3 rounded-md ${showborder?'bg-slate-950':'bg-transparent'}`}>
      <Link className="hover:text-blue-300 font-semibold " to="/">Home</Link>
      <Link className="hover:text-blue-300 font-semibold" to="/about">About</Link>
      <Link className="hover:text-blue-300 font-semibold" to="/project">Projects</Link>
      <Link className="hover:text-blue-300 font-semibold" to="/contact">Contact</Link>
      </div>
           
        }
      
    </nav>
  );
};
export default Navbar;
