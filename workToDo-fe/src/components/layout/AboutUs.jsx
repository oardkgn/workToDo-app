import React from "react";

function AboutUs() {
  return (
    <>
      <h1 className=" text-xl font-semibold p-6 mb-4 text-darkBlue">
        Welcome to <span className=" font-bold text-xl">WorkToDo</span>!
      </h1>

      <section className=" flex flex-col text-sm px-36 gap-8 pb-20">
        <p className="relative w-[70%] text-center bg-opacity-20 bg-lightBlue p-6 rounded-xl rounded-tl-sm">
          We are passionate about helping individuals and teams achieve optimal
          work organization and productivity. With our innovative platform, you
          can take control of your tasks, streamline your workflow, and conquer
          your goals.
          <img className=" w-36 absolute -left-[140px] -top-6" src="/task.png" alt="" />
        </p>
        <p className="w-[70%] relative text-center  bg-opacity-20 bg-lightBlue p-6 rounded-xl rounded-tr-sm self-end">
          Our mission is to provide a user-friendly and intuitive solution for
          managing your work tasks and to-do lists. We understand the challenges
          that come with juggling multiple responsibilities and deadlines, which
          is why we've designed this platform to simplify and optimize your work
          organization.
          <img className=" w-32 absolute -right-32 -top-6" src="/user.png" alt="" />
        </p>
        <p className=" w-[70%] relative text-center  bg-opacity-20 bg-lightBlue p-6 rounded-xl rounded-tl-sm">
          Whether you're a busy professional, a student, or a team leader, our
          platform is tailored to meet your unique needs. From creating and
          prioritizing tasks to setting reminders and tracking progress, our
          comprehensive tools empower you to stay focused, organized, and on top
          of your workload.
          <img className=" w-48 absolute -left-[160px] -top-5" src="/team.png" alt="" />
        </p>
        <p className="w-[70%] relative text-center  bg-opacity-20 bg-lightBlue p-6 rounded-xl rounded-tr-sm self-end">
          At <span>WorkToDo</span>, we believe that effective work
          organization is the key to unlocking your full potential. By
          harnessing the power of our platform, you can transform your chaos
          into order, unleash your productivity, and achieve success in your
          personal and professional endeavors.
          <img className=" w-40 absolute -right-32 -top-9" src="/key.png" alt="" />
        </p>
        <p className=" relative w-[70%] text-center  bg-opacity-20 bg-lightBlue p-6 rounded-xl rounded-tl-sm">
          Join us today and experience the difference of a well-organized work
          life. Let us help you simplify your tasks, boost your efficiency, and
          pave the way for greater accomplishments.
          <img className=" w-24 absolute -left-[110px] -top-5" src="/tick.png" alt="" />
        </p>
      </section>
    </>
  );
}

export default AboutUs;
