import Hero from "../components/layout/Hero";
import AboutUs from "../components/layout/AboutUs";
import LogIn from "../components/auth/LogIn";
import Contact from "../components/layout/Contact";
import Companies from "../components/layout/Companies";

function Home() {
  return (
    <div className=" px-12 pb-36 max-w-[2460px] mx-auto">
      <Hero />

      <div className=" mt-4 divider flex gap-4 mb-12 items-center">
        <div className=" w-[5%] h-[0.5px] bg-darkBlue bg-opacity-30"></div>
        <span className=" text-xl text-darkBlue whitespace-nowrap">
          Log In or Sign Up
        </span>
        <div className=" w-full h-[0.5px] bg-darkBlue bg-opacity-30"></div>
      </div>
      <LogIn />
      <div className=" divider flex gap-4  items-center">
        <div className=" w-[5%] h-[0.5px] bg-darkBlue bg-opacity-30"></div>
        <span className=" text-xl text-darkBlue whitespace-nowrap">
          Companies
        </span>
        <div className=" w-full h-[0.5px] bg-darkBlue bg-opacity-30"></div>
      </div>
      <Companies />
      <div className=" divider flex gap-4 mb-12 items-center">
        <div className=" w-[5%] h-[0.5px] bg-darkBlue bg-opacity-30"></div>
        <span className=" text-xl text-darkBlue whitespace-nowrap">
          About Us
        </span>
        <div className=" w-full h-[0.5px] bg-darkBlue bg-opacity-30"></div>
      </div>
      <AboutUs />
      <div className=" divider flex gap-4 mb-12 items-center">
        <div className=" w-[5%] h-[0.5px] bg-darkBlue bg-opacity-30"></div>
        <span className=" text-xl text-darkBlue whitespace-nowrap">
          Contact
        </span>
        <div className=" w-full h-[0.5px] bg-darkBlue bg-opacity-30"></div>
      </div>
      <Contact />
      
    </div>
  );
}

export default Home;
