import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const documents = [
  {
    title: "Protocol Summary",
    description: "Introducing runicswap, a DeFi innovation on Bitcoin blending Runestone and Ordinals for liquidity.",
    url: "https://runicswap.gitbook.io/whitepaper/protocol-summary/what-is-rune-and-runestone",
  },
  {
    title: "How does it work?",
    description:
      "Streamline user interaction within the DeFi space, offering a range of services for efficient asset handling.",
      url: "https://runicswap.gitbook.io/whitepaper/how-runicswap-works/bridge-your-assets",
  },
  {
    title: "Developer Guide",
    description:
      "Technical aspects of building, deploying, and maintaining applications that interact with our services.",
      url: "https://runicswap.gitbook.io/whitepaper/developer-guide/api-doc",
  },
];

export default function Docs() {
  return (
    <div className="flex items-center justify-evenly min-h-[calc(100vh-160px)] max-lg:flex-col max-lg:gap-10 mb-10 max-md:mt-10">
      <div className="font-bold text-center text-page-title max-md:text-page-title-mobile">
        <img src="/assets/images/pen.svg" className="m-auto mb-5 w-18 h-18 max-md:w-10 max-md:h-10" alt="pen" />
        <div>The Runic Swap Protocol</div>
      </div>
      <div className="w-px h-[500px] bg-primary opacity-30 max-lg:w-[100px] max-lg:h-px mx-4" />
      <div className="flex flex-col items-center justify-center gap-12 max-lg:gap-5">
        {documents.map((document) => (
          <Link
            key={document.title}
            to={document.url}
            target="_blank"
            className="flex items-center justify-between px-5 py-4 transition-all border rounded-md cursor-pointer select-none border-border bg-semi-black backdrop-blur-sm active:scale-95 max-w-[500px] hover:border-border-hover hover:bg-semi-white hover:scale-105"
          >
            <div className="flex flex-col gap-[10px]">
              <div className="text-xl font-bold text-white">{document.title}</div>
              <div className="text-normal">{document.description}</div>
            </div>
            <ArrowRightIcon className="w-8 h-8" />
          </Link>
        ))}
      </div>
    </div>
  );
}
