import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Button from "../components/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  type NavLinkProps = {
    isActive: boolean;
  };

  const getActiveLinkClass = ({ isActive }: NavLinkProps) => (isActive ? "text-yellow" : "hover:text-white");
  const getActiveLinkMobileClass = ({ isActive }: NavLinkProps) =>
    isActive
      ? "text-yellow group flex rounded-md items-center w-full px-2 py-2 text-sm"
      : "group flex rounded-md items-center w-full px-2 py-2 text-sm";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 flex items-center justify-between w-full px-5 py-5 md:py-8 md:px-12 transition-all ${
        isScrolled ? "backdrop-blur-xl !py-[10px] !md:py-4" : ""
      }`}
    >
      <Link to="/" className="flex items-center cursor-pointer select-none">
        <img src="/logo_light.svg" alt="logo" className="w-8 h-8 mr-2" />
        <div className="font-medium">Runic Swap</div>
      </Link>
      <nav className="items-center hidden gap-12 font-medium sm:flex">
        <NavLink to="/ecosystem" className={getActiveLinkClass}>
          Ecosystem
        </NavLink>
        <NavLink to="/community" className={getActiveLinkClass}>
          Community
        </NavLink>
        <NavLink to="/faq" className={getActiveLinkClass}>
          FAQ
        </NavLink>
        <NavLink to="/docs" className={getActiveLinkClass}>
          Docs
        </NavLink>
      </nav>

      <Menu as="div" className="relative sm:hidden">
        <Menu.Button className="p-2 rounded-md outline-none">
          <Bars3Icon className="w-6 h-6" />
        </Menu.Button>
        <Menu.Items className="absolute z-10 w-40 mt-2 -translate-x-1/2 border rounded-md shadow-md left-1/2 top-full border-border bg-semi-black backdrop-blur-lg">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <NavLink to="/ecosystem" className={getActiveLinkMobileClass}>
                Ecosystem
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/community" className={getActiveLinkMobileClass}>
                Community
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/faq" className={getActiveLinkMobileClass}>
                FAQ
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/docs" className={getActiveLinkMobileClass}>
                Docs
              </NavLink>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>

      <Link to="https://app.runicswap.io/" target="_blank">
        <Button>Enter App</Button>
      </Link>
    </header>
  );
}
