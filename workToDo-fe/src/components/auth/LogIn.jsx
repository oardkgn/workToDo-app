import { useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

function LogIn() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className=" flex px-32">
      <div className=" w-1/2"><img  src="/logIn.png" alt="" /></div>
    <div className=" flex flex-col w-1/2">
    <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
      <Tab.List className="flex gap-8 w-full mx-auto">
        <Tab
          className={({ selected }) =>
            classNames(
              "w-full outline-none transition-all rounded-lg py-2.5 bg-text-inactive bg-opacity-70 text-sm font-medium leading-5 text-sky-50",
              selected
                ? "!bg-success text-emerald-600 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                : " text-text-inactive hover:bg-opacity-40 hover:text-white"
            )
          }
        >
          Log In
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "w-full outline-none transition-all rounded-lg py-2.5 bg-text-inactive bg-opacity-70 text-sm font-medium leading-5 text-sky-50",
              selected
                ? "!bg-success text-emerald-600 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                : " text-text-inactive hover:bg-opacity-40 hover:text-white"
            )
          }
        >
          Sign Up
        </Tab>
      </Tab.List>
      <Tab.Panels className="overflow-x-hidden">
        <Transition
          show={tabIndex == 0}
          unmount={tabIndex == 1}
          enter="transition duration-1000 "
          enterFrom="opacity-0 -translate-x-[20%]"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-1000"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-[20%]"
        >
          <Tab.Panel static={true}>
            <LogInForm />
          </Tab.Panel>
        </Transition>

        <Transition
          show={tabIndex == 1}
          unmount={tabIndex == 0}
          enter="transition duration-1000"
          enterFrom="opacity-0 translate-x-[20%]"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Tab.Panel static={true}>
            <SignUpForm />
          </Tab.Panel>
        </Transition>
      </Tab.Panels>
    </Tab.Group>
    </div>
    </div>
  );
}

export default LogIn;
