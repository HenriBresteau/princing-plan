import clsx from "clsx";
import ButtonCard from "./ButtonCard";
import { cva } from "class-variance-authority";
import Icon from "./Icon";

const getCurrencySymbol = (locale, price) => {
    switch (locale) {
        case "fr":
            return `${price} €`;
        case "us":
            return `$${price}`;
        case "uk":
            return `£${price}`;
        default:
            return "€";
    }
};
const cardStyles = cva(
    "p-8 flex flex-col gap-8 border group rounded-[20px] transition-all",
    {
        variants: {
            bg: {
                Essentiel: "bg-[#1153BA] ",
                Ultime: "hover:bg-[#1152ba83] bg-[#A3D7FD] bg-[url('/bg_pattern.svg')] bg-cover bg-center",
                Premium:
                    "bg-[radial-gradient(100%_100%_at_50%_100%,rgb(3,25,83)_0%,rgb(24,116,255)_100%)]",
            },
        },
    }
);

const Card = ({
    bg,
    title,
    icon,
    price,
    features,
    bestOffer,
    annual,
    monnaie,
}) => {
    return (
        <div className={cardStyles({ bg })}>
            <div className=" flex flex-col gap-5">
                <Icon src={icon} bg={title} />
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <div className="text-white font-grotesk font-medium text-[1.75rem] tracking-tight">
                            {title}
                        </div>
                        {bestOffer && (
                            <div className="border flex items-center justify-center font-grotesk font-normal text-center border-white text-white bg-white/10 rounded-md px-2 py-1 text-sm">
                                Best Offer
                            </div>
                        )}
                    </div>
                    <div className="text-white font-grotesk font-medium text-4xl tracking-tight">
                        {getCurrencySymbol(monnaie, price)}
                        {annual ? (
                            <span className="ml-2 text-base text-white/75 line-through tracking-widest">
                                {getCurrencySymbol(monnaie, price * 1.2)}
                            </span>
                        ) : (
                            <span className="ml-1 text-base tracking-tight">
                                / month
                            </span>
                        )}
                    </div>
                </div>
                <div className="bg-gradient-to-r from-white/0 via-white to-white/0 h-[1px]"></div>
                <div className="flex flex-col gap-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-3 items-center">
                            <span>
                                <img src="/Check.svg" alt="checkbox" />
                            </span>
                            <p className="text-white font-grotesk text-base">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <ButtonCard
                title="Je m'abonne"
                color={clsx(bestOffer ? "primary" : "secondary")}
                bg={clsx(bestOffer ? "pattern" : "normal")}
            />
        </div>
    );
};

export default Card;
