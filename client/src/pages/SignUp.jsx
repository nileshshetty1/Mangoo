import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="bg-mango-background size-full flex justify-center items-center min-h-screen">
      <div className="p-7 max-w-100 m-auto bg-teal-700 rounded-lg text-white">
        <h1 className="text-center text-5xl font-semibold my-7">
          Sign Up Man!
        </h1>
        <p className="text-center text-2xl my-5">Join the man-go gang.</p>
        <form
          className=" flex flex-col gap-4 text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="Enter your username BHIDU..."
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
            {loading ? "Loading..." : "Join the Gang"}
          </button>
        </form>
        <div className="my-5 flex gap-1">
          <p>already have an account? </p>
          <Link to="/signin">
            <span className="text-orange-200">Sign in</span>
          </Link>
        </div>
        <p>{error && "something went wrong please try again later."}</p>
      </div>
    </div>
  );
};

export default SignUp;
