import { Link } from "react-router-dom";
import VerticalTextSlider from "../components/VerticalTextSlider";

const textItems = ["users", "developers", "designers", "educators"];
const socials = {
  medium: {
    url: "https://medium.com/@runicswap",
    icon: "/assets/images/socials/medium.svg",
    iconHover: "/assets/images/socials/medium-yellow.svg",
  },
  linktree: {
    url: "https://linktr.ee/runicswap",
    icon: "/assets/images/socials/linktree.svg",
    iconHover: "/assets/images/socials/linktree-yellow.svg",
  },
  discord: {
    url: "https://discord.gg/vNnemhd2km",
    icon: "/assets/images/socials/discord.svg",
    iconHover: "/assets/images/socials/discord-yellow.svg",
  },
  twitter: {
    url: "https://twitter.com/runicswap_io",
    icon: "/assets/images/socials/twitter.svg",
    iconHover: "/assets/images/socials/twitter-yellow.svg",
  },
  telegram: {
    url: "https://t.me/runicswap_Official",
    icon: "/assets/images/socials/telegram.svg",
    iconHover: "/assets/images/socials/telegram-yellow.svg",
  },
  github: {
    url: "https://github.com/runicswap",
    icon: "/assets/images/socials/github.svg",
    iconHover: "/assets/images/socials/github-yellow.svg",
  },
  whitepaper: {
    url: "https://runicswap.gitbook.io/whitepaper",
    icon: "/assets/images/socials/whitepaper.svg",
    iconHover: "/assets/images/socials/whitepaper-yellow.svg",
  },
};

export default function Ecosystem() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-160px)]">
      <div className="mt-24 font-bold text-center text-page-title max-md:text-page-title-mobile max-md:mt-14">
        Our community is an ecosystem of
        <VerticalTextSlider className="ml-2 text-yellow" texts={textItems} />
      </div>
      <div className="mt-4 text-center text-normal max-md:text-normal-mobile">
        Swap, earn, stake, and more with hundreds of DeFi apps, integrations, and tools built on the Bitcoin
      </div>
      <div className="grid gap-10 max-md:grid-cols-3 md:grid-flow-col my-14 md:my-28 max-md:gap-5">
        {Object.entries(socials).map(([key, value]) => (
          <Link
            key={key}
            to={value.url}
            target="_blank"
            className="text-center transition-all group text-primary hover:scale-125"
          >
            <div className="group-hover:border-yellow max-md:w-14 max-md:h-14 w-[82px] h-[82px] flex items-center justify-center rounded-full border border-border bg-semi-black transition-all m-auto">
              <img className="block w-8 h-8 max-md:w-6 max-md:h-6 group-hover:hidden" src={value.icon} alt={key} />
              <img className="hidden w-8 h-8 max-md:w-6 max-md:h-6 group-hover:block" src={value.iconHover} alt={key} />
            </div>
            <div className="mt-5 group-hover:text-yellow">{key[0].toUpperCase() + key.slice(1)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
