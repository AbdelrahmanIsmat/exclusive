import { Link } from "react-router-dom";
import Button from "../common/Button";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-Inter text-3xl  lg:text-[110px] md:text-7xl ">
        404 Not Found
      </h1>
      <p className=" text-center font-Poppins font-normal mt-10  ">
        Your visited page not found. You may go home page.
      </p>
      <Link to="/HomePage">
        <Button className={"mt-20 mb-40"} children={"Back to home page"} />
      </Link>
    </div>
  );
};
export default ErrorPage;
