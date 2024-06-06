import { Link } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import Logo3D from "../components/Logo3D";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
      <div className="flex items-center w-full gap-5 justify-evenly max-md:flex-col-reverse max-md:justify-center">
        <div className="my-10 md:my-20 max-md:text-center">
          <div className="relative pb-24">
            <div className="text-2xl font-bold text-white">What is RunicSwap?</div>
            <div className="mt-3 text-normal max-w-[702px]">
              runicswap is not just about individual features; it's the synergy between them that creates a robust
              environment for the flourishing of DeFi endeavors. Through a conscious effort to integrate launchpad
              services, swapping capabilities, farming incentives, and bonding stability, runicswap is poised to
              become a cornerstone in the DeFi community.
            </div>
            <div className="absolute w-16 h-px bg-primary opacity-30 -left-20 top-5 max-md:hidden"></div>
            <div className="absolute w-px h-full bg-primary opacity-30 -left-8 top-5 max-md:hidden"></div>
          </div>
          <div className="relative">
            <div className="text-2xl font-bold text-white">What we offer?</div>
            <div className="mt-3 text-normal max-w-[702px]">
              RunicSwap offers a streamlined platform for rune transactions, including minting, swap, farming,
              boding, and bridging. We support key features like DEX and bridges to facilitate trading and connectivity
              across blockchains. Compliance with Rune Standards ensures seamless integration within the ecosystem, our
              platform prioritizes efficient transaction indexing and robust security to protect your activities. With
              an intuitive interface and dedicated support, RunicSwap is committed to providing a secure and
              user-friendly experience for all your cryptocurrency needs.
            </div>
            <div className="absolute w-8 h-px bg-primary opacity-30 -left-12 top-5 max-md:hidden"></div>
          </div>
        </div>
        <Logo3D className="my-5 md:my-10" />
      </div>
      <Link to="https://runicswap.gitbook.io/whitepaper" target="_blank">
        <ActionButton className="mt-3 mb-16">Read More</ActionButton>
      </Link>
    </div>
  );
}
