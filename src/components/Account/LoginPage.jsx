import { useState } from "react";
import LoginImg from "../../assets/LoginImg.svg";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Errrrror");
    } else {
      let { data, error } = await supabase.auth.signInWithPassword({
        name,
        email,
        password,
      });
      if (data) {
        console.log(data);
        setName("");
        setEmail("");
        setPassword("");
      }
      if (error) {
        console.log(error);
        setError(error.message);
      }
    }
    navigate("/HomePage");
  };
  return (
    <div className="min-h-100 md:min-h-180 flex items-center justify-center pr-4">
      <div className="flex flex-col items-center md:flex-row max-w-6xl gap-5">
        {/* Image */}
        <div className="flex justify-center order-2  md:order-1 md:justify-start w-full max-w-200">
          <img
            src={LoginImg}
            alt="Login"
            className="w-full max-w-[90%] h-auto object-contain"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={HandleSubmit}
          className="w-full max-w-93 px-3 flex flex-col gap-4 mx-auto order-1 md:order-2"
        >
          <h3 className="text-3xl sm:text-4xl font-Inter font-semibold">
            Log in to Exclusive
          </h3>

          <p className="font-Poppins mb-4 text-sm sm:text-base">
            Enter your details below
          </p>

          <input
            type="email"
            placeholder="Email"
            className="border-b outline-none py-2"
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
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 mb-10 text-[12px] md:text-[16px]">
            <Button>Log in</Button>
            <a className="text-red-600 text-sm cursor-pointer ">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
