import { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    document.title = "Log In Here";
  }, []);
  return (
    <form className="my-8 p-3 py-4 w-11/12 m-auto shadow-sm shadow-slate-500 rounded-md  flex flex-col items-stretch justify-between sm:w-2/3 sm:px-8 sm:py-4 xl:w-1/3 xl:px-3 xl:py-8">
      <label className="sm:mx-5" htmlFor="email">
        Enter Email
      </label>
      <input
        className="shadow shadow-slate-600 rounded p-2 my-4 sm:mx-5"
        type="email"
        id="email"
      />

      <label className="sm:mx-5" htmlFor="password">
        Choose a password
      </label>
      <input
        className="shadow shadow-slate-600 rounded p-2 my-4 sm:mx-5"
        type="password"
        id="password"
      />

      <button
        type="submit"
        className="whi self-center bg-emerald-500 p-3 px-6 rounded hover:px-8 hover:text-neutral-50 hover:bg-emerald-600 "
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
