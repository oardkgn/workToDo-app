import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function LogInForm() {
  const [isPswSecret, setIsPswSecret] = useState(true);
  const [psw, setPsw] = useState("");

  return (
    <div className="">
      <form className=" w-1/2 mx-auto pb-14 pt-20">
        <div className="mb-6">
          <label
            for="email"
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
            for="password"
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
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-success focus:ring-opacity-80 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
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

export default LogInForm;
