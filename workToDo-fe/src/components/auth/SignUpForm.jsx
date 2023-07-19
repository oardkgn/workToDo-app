import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [isPswSecret, setIsPswSecret] = useState(true);

  const [psw, setPsw] = useState("");

  return (
    <div className=" ">
      <form className=" w-1/2 mx-auto pb-14 pt-20">
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-success dark:focus:border-success"
            placeholder="worktodo"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-success dark:focus:border-success"
            placeholder="name@worktodo.com"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type={isPswSecret ? "password" : "text"}
            id="password"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-success dark:focus:border-success"
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPswSecret(!isPswSecret);
            }}
            className=" absolute p-1 bottom-[7px] right-2 text-xl"
          >
            {isPswSecret ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>

        <div className="mb-6">
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select your role
          </label>
          <div className=" flex gap-4 mt-4">
          <div className="flex items-center mr-4">
            <input
              id="employee"
              type="radio"
              value="employee"
              name="colored-radio"
              className="w-4 h-4 cursor-pointer accent-darkBlue  checked:scale-125 transition-all  border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="employee"
              className="pl-2 text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300"
            >
              Employee
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="manager"
              type="radio"
              value="manager"
              name="colored-radio"
              className="w-4 h-4  cursor-pointer accent-darkBlue checked:scale-125 transition-all  border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="manager"
              className="pl-2 text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300"
            >
              Manager
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="owner"
              type="radio"
              value=""
              name="colored-radio"
              className="w-4 h-4  cursor-pointer accent-darkBlue checked:scale-125 transition-all  border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="owner"
              className="pl-2 text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300"
            >
              Owner
            </label>
          </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-darkBlue bg-opacity-90 hover:bg-opacity-100 focus:ring-4 focus:outline-none focus:ring-success focus:ring-opacity-80 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
