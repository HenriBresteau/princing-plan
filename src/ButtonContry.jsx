import clsx from "clsx";

const ButtonContry = ({ locale, setLocale, title, icon, slug }) => {
    return (
        <div
            className={clsx(
                "w-fit px-3.5 py-1 cursor-pointer flex justify-center items-center rounded-full border border-white",
                locale === title && "bg-[#1E6EFB]"
            )}
            onClick={() => setLocale(title)}
        >
            <span
                className={clsx(
                    "text-white flex gap-1 items-center text-sm font-grotesk",
                    locale === title && "text-white"
                )}
            >
                {slug}
                {icon}
            </span>
        </div>
    );
};

export default ButtonContry;
