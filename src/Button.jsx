import { cva } from "class-variance-authority";

const buttonSytles = cva(
    "border border-white/40 rounded-lg flex items-center text-white px-10 py-2 font-grotesk font-medium  text-base text-center cursor-pointer transition-all relative group overflow-hidden hover:border-white ",
    {
        variants: {
            color: {
                selected: "bg-[#1E6EFB]",
                waiting: "bg-transparent hover:bg-[#599bf15e]",
            },
        },
    }
);

const Button = ({ title, color, onClick }) => {
    return (
        <div className={buttonSytles({ color })} onClick={onClick}>
            <div className="absolute bg-black bottom-0 inset-x-1/2 w-6 h-6 translate-y-1/2 -translate-x-1/2 blur-lg transition-all duration-300 group-hover:scale-[2.5] group-hover:duration-150"></div>
            <div className="z-10">{title}</div>
        </div>
    );
};

export default Button;
// color: {
//     selected:
//         "bg-[radial-gradient(100%_100%_at_50%_100%,rgb(7,40,126)_0%,rgb(30,111,253)_100%)]",
//     waiting:
//         "bg-[radial-gradient(100%_100%_at_50%_100%,rgba(7, 41, 126, 0)_0%,rgb(30,111,253)_100%)]",
// },
