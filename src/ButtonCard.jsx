import { cva } from "class-variance-authority";

const blurStyles = cva(
    "absolute bg-black bottom-0 inset-x-1/2 w-6 h-6 translate-y-1/2 -translate-x-1/2 blur-lg transition-all duration-300 group-hover:scale-[2.5] group-hover:duration-150",
    {
        variants: {
            color: {
                primary: "",
                secondary: "",
            },
        },
    }
);

const buttonCardStyles = cva(
    "border flex items-center justify-center font-grotesk font-normal text-center cursor-pointer relative overflow-hidden transition-all",
    {
        variants: {
            color: {
                primary: "border-white/40 text-white group-hover:border-white",
                secondary:
                    "border-white/40 text-white group-hover:border-white",
            },
            bg: {
                pattern:
                    "bg-[#1E6EFB] hover:text-black  hover:bg-white hover:shadow-[0px_2px_2px_rgba(221,_221,_221,_1),_0_4px_8px_rgba(221,_221,_221,_1)]",
                normal: "bg-transparent hover:bg-white hover:text-black",
            },
            size: {
                normal: "rounded-xl px-8 py-2 text-base",
            },
        },
        defaultVariants: {
            color: "primary",
            size: "normal",
            bg: "pattern",
        },
    }
);
const ButtonCard = ({ title, color, size, bg }) => {
    return (
        <div className={buttonCardStyles({ color, size, bg })}>
            <div className={blurStyles({ color })}></div>
            <div className="z-10">{title}</div>
        </div>
    );
};

export default ButtonCard;
