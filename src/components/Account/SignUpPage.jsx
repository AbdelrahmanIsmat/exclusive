import LoginImg from "../../assets/LoginImg.svg";
import IconGoogle from "../../assets/Icon-Google.svg";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { useState } from "react";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all fields");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (data) {
      console.log("User signed up:", data);
      setName("");
      setEmail("");
      setPassword("");
    }
    navigate("/HomePage");
  };

  return (
    <div className="min-h-140 md:min-h-180 flex items-center justify-center pr-4 ">
      <div className="flex flex-col items-center md:flex-row max-w-6xl gap-5">
        {/* Image */}
        <div className="flex justify-center order-2  md:order-1 md:justify-start w-full max-w-200 ">
          <img
            src={LoginImg}
            alt="Signup illustration"
            className="w-full max-w-[90%] h-auto object-contain"
          />
        </div>
        {/* Form */}
        <form
          onSubmit={HandleSubmit}
          className="w-full max-w-93 px-3 flex flex-col gap-4 mx-auto order-1 md:order-2"
        >
          <h3 className="text-3xl sm:text-4xl font-Inter font-semibold">
            Create an account
          </h3>
          <p className="font-Poppins mb-4 text-sm sm:text-base">
            Enter your details below
          </p>
          <input
            type="text"
            placeholder="Name"
            className="border-b outline-none py-2 focus:border-black transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b outline-none py-2 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b outline-none py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 text-sm ">{error}</p>}
          <div className="flex flex-col gap-2 mt-4 text-[12px] md:text-[16px] ">
            <Button className={"w-full"}>Create Account</Button>
            <Button
              className={" w-full flex items-center justify-center gap-2"}
              variant="secondary"
            >
              <img src={IconGoogle} alt="Icon Google" />
              Sign up with Google
            </Button>
            <div className="flex flex-col items-center md:flex-row justify-center gap-3.5 mb-10">
              <p className="font-normal ">Already have account?</p>
              <Link
                to="/LoginPage"
                className=" border-b max-w-10 text-sm cursor-pointer hover:text-gray-600 transition"
              >
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
