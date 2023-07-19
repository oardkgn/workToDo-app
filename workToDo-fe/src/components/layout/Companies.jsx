import React from "react";
import CompanyBox from "../items/CompanyBox";

const companies = [
  {
    name: "TechNova",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Innovating the future",
    description:
      "TechNova is a technology company that specializes in developing cutting-edge solutions for various industries. From software development to artificial intelligence, we strive to create innovative products that drive digital transformation and revolutionize businesses.",
    sector: "Technology",
  },
  {
    name: "EcoFood",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Nourishing people, nurturing the planet",
    description:
      "EcoFood is a sustainable food company dedicated to providing nutritious and environmentally-friendly food options. We prioritize organic farming practices, support local communities, and strive to promote a healthier and more sustainable food system.",
    sector: "Food & Agriculture",
  },
  {
    name: "Adventura",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Unleash your inner explorer",
    description:
      "Adventura is an adventure travel company that specializes in creating unforgettable experiences for thrill-seekers. From trekking in remote mountains to diving in exotic seas, we offer personalized trips that cater to your sense of adventure.",
    sector: "Travel & Tourism",
  },
  {
    name: "Wellness Solutions",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Your path to holistic well-being",
    description:
      "Wellness Solutions is dedicated to helping individuals achieve optimal well-being. Through our integrated approach to health and wellness, we provide personalized programs, workshops, and products that support physical, mental, and emotional wellness.",
    sector: "Health & Wellness",
  },
  {
    name: "DesignCraft",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Transforming spaces, inspiring lives",
    description:
      "DesignCraft is an interior design firm that combines creativity and functionality to transform spaces into inspiring environments. From residential homes to commercial spaces, our team of designers crafts unique solutions tailored to each client's vision.",
    sector: "Architecture & Design",
  },
  {
    name: "Solaris Energy",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Powering a sustainable future",
    description:
      "Solaris Energy is a renewable energy company focused on harnessing the power of the sun. We design and install solar energy systems for residential, commercial, and industrial applications, enabling a clean and sustainable energy future.",
    sector: "Energy",
  },
  {
    name: "Momentum Sports",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Unlock your athletic potential",
    description:
      "Momentum Sports is a sports performance company that provides comprehensive training programs and services for athletes of all levels. Our experienced coaches and cutting-edge facilities help athletes unlock their potential and achieve peak performance.",
    sector: "Sports & Fitness",
  },
  {
    name: "DataTech Solutions",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Empowering insights, driving success",
    description:
      "DataTech Solutions is a data analytics company that helps businesses leverage the power of data to make informed decisions. With our advanced analytics tools and expertise, we empower organizations to extract valuable insights and drive success in a data-driven world.",
    sector: "Technology",
  },
  {
    name: "Harmony Gardens",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Creating tranquil outdoor spaces",
    description:
      "Harmony Gardens is a landscape design and maintenance company that specializes in creating beautiful and serene outdoor spaces. From residential gardens to public parks, we strive to create harmonious environments that connect people with nature.",
    sector: "Landscaping",
  },
  {
    name: "UrbanWheels",
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    slogan: "Efficient and eco-friendly mobility",
    description:
      "UrbanWheels is a sustainable mobility company dedicated to providing efficient and eco-friendly transportation solutions. From electric bikes to scooter-sharing programs, we aim to reduce congestion and carbon emissions in urban areas.",
    sector: "Transportation",
  },
];

function Companies() {
  return <div className="grid p-20 grid-cols-4 gap-6 pb-16">

    {companies.map((company,i) => {
      return <CompanyBox key={i} company={company}/>
    })}    
  </div>;
}

export default Companies;
