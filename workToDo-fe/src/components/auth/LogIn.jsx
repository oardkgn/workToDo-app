import React from 'react'
import { Tab } from '@headlessui/react'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'


function LogIn() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Tab.Group>
      <Tab.List className="flex gap-4 w-1/2 mx-auto">
        <Tab className={({ selected }) =>
                classNames(
                  'w-full outline-none transition-all rounded-lg py-2.5 bg-text-inactive bg-opacity-70 text-sm font-medium leading-5 text-sky-50',
                  selected
                    ? '!bg-success text-emerald-600 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
                    : ' text-text-inactive hover:bg-opacity-40 hover:text-white'
                )
              }>Log In</Tab>
        <Tab className={({ selected }) =>
                classNames(
                  'w-full outline-none transition-all rounded-lg py-2.5 bg-text-inactive bg-opacity-70 text-sm font-medium leading-5 text-sky-50',
                  selected
                    ? '!bg-success text-emerald-600 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
                    : ' text-text-inactive hover:bg-opacity-40 hover:text-white'
                )
              }>Sign Up</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><LogInForm /></Tab.Panel>
        <Tab.Panel><SignUpForm /></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default LogIn