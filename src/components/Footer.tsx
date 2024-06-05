import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <header className="flex items-center justify-between py-4 max-md:flex-col-reverse max-md:gap-3">
      <div className="">2024 © Runic Swap</div>
      <div className="flex items-center gap-5">
        <Link className="transition-all hover:scale-125 active:scale-95" to="https://twitter.com/RuneFinance_io" target="_blank">
          <img src="/assets/images/socials/twitter.svg" alt="twitter" />
        </Link>
        <Link className="transition-all hover:scale-125 active:scale-95" to="https://medium.com/@rune_finance" target="_blank">
          <img src="/assets/images/socials/medium.svg" alt="medium" />
        </Link>
        <Link className="transition-all hover:scale-125 active:scale-95" to="#" target="_blank">
          <img src="/assets/images/socials/discord.svg" alt="discord" />
        </Link>
        <Link className="transition-all hover:scale-125 active:scale-95" to="https://t.me/RuneFinance_Official" target="_blank">
          <img src="/assets/images/socials/telegram.svg" alt="telegram" />
        </Link>
        <Link className="transition-all hover:scale-125 active:scale-95" to="https://github.com/runefinance" target="_blank">
          <img src="/assets/images/socials/github.svg" alt="github" />
        </Link>
      </div>
    </header>
  );
}
