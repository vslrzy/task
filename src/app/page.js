"use client";

import Link from "next/link";

export default function Page() {
  // Menu links
  const menuLinks = [
    {
      title: "Proqram Təminatı",
      href: "services?id=1",
      children: [
        {
          title: "Proqram Təminatı",
          href: "services?id=1&tab=4",
        },
        {
          title: "Sürətli Axtarış Sistemi",
          href: "services?id=1&tab=1",
        },
        {
          title: "CRM və ERP",
          href: "services?id=1&tab=2",
        },
        {
          title: "Mobil tətbiqlər",
          href: "services?id=1&tab=3",
        },
      ],
    },
    {
      title: "Saytların yaradılması",
      href: "services?id=2",
    },
    {
      title: "Oyun Təminatı",
      href: "services?id=3",
      children: [
        {
          title: "Oyun Təminatı",
          href: "services?id=3&tab=1",
        },
        {
          title: "Stend və VR oyunları",
          href: "services?id=3&tab=2",
        },
        {
          title: "Veb oyunlar",
          href: "services?id=3&tab=3",
        },
        {
          title: "VR simulyatorlar",
          href: "services?id=3&tab=4",
        },
        {
          title: "Oyun monitoru kirayəsi",
          href: "services?id=3&tab=5",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="">
        {/* SVG */}
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.25 23.25H5.25M23.25 5.25V41.25M12.75 33.75L33.75 12.75M33.75 33.75L12.75 12.75"
              stroke="black"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        {/* SVG */}
        {/* Heading */}
        <div className="pt-10 flex justify-between items-center">
          <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="text-pageTitle font-neue">Xidmətlərimiz</h1>
            <span className="max-w-[750px] text-[14px] text-gray-600 leading-6">
              Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni
              avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ
              şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
            </span>
          </div>
          <Link
            href={"/"}
            className="group w-[136px] h-[136px] rounded-full bg-black flex justify-center items-center"
          >
            <img
              className="absolute rotate-330 transition duration-300 group-hover:rotate-360"
              src="./arrow.svg"
              alt="arrow"
            />
            <svg
              viewBox="0 0 500 500"
              width={100}
              height={200}
              className="w-full h-full animate-spin group-hover:animate-none scale-125"
            >
              <defs>
                <path
                  id="textcircle"
                  d="M250,400
                  a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                  transform="rotate(12,250,250)"
                />
              </defs>
              <g className="textcircle">
                <text>
                  <textPath
                    href="#textcircle"
                    textLength="942"
                    className="text-white fill-white text-[30px] p-0 m-0"
                  >
                    SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡
                  </textPath>
                </text>
              </g>
            </svg>
          </Link>
        </div>
        {/* Heading */}
        {/* Divider */}
        <div className="w-full bg-gray-600 h-[1px] my-10"></div>
        {/* Divider */}
        <div className="flex justify-between">
          <div className="sidebar top-0">
            <div className="menu font-neue">
              {menuLinks.map((item, index) => (
                <div key={index} className="bg-eee  rounded-xl">
                  <Link
                    href={item.href}
                    className="text-2xl px-[35px] py-[24px]"
                  >
                    <span className="menu-item">{item.title}</span>
                    <span>+</span>
                  </Link>

                  {item.children && (
                    <div className="sub-menu">
                      <div className="w-full h-[1px] bg-gray-500 my-2"></div>
                      {item.children.map((child, childIndex) => (
                        <Link href={child.href} key={childIndex}>
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[2000px]">Content</div>
        </div>
      </div>
    </div>
  );
}
