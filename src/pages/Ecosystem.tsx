import { Link } from "react-router-dom";

const DappList = [
  {
    name: "Unisats",
    url: "https://unisat.io/",
    description: "Home for your bitcoin assets.",
    image: "/assets/images/dapp/unisats.png",
  },
  {
    name: "Xverse",
    url: "https://xverse.app/",
    description: "The Bitcoin Wallet for everyone.",
    image: "/assets/images/dapp/xverse.png",
  },
  {
    name: "Ordinals",
    url: "https://ordinals.com/",
    description: "Digital asset on the Bitcoin blockchain.",
    image: "/assets/images/dapp/ordinals.png",
  },
  {
    name: "Hyperlane",
    url: "https://www.hyperlane.xyz/",
    description: "A cross-blockchain interconnection service",
    image: "/assets/images/dapp/hyperlane.png",
  },
];

export default function Ecosystem() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mt-24 font-bold text-center text-page-title max-md:text-page-title-mobile max-md:mt-14">
        Explore the <span className="text-yellow">Rune Finance</span> Ecosystem
        <img
          className="absolute -top-[45px] left-[40px] max-md:scale-50"
          src="/assets/images/flight.png"
          alt="flight"
        />
      </div>
      <div className="mt-4 text-center max-md:text-normal-mobile">
        Swap, earn, stake, and more with hundreds of DeFi apps, integrations, and tools built on the Bitcoin
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 my-14 md:my-20 max-md:gap-5">
        {DappList.map((dapp, index) => (
          <Link
            key={index}
            to={dapp.url}
            target="_blank"
            className="flex-col items-center gap-2 p-5 transition-all border rounded-md bg-semi-black backdrop-blur-sm border-border active:scale-95 hover:border-border-hover hover:bg-semi-white hover:scale-105"
          >
            <img src={dapp.image} alt={dapp.name} className="w-20 h-20 rounded-md" />
            <div className="mt-2 text-xl font-bold text-white">{dapp.name}</div>
            <div className="text-sm text-primary">{dapp.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
