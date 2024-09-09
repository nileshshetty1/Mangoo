import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="bg-mango-background size-full flex justify-center items-center min-h-screen">
      <div className="p-7 max-w-100 m-auto bg-teal-700 rounded-lg text-white">
        <h1 className="text-center text-5xl font-semibold my-7">
          Sign Up Man!
        </h1>
        <p className="text-center text-2xl my-5">Join the man-go gang.</p>
        <form className=" flex flex-col gap-4">
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="Enter your Name BHIDU..."
            className="rounded-lg p-3 bg-yellow-100 border"
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Email lagega na bhai."
            className="rounded-lg p-3 bg-yellow-100 border"
          />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Password kisiko batneka nai..."
            className="rounded-lg p-3 bg-yellow-100 border"
          />
          <button
            className="bg-yellow-500 text-black p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
            type="submit"
          >
            Join the Gang
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
