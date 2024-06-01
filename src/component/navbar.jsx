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
    <nav className={`mx-auto flex-wrap fixed flex justify-between items-center text-white top-0 z-50  py-4 w-full ${showborder? 'border-none bg-blur backdrop-blur-md bg-opacity-50':'border-b border-gray-300 bg-slate-950'}`}>
       <span className="font-bold  mx-4 cursor-pointer">B3nson.Dev</span> 
      <div className="hidden lg:flex space-x-4 ml-auto mx-10 ">
      <a className="hover:text-blue-300 font-semibold hover:underline duration-300" href="#">Home</a>
      <a className="hover:text-blue-300 font-semibold hover:underline duration-300" href="#About">About</a>
      <a className="hover:text-blue-300 font-semibold hover:underline duration-300" href="#Project">Projects</a>
      <a className="hover:text-blue-300 font-semibold hover:underline duration-300" href="#Contact">Contact</a>
      </div>
      <div className="lg:hidden mx-4 ml-auto">
        <button onClick={handleClick}>{isOpen?<img src={close}/> :<img src={menu}/>}</button>
      </div>

        {isOpen && 
            <div className={`lg:hidden absolute z-10 right-0 flex flex-col top-10 space-y-4  text-center p-4 rounded-md ${showborder?'bg-blur backdrop-blur-md bg-opacity-50':'bg-slate-950'}`}>
      <a className="hover:text-blue-300 font-semibold " href="#">Home</a>
      <a className="hover:text-blue-300 font-semibold" href="#About">About</a>
      <a className="hover:text-blue-300 font-semibold" href="#Project">Projects</a>
      <a className="hover:text-blue-300 font-semibold" href="#Contact">Contact</a>
      </div>
           
        }
      
    </nav>
  );
};
export default Navbar;
