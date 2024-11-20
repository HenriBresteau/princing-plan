import { cva } from "class-variance-authority";

const iconStyles = cva(
    "w-11 h-11 flex justify-center items-center rounded-xl",
    {
        variants: {
            bg: {
                Essentiel: "bg-[url('/icon_pattern.svg')] bg-center",
                Premium: "bg-[url('/icon_pattern.svg')]",
                Ultime: "bg-white",
            },
        },
    }
);
const Icon = ({ src, bg }) => {
    return (
        <div className={iconStyles({ bg })}>
            <img
                src={src}
                alt="icon"
                className="group-hover:rotate-12  group-hover:transition-transform transition-transform duration-300 "
            />
        </div>
    );
};

export default Icon;
