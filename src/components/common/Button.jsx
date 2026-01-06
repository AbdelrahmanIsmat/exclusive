import { cva } from "class-variance-authority";

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

const Button = ({ children, variant, size, className, ...props }) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
