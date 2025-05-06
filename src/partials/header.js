"use client";

import Button from "@/components/button";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import { lazy, useEffect, useRef, useState } from "react";

// Lazy load dropdown
const Dropdown = lazy(() => import("@/components/dropdown"));

//
// Links
export const links = [
  {
    href: "/",
    title: "Xidmətlərimiz",
  },
  {
    href: "/",
    title: "Layihələr",
  },
  {
    href: "/",
    title: "Analitika",
  },
  {
    href: "/",
    title: "Bloq",
  },
  {
    href: "/",
    title: "Biz kimik?",
  },
];

// Socials
const socials = [
  {
    href: "/",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.04121 1H16.4412C19.6412 1 22.2412 3.6 22.2412 6.8V15.2C22.2412 16.7383 21.6301 18.2135 20.5424 19.3012C19.4547 20.3889 17.9795 21 16.4412 21H8.04121C4.84121 21 2.24121 18.4 2.24121 15.2V6.8C2.24121 5.26174 2.85228 3.78649 3.93999 2.69878C5.0277 1.61107 6.50295 1 8.04121 1ZM7.84121 3C6.88643 3 5.97076 3.37928 5.29563 4.05442C4.6205 4.72955 4.24121 5.64522 4.24121 6.6V15.4C4.24121 17.39 5.85121 19 7.84121 19H16.6412C17.596 19 18.5117 18.6207 19.1868 17.9456C19.8619 17.2705 20.2412 16.3548 20.2412 15.4V6.6C20.2412 4.61 18.6312 3 16.6412 3H7.84121ZM17.4912 4.5C17.8227 4.5 18.1407 4.6317 18.3751 4.86612C18.6095 5.10054 18.7412 5.41848 18.7412 5.75C18.7412 6.08152 18.6095 6.39946 18.3751 6.63388C18.1407 6.8683 17.8227 7 17.4912 7C17.1597 7 16.8417 6.8683 16.6073 6.63388C16.3729 6.39946 16.2412 6.08152 16.2412 5.75C16.2412 5.41848 16.3729 5.10054 16.6073 4.86612C16.8417 4.6317 17.1597 4.5 17.4912 4.5ZM12.2412 6C13.5673 6 14.8391 6.52678 15.7767 7.46447C16.7144 8.40215 17.2412 9.67392 17.2412 11C17.2412 12.3261 16.7144 13.5979 15.7767 14.5355C14.8391 15.4732 13.5673 16 12.2412 16C10.9151 16 9.64336 15.4732 8.70568 14.5355C7.76799 13.5979 7.24121 12.3261 7.24121 11C7.24121 9.67392 7.76799 8.40215 8.70568 7.46447C9.64336 6.52678 10.9151 6 12.2412 6ZM12.2412 8C11.4456 8 10.6825 8.31607 10.1199 8.87868C9.55728 9.44129 9.24121 10.2043 9.24121 11C9.24121 11.7956 9.55728 12.5587 10.1199 13.1213C10.6825 13.6839 11.4456 14 12.2412 14C13.0369 14 13.7999 13.6839 14.3625 13.1213C14.9251 12.5587 15.2412 11.7956 15.2412 11C15.2412 10.2043 14.9251 9.44129 14.3625 8.87868C13.7999 8.31607 13.0369 8 12.2412 8Z" fill="black"></path></svg>',
  },
  {
    href: "/",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18066 3.00002C7.1804 3.53046 6.96943 4.03906 6.59417 4.41394C6.21891 4.78883 5.7101 4.99929 5.17966 4.99902C4.64923 4.99876 4.14063 4.78779 3.76574 4.41253C3.39086 4.03727 3.1804 3.52846 3.18066 2.99802C3.18093 2.46759 3.3919 1.95899 3.76716 1.5841C4.14242 1.20922 4.65123 0.998758 5.18166 0.999024C5.7121 0.999289 6.2207 1.21026 6.59559 1.58552C6.97047 1.96078 7.18093 2.46959 7.18066 3.00002ZM7.24066 6.48002H3.24066V19H7.24066V6.48002ZM13.5607 6.48002H9.58066V19H13.5207V12.43C13.5207 8.77002 18.2907 8.43002 18.2907 12.43V19H22.2407V11.07C22.2407 4.90002 15.1807 5.13002 13.5207 8.16002L13.5607 6.48002Z" fill="black"></path></svg>',
  },
  {
    href: "/",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8414 3.82C16.1578 3.03962 15.7811 2.03743 15.7814 1H12.6914V13.4C12.6675 14.071 12.3842 14.7066 11.9011 15.1729C11.418 15.6393 10.7728 15.8999 10.1014 15.9C8.68137 15.9 7.50137 14.74 7.50137 13.3C7.50137 11.58 9.16137 10.29 10.8714 10.82V7.66C7.42137 7.2 4.40137 9.88 4.40137 13.3C4.40137 16.63 7.16137 19 10.0914 19C13.2314 19 15.7814 16.45 15.7814 13.3V7.01C17.0344 7.90985 18.5387 8.39265 20.0814 8.39V5.3C20.0814 5.3 18.2014 5.39 16.8414 3.82Z" fill="black"></path></svg>',
  },
];

export default function Header() {
  // Dropdown state
  const [dropdownState, setDropdownState] = useState(false);
  // Close dropdown
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Dropdown data
  const dropdownData = {
    menu: [
      {
        name: "Az",
        link: "/",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none"><g clip-path="url(#clip0_5716_38717)"><path d="M0.5 10.1111H28.5V17.8889H0.5V10.1111Z" fill="#E00034"></path><path d="M25.3889 3.88892H3.61111C2.78599 3.88892 1.99467 4.21669 1.41122 4.80014C0.827777 5.38359 0.5 6.17491 0.5 7.00003L0.5 10.1111H28.5V7.00003C28.5 6.17491 28.1722 5.38359 27.5888 4.80014C27.0053 4.21669 26.214 3.88892 25.3889 3.88892Z" fill="#0098C3"></path><path d="M14.3788 16.5924C13.9468 16.5924 13.5216 16.4845 13.142 16.2785C12.7623 16.0724 12.4401 15.7747 12.2048 15.4125C11.9694 15.0502 11.8283 14.6349 11.7943 14.2043C11.7602 13.7736 11.8344 13.3413 12.0099 12.9466C12.1855 12.5519 12.4569 12.2073 12.7994 11.9442C13.142 11.681 13.545 11.5077 13.9716 11.4399C14.3982 11.3721 14.835 11.4119 15.2423 11.5559C15.6496 11.6998 16.0145 11.9432 16.3038 12.2641C15.9317 11.7109 15.3917 11.2919 14.7635 11.0689C14.1352 10.8458 13.4519 10.8304 12.8143 11.025C12.1767 11.2196 11.6184 11.6139 11.2218 12.1497C10.8252 12.6856 10.6112 13.3347 10.6113 14.0013C10.6115 14.668 10.8258 15.317 11.2226 15.8527C11.6195 16.3883 12.1779 16.7824 12.8156 16.9767C13.4534 17.171 14.1366 17.1553 14.7648 16.9319C15.3929 16.7086 15.9327 16.2894 16.3046 15.7361C16.0617 16.006 15.7647 16.2218 15.4329 16.3693C15.1011 16.5168 14.7419 16.5929 14.3788 16.5924Z" fill="white"></path><path d="M18.9077 13.9985L17.9774 13.6687L18.4006 12.7774L17.5092 13.2013L17.1779 12.2719L16.8481 13.2021L16.8458 13.2005L15.956 12.779L16.3807 13.6703L15.4504 14.0016L16.3807 14.3314L15.9576 15.2227L16.845 14.8004L16.8489 14.7989L17.1802 15.7283L17.51 14.7981L18.4021 15.2212L17.9774 14.3299L18.9077 13.9985Z" fill="white"></path><path d="M3.61111 24.1111H25.3889C26.214 24.1111 27.0053 23.7834 27.5888 23.1999C28.1722 22.6165 28.5 21.8251 28.5 21V17.8889H0.5V21C0.5 21.8251 0.827777 22.6165 1.41122 23.1999C1.99467 23.7834 2.78599 24.1111 3.61111 24.1111Z" fill="#00AE65"></path></g><defs><clipPath id="clip0_5716_38717"><rect width="28" height="28" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>',
      },
      {
        name: "En",
        link: "/",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none"><g clip-path="url(#clip0_5716_38726)"><path d="M0.5 7.04592V10.1111H4.87733L0.5 7.04592ZM4.12756 24.1111H10.6111V19.5712L4.12756 24.1111ZM18.3889 19.572V24.1111H24.8717L18.3889 19.572ZM0.5 17.8889V20.9541L4.87889 17.8889H0.5ZM24.8732 3.88892H18.3889V8.4288L24.8732 3.88892ZM28.5 20.9549V17.8889H24.1203L28.5 20.9549ZM28.5 10.1111V7.04592L24.1219 10.1111H28.5ZM10.6111 3.88892H4.12756L10.6111 8.4288V3.88892Z" fill="#00247D"></path><path d="M20.0533 17.8889L27.6071 23.1786C27.976 22.7986 28.2411 22.3302 28.3771 21.8183L22.7654 17.8889H20.0533ZM10.6111 17.8889H8.94585L1.39285 23.1778C1.79807 23.5901 2.31763 23.8848 2.90018 24.0217L10.6111 18.6224V17.8889ZM18.3888 10.1112H20.0541L27.6071 4.82228C27.1949 4.40405 26.6725 4.11141 26.1005 3.97839L18.3888 9.37773V10.1112ZM8.94585 10.1112L1.39285 4.82228C1.02414 5.2026 0.758815 5.67087 0.62207 6.18262L6.23374 10.1112H8.94585Z" fill="#CF1B2B"></path><path d="M28.5 16.3334H16.8333V24.1111H18.3889V19.572L24.8717 24.1111H25.3889C25.8021 24.1112 26.2112 24.0287 26.5921 23.8686C26.973 23.7085 27.3181 23.4739 27.6071 23.1786L20.0533 17.8889H22.7654L28.3771 21.8182C28.4494 21.5561 28.5 21.2847 28.5 21V20.9549L24.1203 17.8889H28.5V16.3334ZM0.5 16.3334V17.8889H4.87889L0.5 20.9541V21C0.5 21.8486 0.841444 22.6162 1.39289 23.1778L8.94589 17.8889H10.6111V18.6224L2.90022 24.0209C3.12889 24.0754 3.36533 24.1111 3.61111 24.1111H4.12756L10.6111 19.5712V24.1111H12.1667V16.3334H0.5ZM28.5 7.00003C28.5005 6.1849 28.1797 5.40244 27.6071 4.82225L20.0541 10.1111H18.3889V9.37769L26.1006 3.97836C25.8676 3.92122 25.6288 3.8912 25.3889 3.88892H24.8732L18.3889 8.4288V3.88892H16.8333V11.6667H28.5V10.1111H24.1219L28.5 7.04592V7.00003ZM10.6111 3.88892V8.4288L4.12756 3.88892H3.61111C3.19782 3.88874 2.78866 3.97122 2.40772 4.1315C2.02677 4.29179 1.68173 4.52664 1.39289 4.82225L8.94589 10.1111H6.23378L0.622111 6.18258C0.54494 6.44836 0.503868 6.7233 0.5 7.00003L0.5 7.04592L4.87733 10.1111H0.5V11.6667H12.1667V3.88892H10.6111Z" fill="#EEEEEE"></path><path d="M16.8333 11.6667V3.88892H12.1667V11.6667H0.5V16.3334H12.1667V24.1111H16.8333V16.3334H28.5V11.6667H16.8333Z" fill="#CF1B2B"></path></g><defs><clipPath id="clip0_5716_38726"><rect width="28" height="28" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>',
      },
    ],
  };

  // Mobile menu state
  const [menu, toggleMenu] = useState(false);
  // Language icon
  const langIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><mask id="mask0_3061_11729" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_3061_11729)"><path d="M12 22C10.6333 22 9.34167 21.7373 8.125 21.212C6.90833 20.6873 5.846 19.9707 4.938 19.062C4.02933 18.154 3.31267 17.0917 2.788 15.875C2.26267 14.6583 2 13.3667 2 12C2 10.6167 2.26267 9.321 2.788 8.113C3.31267 6.90433 4.02933 5.846 4.938 4.938C5.846 4.02933 6.90833 3.31233 8.125 2.787C9.34167 2.26233 10.6333 2 12 2C13.3833 2 14.679 2.26233 15.887 2.787C17.0957 3.31233 18.154 4.02933 19.062 4.938C19.9707 5.846 20.6873 6.90433 21.212 8.113C21.7373 9.321 22 10.6167 22 12C22 13.3667 21.7373 14.6583 21.212 15.875C20.6873 17.0917 19.9707 18.154 19.062 19.062C18.154 19.9707 17.0957 20.6873 15.887 21.212C14.679 21.7373 13.3833 22 12 22ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.83767 18.429 8.613 17.837C8.38767 17.2457 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.18733 17.5583 6.912 18.175C7.63733 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3623 18.7917 17.087 18.175C17.8123 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6127 17.2457 15.388 17.837C15.1627 18.429 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.56233 13.3373 7.537 13.012C7.51233 12.6873 7.5 12.35 7.5 12C7.5 11.65 7.51233 11.3127 7.537 10.988C7.56233 10.6627 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.104 10.6627 4.062 10.988C4.02067 11.3127 4 11.65 4 12C4 12.35 4.02067 12.6873 4.062 13.012C4.104 13.3373 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4377 13.3373 14.463 13.012C14.4877 12.6873 14.5 12.35 14.5 12C14.5 11.65 14.4877 11.3127 14.463 10.988C14.4377 10.6627 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.56267 10.6627 9.538 10.988C9.51267 11.3127 9.5 11.65 9.5 12C9.5 12.35 9.51267 12.6873 9.538 13.012C9.56267 13.3373 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.896 13.3373 19.938 13.012C19.9793 12.6873 20 12.35 20 12C20 11.65 19.9793 11.3127 19.938 10.988C19.896 10.6627 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4373 10.6627 16.462 10.988C16.4873 11.3127 16.5 11.65 16.5 12C16.5 12.35 16.4873 12.6873 16.462 13.012C16.4373 13.3373 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8123 6.44167 17.087 5.825C16.3623 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1627 5.57067 15.388 6.162C15.6127 6.754 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.38767 6.754 8.613 6.162C8.83767 5.57067 9.1 5 9.4 4.45C8.46667 4.75 7.63733 5.20833 6.912 5.825C6.18733 6.44167 5.58333 7.16667 5.1 8Z" fill="black"></path></g></svg>';
  //
  return (
    <header className="border-b-1 border-gray-200 1000:border-0 max-w-1680 fixed top-0 left-0 right-0 z-[99] bg-white 1000:relative mx-auto flex items-center justify-between px-[24px] pt-0 450:px-[32px] 760:px-[48px] 1000:px-[80px] 1000:pt-[32px]">
      <Link href="/" className="1000:mr-10 w-[160px]">
        {/* Logo */}
        <Logo />
        {/* Logo */}
      </Link>
      {/* Menu */}
      <div className="1000:bg-eee w-full px-[28px] py-[14px] rounded-2xl flex justify-end 1000:justify-between items-center">
        {/* Links menu */}
        <div className="hidden 1000:flex justify-start items-center gap-4 1280:gap-7">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="leading-9 1280:text-base text-sm"
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* Links menu */}
        {/* Others */}
        <div className="flex justify-end items-center relative">
          {/* Socials */}
          <div className="relative hidden 1280:flex justify-end items-center gap-14 mr-8">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="relative before:w-[1px] before:h-[23px] before:absolute before:right-[-27px] before:t-0 before:bg-gray-500 last:before:hidden"
              >
                <span dangerouslySetInnerHTML={{ __html: social.icon }} />
              </Link>
            ))}
          </div>
          {/* Socials */}
          {/* Contact button */}
          <Button
            button={{
              title: "Bizimlə əlaqə",
              href: "/",
              background: "bg-yellow",
              color: "text-black",
              style: "rounded-lg px-5 1280:px-7 py-1.5 hidden 1000:flex ",
            }}
          />
          {/* Contact button */}
          {/* Language switcher */}
          <Button
            button={{
              background: "bg-eee 1000:bg-ggg",
              icon: langIcon,
              href: "/",
              style: "p-2.5 1000:p-1.5 rounded-lg ml-3",
            }}
            onClick={() => setDropdownState(!dropdownState)}
            ref={dropdownRef}
          />
          {/* Dropdown */}
          {dropdownState && (
            <Dropdown
              ref={dropdownRef}
              data={dropdownData}
              setDropdown={setDropdownState}
            />
          )}
          {/* Dropdown */}
          {/* Language switcher */}
          {/* Hamburger menu */}
          <div
            className="1000:hidden flex flex-col gap-1 bg-yellow p-4 rounded-lg ml-3 cursor-pointer"
            onClick={() => toggleMenu(!menu)}
          >
            <span className="w-[20px] h-[2px] bg-black flex"></span>
            <span className="w-[20px] h-[2px] bg-black flex"></span>
            <span className="w-[20px] h-[2px] bg-black flex"></span>
          </div>
          {/* Hamburger menu */}
          {/* Hamburger menu */}
          {menu && (
            <HamburgerMenu
              links={links}
              socials={socials}
              toggleMenu={toggleMenu}
            />
          )}
          {/* Hamburger menu */}
        </div>
        {/* Others */}
      </div>
      {/* Menu */}
    </header>
  );
}

const HamburgerMenu = ({ links, socials, toggleMenu }) => {
  return (
    <div className="1000:hidden fixed top-16 left-0 bg-white w-full h-[calc(100vh-50px)] z-[99] p-[48px] flex flex-col justify-between pb-10">
      <div className="flex flex-col gap-5 text-3xl font-neue font-medium">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="leading-9"
            onClick={() => toggleMenu(false)}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        {/* Socials */}
        <div>
          <span className="text-lg text-gray-600 font-medium font-neue">
            Bizi izləyin
          </span>
          <div className="flex justify-start items-center gap-2 mt-3">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="last:hidden border-1 border-gray-200 p-3 rounded-lg"
                onClick={() => toggleMenu(false)}
              >
                <span
                  className="opacity-[0.5]"
                  dangerouslySetInnerHTML={{ __html: social.icon }}
                />
              </Link>
            ))}
          </div>
        </div>
        {/* Socials */}
        <Image
          src={
            "https://birainy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facademy_banner.68160d68.png&w=1080&q=75"
          }
          width={1005}
          height={270}
          alt="banner"
          onClick={() => toggleMenu(false)}
        />
      </div>
    </div>
  );
};
