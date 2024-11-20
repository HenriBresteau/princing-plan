import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import ButtonContry from "./ButtonContry";
import { DollarSign, Euro, PoundSterling } from "lucide-react";
import { motion } from "motion/react";
const pricingOptions = [
    {
        title: "Essentiel",
        icon: "/bull.svg",
        price: {
            fr: { month: 179, annual: 500 },
            us: { month: 199, annual: 550 },
            uk: { month: 159, annual: 450 },
        },
        features: [
            "+2500 vues/mois",
            "+60 clics sur votre site",
            "+15 appels/mois",
            "+15 demandes d'itinéraires",
            "Plus de visibilité sur Google",
            "Réponse aux avis google inclus",
        ],
    },
    {
        title: "Ultime",
        icon: "/diamond.svg",
        price: {
            fr: { month: 439, annual: 1200 },
            us: { month: 499, annual: 1350 },
            uk: { month: 399, annual: 1100 },
        },
        features: [
            "+6500 vues/mois",
            "+200 clics sur votre site",
            "+40 appels/mois",
            "+40 demandes d'itinéraires",
            "Plus de visibilité sur Google",
            "Réponse aux avis google inclus",
            "1 shooting",
            "QR code personnalisé",
        ],
        bestOffer: true,
    },
    {
        title: "Premium",
        icon: "/bull.svg",
        price: {
            fr: { month: 319, annual: 900 },
            us: { month: 349, annual: 950 },
            uk: { month: 299, annual: 850 },
        },
        features: [
            "+11 000 vues/mois",
            "+500 clics sur votre site",
            "+80 appels/mois",
            "+80 demandes d'itinéraires",
            "Plus de visibilité sur Google",
            "Réponse aux avis google inclus",
            "1 shooting",
        ],
    },
];

function App() {
    const [locale, setLocale] = useState("fr");
    const [isAnnual, setIsAnnual] = useState(false);
    const cardVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };
    return (
        <main className="bg-[#010B25] overflow-hidden flex items-center justify-center pt-8 pb-20 min-h-dvh">
            <div className="max-w-screen-xl mx-auto relative">
                <div className="absolute w-[2245px] h-[191px] top-1/2 left-1/2 -translate-x-[42%] -translate-y-[60%] bg-[#1241C566] rounded-full rotate-[-132deg] blur-[274.95px] pointer-events-none"></div>
                <div className="absolute w-[2245px] h-[191px] top-1/2 left-1/2 -translate-x-[65%] translate-y-1/2 bg-[#1241C566] rounded-full rotate-[-132deg] blur-[274.95px] pointer-events-none"></div>
                <div className="z-10 flex items-center flex-col gap-4 ">
                    <motion.div
                        className="rounded-[54px] font-grotesk font-normal px-10 py-2 border border-[#97baff73]  text-sm tracking-tighter bg-gradient-to-r from-[#88B3FD] via-[#5280D1] to-[#7CACFF] inline-flex text-transparent bg-clip-text"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        Nos offres
                    </motion.div>
                    <motion.h1
                        className="text-5xl font-grotesk font-bold text-white max-w-3xl text-center leading-tight"
                        initial={{ opacity: 0, translateY: -14 }}
                        animate={{ opacity: 1, translateY: 0 }}
                    >
                        Des prix en accord avec{" "}
                        <span className="bg-gradient-to-r from-[#88B3FD] to-[#043BCB] inline-block text-transparent bg-clip-text">
                            notre vision
                        </span>
                    </motion.h1>
                    <motion.div
                        className="flex gap-5 mt-2.5"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Button
                            title="Paiement Mensuel"
                            color={!isAnnual ? "selected" : "waiting"}
                            onClick={() => setIsAnnual(false)}
                        />
                        <Button
                            title="Paiement Annuel (-20%)"
                            color={isAnnual ? "selected" : "waiting"}
                            onClick={() => setIsAnnual(true)}
                        />
                    </motion.div>
                    <motion.div
                        className="flex gap-5 mt-2.5"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="flex gap-4">
                            <ButtonContry
                                locale={locale}
                                setLocale={setLocale}
                                title="fr"
                                slug="France"
                                icon={<Euro size={18} />}
                            />
                            <ButtonContry
                                locale={locale}
                                setLocale={setLocale}
                                title="us"
                                slug="USA"
                                icon={<DollarSign size={18} />}
                            />
                            <ButtonContry
                                locale={locale}
                                setLocale={setLocale}
                                title="uk"
                                slug="Angletterre"
                                icon={<PoundSterling size={18} />}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-start gap-6 mt-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {pricingOptions.map((option, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <Card
                                    key={index}
                                    bg={option.title}
                                    title={option.title}
                                    icon={option.icon}
                                    price={
                                        isAnnual
                                            ? option.price[locale].annual
                                            : option.price[locale].month
                                    }
                                    features={option.features}
                                    bestOffer={option.bestOffer}
                                    annual={isAnnual}
                                    monnaie={locale}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

export default App;
