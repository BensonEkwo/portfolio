import computer from "/src/images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
const About = () => {
  return (
    <div className="md:mt-14 mt-8 md:flex gap-10">
      <div className="md:flex-1 ">
        <img className="rounded-2xl" src={computer} alt="computer" />
      </div>
      <div className="md:flex-1 m-8 md:16">
        <h2>
          <span className="text-white font-bold underline"> ABOUT ME </span>
          <span className="block mt-6 font-extrabold text-blue-300 text-3xl">
            Front-End Devoloper
            <span className="block">based in Abuja, NIgeria</span>{" "}
          </span>
        </h2>
        <p className="mt-6 font-poppins text-blue-50">
          Hey, my name is Benson, and I&apos;m a Frontend Developer. My passion
          is to create and develop a clean UI/UX for my users.
          <span className="block mt-6">
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </span>
        </p>
      </div>
    </div>
  );
};
export default About;
