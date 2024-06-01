import Navbar from './navbar'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Project from '../pages/Project'


function HomePage() {

  return (
    <main className="text-white font-poppins">
      <Navbar/>
      <div className="mx-6 my-10 lg:mx-20  pt-14 min-h-full">
        <section className='mb-10 ' id='Home'><Home/></section>
        <section className='mb-10 ' id='About'><About/></section>
        <section className='mb-10' id='Contact'><Contact/></section>
        <section className='mb-10' id='Project'><Project/></section>
      </div>
    </main>
  )
}

export default HomePage