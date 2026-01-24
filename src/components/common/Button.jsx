import { cva } from "class-variance-authority";

<<<<<<< HEAD
const button = cva(
  " text-sm sm:text-base rounded-sm px-2 sm:px-12 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "text-white bg-[#DB4444] hover:bg-[#E07575]",
        secondary:
          " border border-black text-black hover:border-[#7D8184] hover:text-[#7D8184]",
      },
      size: {
        sm: "py-2.5",
        lg: "py-2.5 sm:py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);
=======
const button = cva(" rounded-sm  px-12 cursor-pointer", {
  variants: {
    variant: {
      primary: "text-white bg-[#DB4444] hover:bg-[#E07575]",
      secondary:
        " border border-black text-black hover:border-[#7D8184] hover:text-[#7D8184]",
    },
    size: {
      sm: "py-2.5",
      lg: "py-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4

const Button = ({ children, variant, size, className, ...props }) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
