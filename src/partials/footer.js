"use client";

import Link from "next/link";
import { links } from "./header";
import Image from "next/image";

// Socials
const socials = [
  {
    href: "/",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.04121 1H16.4412C19.6412 1 22.2412 3.6 22.2412 6.8V15.2C22.2412 16.7383 21.6301 18.2135 20.5424 19.3012C19.4547 20.3889 17.9795 21 16.4412 21H8.04121C4.84121 21 2.24121 18.4 2.24121 15.2V6.8C2.24121 5.26174 2.85228 3.78649 3.93999 2.69878C5.0277 1.61107 6.50295 1 8.04121 1ZM7.84121 3C6.88643 3 5.97076 3.37928 5.29563 4.05442C4.6205 4.72955 4.24121 5.64522 4.24121 6.6V15.4C4.24121 17.39 5.85121 19 7.84121 19H16.6412C17.596 19 18.5117 18.6207 19.1868 17.9456C19.8619 17.2705 20.2412 16.3548 20.2412 15.4V6.6C20.2412 4.61 18.6312 3 16.6412 3H7.84121ZM17.4912 4.5C17.8227 4.5 18.1407 4.6317 18.3751 4.86612C18.6095 5.10054 18.7412 5.41848 18.7412 5.75C18.7412 6.08152 18.6095 6.39946 18.3751 6.63388C18.1407 6.8683 17.8227 7 17.4912 7C17.1597 7 16.8417 6.8683 16.6073 6.63388C16.3729 6.39946 16.2412 6.08152 16.2412 5.75C16.2412 5.41848 16.3729 5.10054 16.6073 4.86612C16.8417 4.6317 17.1597 4.5 17.4912 4.5ZM12.2412 6C13.5673 6 14.8391 6.52678 15.7767 7.46447C16.7144 8.40215 17.2412 9.67392 17.2412 11C17.2412 12.3261 16.7144 13.5979 15.7767 14.5355C14.8391 15.4732 13.5673 16 12.2412 16C10.9151 16 9.64336 15.4732 8.70568 14.5355C7.76799 13.5979 7.24121 12.3261 7.24121 11C7.24121 9.67392 7.76799 8.40215 8.70568 7.46447C9.64336 6.52678 10.9151 6 12.2412 6ZM12.2412 8C11.4456 8 10.6825 8.31607 10.1199 8.87868C9.55728 9.44129 9.24121 10.2043 9.24121 11C9.24121 11.7956 9.55728 12.5587 10.1199 13.1213C10.6825 13.6839 11.4456 14 12.2412 14C13.0369 14 13.7999 13.6839 14.3625 13.1213C14.9251 12.5587 15.2412 11.7956 15.2412 11C15.2412 10.2043 14.9251 9.44129 14.3625 8.87868C13.7999 8.31607 13.0369 8 12.2412 8Z" fill="white"></path></svg>',
  },
  {
    href: "/",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18066 3.00002C7.1804 3.53046 6.96943 4.03906 6.59417 4.41394C6.21891 4.78883 5.7101 4.99929 5.17966 4.99902C4.64923 4.99876 4.14063 4.78779 3.76574 4.41253C3.39086 4.03727 3.1804 3.52846 3.18066 2.99802C3.18093 2.46759 3.3919 1.95899 3.76716 1.5841C4.14242 1.20922 4.65123 0.998758 5.18166 0.999024C5.7121 0.999289 6.2207 1.21026 6.59559 1.58552C6.97047 1.96078 7.18093 2.46959 7.18066 3.00002ZM7.24066 6.48002H3.24066V19H7.24066V6.48002ZM13.5607 6.48002H9.58066V19H13.5207V12.43C13.5207 8.77002 18.2907 8.43002 18.2907 12.43V19H22.2407V11.07C22.2407 4.90002 15.1807 5.13002 13.5207 8.16002L13.5607 6.48002Z" fill="white"></path></svg>',
  },
  {
    href: "/",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8414 3.82C16.1578 3.03962 15.7811 2.03743 15.7814 1H12.6914V13.4C12.6675 14.071 12.3842 14.7066 11.9011 15.1729C11.418 15.6393 10.7728 15.8999 10.1014 15.9C8.68137 15.9 7.50137 14.74 7.50137 13.3C7.50137 11.58 9.16137 10.29 10.8714 10.82V7.66C7.42137 7.2 4.40137 9.88 4.40137 13.3C4.40137 16.63 7.16137 19 10.0914 19C13.2314 19 15.7814 16.45 15.7814 13.3V7.01C17.0344 7.90985 18.5387 8.39265 20.0814 8.39V5.3C20.0814 5.3 18.2014 5.39 16.8414 3.82Z" fill="white"></path></svg>',
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10 font-neue">
      <div className="max-w-1680 mx-auto px-[24px] pt-10 450:px-[32px] 760:px-[48px] 1000:px-[80px] 1000:pt-[52px]">
        <div className="flex flex-col 1000:flex-row w-full justify-between items-start 1000:items-end 1000:gap-0 gap-10">
          <div className="flex flex-col gap-10">
            <p className="text-3xl 1000:text-5xl leading-10 1000:leading-12">
              Bizimlə indi <br /> əlaqəyə keçin
            </p>
            <div className="flex flex-col 760:flex-row gap-5 font-dewi text-lg">
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <p>{link.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start 1000:items-end gap-7 font-dewi">
            <p>Bizi izləyin</p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  className="flex p-5 rounded-full border-1 border-white"
                >
                  <span dangerouslySetInnerHTML={{ __html: social.icon }} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between py-15 gap-10 1000:gap-0">
          <div className="flex flex-col gap-4 basis-1/1 450:basis-1/2 1280:basis-1/3">
            <p className="text-md 760:text-xl">Azərbaycan</p>
            <p className="text-zinc-400 text-xs 760:text-sm">
              Azure Business Center 8 Noyabr, 15 Bakı, Azərbaycan AZ1010
            </p>
          </div>
          <div className="flex flex-col gap-4 basis-1/1 450:basis-1/2 1280:basis-1/3">
            <p className="text-md 760:text-xl">Kanada</p>
            <p className="text-zinc-400 text-xs 760:text-sm">
              Edmonton, Alberta
            </p>
          </div>
          <div className="flex flex-col gap-4 basis-1/1 450:basis-1/2 1280:basis-1/3">
            <p className="text-md 760:text-xl">Gürcüstan</p>
            <p className="text-zinc-400 text-xs 760:text-sm">
              Tbilisi, Gürcüstan
            </p>
          </div>
        </div>

        <div className="border-t-1 border-white py-6 flex flex-col 760:flex-row justify-between items-start 760:items-center">
          <div className="flex items-center justify-start gap-5">
            <svg
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8787 1.15981C19.174 0.84401 19.6749 0.84401 19.9701 1.15981L24.2542 5.74167C24.4171 5.91584 24.6533 6.00181 24.89 5.97307L31.117 5.21694C31.5462 5.16482 31.9299 5.48677 31.9531 5.91849L32.2897 12.1822C32.3025 12.4203 32.4282 12.638 32.628 12.7681L37.8842 16.1915C38.2465 16.4275 38.3335 16.9207 38.0737 17.2663L34.3054 22.281C34.1622 22.4716 34.1185 22.7192 34.1879 22.9473L36.0139 28.9484C36.1397 29.362 35.8893 29.7958 35.4682 29.8936L29.3581 31.3128C29.1258 31.3668 28.9333 31.5283 28.8398 31.7477L26.3811 37.5185C26.2117 37.9162 25.741 38.0875 25.3556 37.8918L19.7627 35.0515C19.5501 34.9435 19.2987 34.9435 19.0861 35.0515L13.4933 37.8918C13.1078 38.0875 12.6372 37.9162 12.4677 37.5185L10.009 31.7477C9.91557 31.5283 9.72301 31.3668 9.49075 31.3128L3.38067 29.8936C2.95955 29.7958 2.70912 29.362 2.83497 28.9484L4.66092 22.9473C4.73033 22.7192 4.68668 22.4716 4.54343 22.281L0.775107 17.2663C0.515383 16.9207 0.602358 16.4275 0.96463 16.1915L6.22082 12.7681C6.42062 12.638 6.5463 12.4203 6.5591 12.1822L6.89576 5.91849C6.91896 5.48677 7.30265 5.16482 7.73183 5.21694L13.9588 5.97307C14.1955 6.00181 14.4317 5.91584 14.5946 5.74167L18.8787 1.15981Z"
                fill="#F7D000"
              ></path>
              <path
                d="M13.4478 20.0001L17.9303 24.4827L25.4012 15.5176"
                stroke="black"
                strokeWidth="1.49419"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p>Partner with</p>
            <Image
              src={
                "https://birainy.com/_next/static/media/microsoft.9f8da16c.svg"
              }
              width={101}
              height={26}
              alt="microsoft"
            />
          </div>

          <div className="font-dewi text-sm pt-5 1000:pt-0 1000:text-md flex justify-end flex-wrap justify-start 760:items-center gap-2 1000:gap-5">
            <a href="">+994 12 488 66 54 +994</a>
            <a href=""> +994 77 613 13 17 </a>
            <a href="">info@birainy.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
