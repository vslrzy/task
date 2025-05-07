"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import jsonData from "../../public/services.json";
import Button from "@/components/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Services() {
  // Menu links
  const menuLinks = [
    {
      title: "Proqram Təminatı",
      id: 1,
      children: [
        {
          title: "Proqram Təminatı",
          id: 1,
          tab: 4,
        },
        {
          title: "Sürətli Axtarış Sistemi",
          id: 1,
          tab: 1,
        },
        {
          title: "CRM və ERP",
          id: 1,
          tab: 2,
        },
        {
          title: "Mobil tətbiqlər",
          id: 1,
          tab: 3,
        },
      ],
    },
    {
      title: "Saytların yaradılması",
      id: 2,
    },
    {
      title: "Oyun Təminatı",
      id: 3,
      children: [
        {
          title: "Oyun Təminatı",
          id: 3,
          tab: 1,
        },
        {
          title: "Stend və VR oyunları",
          id: 3,
          tab: 2,
        },
        {
          title: "Veb oyunlar",
          id: 3,
          tab: 3,
        },
        {
          title: "VR simulyatorlar",
          id: 3,
          tab: 4,
        },
        {
          title: "Oyun monitoru kirayəsi",
          id: 3,
          tab: 5,
        },
      ],
    },
    {
      title: "Data analitikası",
      id: 4,
      children: [
        {
          title: "Data analitikası",
          id: 4,
          tab: 1,
        },
        {
          title: "Maliyyə təhlili",
          id: 4,
          tab: 2,
        },
        {
          title: "İnsan Resurslarının təhlili",
          id: 4,
          tab: 3,
        },
        {
          title: "Optimizasiya təhlili",
          id: 4,
          tab: 4,
        },
        {
          title: "Satınalma təhlili",
          id: 4,
          tab: 5,
        },
        {
          title: "Əsas Performans Göstəriciləri (KPI) təhlili",
          id: 4,
          tab: 6,
        },
        {
          title: "1C proqramı ilə inteqrasiya",
          id: 4,
          tab: 7,
        },
        {
          title: "SƏTƏM təhlili",
          id: 4,
          tab: 8,
        },
        {
          title: "Satış/KPI",
          id: 4,
          tab: 9,
        },
        {
          title: "Sosial Media",
          id: 4,
          tab: 10,
        },
        {
          title: "Restoranlar",
          id: 4,
          tab: 11,
        },
      ],
    },
  ];

  const toggleMiniAcc = (index) => {
    setMiniAccIndex(index === miniAccIndex ? null : index);
  };

  // Button icons
  const button_1_icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"fill="none" > <mask id="mask0_4787_12455" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" > <rect width="24" height="24" fill="#D9D9D9" ></rect> </mask> <g mask="url(#mask0_4787_12455)"> <path d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z" fill="#1C1B1F" ></path> </g> </svg>';

  const button_2_icon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" > <g mask="url(#mask0_5623_3779)"> <path d="M11.7 18C10.1 17.9167 8.75 17.3 7.65 16.15C6.55 15 6 13.6167 6 12C6 10.3333 6.58333 8.91667 7.75 7.75C8.91667 6.58333 10.3333 6 12 6C13.6167 6 15 6.55 16.15 7.65C17.3 8.75 17.9167 10.1 18 11.7L15.9 11.075C15.6833 10.175 15.2167 9.43767 14.5 8.863C13.7833 8.28767 12.95 8 12 8C10.9 8 9.95833 8.39167 9.175 9.175C8.39167 9.95833 8 10.9 8 12C8 12.95 8.28767 13.7833 8.863 14.5C9.43767 15.2167 10.175 15.6833 11.075 15.9L11.7 18ZM12.9 21.95C12.75 21.9833 12.6 22 12.45 22H12C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12V12.45C22 12.6 21.9833 12.75 21.95 12.9L20 12.3V12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20H12.3L12.9 21.95ZM20.525 22.5L16.25 18.225L15 22L12 12L22 15L18.225 16.25L22.5 20.525L20.525 22.5Z" fill="#000005" ></path> </g> </svg>';

  const accIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.64592 1.64592C4.69236 1.59935 4.74754 1.56241 4.80828 1.5372C4.86903 1.512 4.93415 1.49902 4.99992 1.49902C5.06568 1.49902 5.13081 1.512 5.19155 1.5372C5.2523 1.56241 5.30747 1.59935 5.35392 1.64592L11.3539 7.64592C11.4005 7.69236 11.4374 7.74754 11.4626 7.80828C11.4878 7.86903 11.5008 7.93415 11.5008 7.99992C11.5008 8.06568 11.4878 8.13081 11.4626 8.19155C11.4374 8.2523 11.4005 8.30747 11.3539 8.35392L5.35392 14.3539C5.26003 14.4478 5.13269 14.5005 4.99992 14.5005C4.86714 14.5005 4.7398 14.4478 4.64592 14.3539C4.55203 14.26 4.49929 14.1327 4.49929 13.9999C4.49929 13.8671 4.55203 13.7398 4.64592 13.6459L10.2929 7.99992L4.64592 2.35392C4.59935 2.30747 4.56241 2.2523 4.5372 2.19155C4.512 2.13081 4.49902 2.06568 4.49902 1.99992C4.49902 1.93415 4.512 1.86903 4.5372 1.80828C4.56241 1.74754 4.59935 1.69236 4.64592 1.64592Z" fill="#1F2937"></path></svg>';

  // Mini accordion
  const [miniAccIndex, setMiniAccIndex] = useState(null);

  // Params
  const params = useSearchParams();

  // id and tab
  const paramId = params.get("id");
  const paramTab = params.get("tab");

  // States for id and tab
  const [activeId, setActiveId] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    const firstParent = jsonData[0]?.parent_id;
    const tabsForId = jsonData.filter(
      (item) => item.parent_id == (paramId || firstParent)
    );
    const firstTab = tabsForId[0]?.tab;

    setActiveId(paramId || firstParent);
    setActiveTab(paramTab || firstTab);
    //
    const currentURL = `?${params}`;
    setCurrentPage(currentURL);
  }, [paramId, paramTab]);
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
            <h1 className="text-3xl 760:text-5xl 1000:text-pageTitle font-neue">
              Xidmətlərimiz
            </h1>
            <span className="max-w-[750px] text-[13px] 450:text-[14px] text-gray-600 leading-5 450:leading-6">
              Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni
              avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ
              şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
            </span>
          </div>
          <Link
            href={"/"}
            className="group w-[136px] h-[136px] rounded-full bg-black hidden 1000:flex justify-center items-center"
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
              className="w-full h-full animate-spinner group-hover:animate-stop scale-125"
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
        <div className="flex flex-col 1000:flex-row justify-between gap-3 760:gap-12">
          <div className="sidebar top-0">
            <div className="menu font-neue w-full">
              {menuLinks.map((item, index) => (
                <div
                  key={index}
                  className="bg-eee rounded-xl w-full my-3 border-1 border-transparent hover:border-yellow"
                >
                  <Link
                    href={`?id=${item.id}`}
                    className={`text-xl 1280:text-2xl px-[35px] py-[17px] 1000:py-[24px] w-full flex justify-between items-center ${
                      item.id == paramId ? "active" : ""
                    }`}
                    scroll={false}
                  >
                    <span className="menu-item">{item.title}</span>
                    {item.children && (
                      <span className="text-3xl">
                        {item.id == paramId ? "-" : "+"}
                      </span>
                    )}
                  </Link>

                  {item.children && item.id == paramId && (
                    <>
                      <div className="w-full h-[2px] bg-gray-300"></div>
                      <div className="sub-menu flex flex-col gap-3 py-6">
                        {item.children.map((child, childIndex) => (
                          <Link
                            href={`?id=${item.id}&tab=${child.tab}`}
                            key={childIndex}
                            className={`text-xl px-[35px] text-gray-500 ${
                              `?id=${item.id}&tab=${child.tab}` == currentPage
                                ? "active"
                                : ""
                            }`}
                            scroll={false}
                          >
                            <span>{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-2 1000:mt-7 flex flex-col">
            {jsonData
              .filter(
                (item) => item.parent_id == activeId && item.tab == activeTab
              )
              .map((data, index) => (
                <div key={index} className="font-neue flex flex-col gap-6">
                  {/* title */}
                  <div className="text-3xl 760:text-6xl leading-15">
                    {data.title}
                  </div>
                  {/* desc */}
                  {data.content_1 && (
                    <p className="text-sm 1280:text-md text-gray-600">
                      {data.content_1}
                    </p>
                  )}
                  {data.content_2 && (
                    <p className="text-sm 1280:text-md text-gray-600">
                      {data.content_2}
                    </p>
                  )}
                  {/* list */}
                  {data.list_1 && (
                    <div className="text-[13px] 760:text-[15px] text-gray-700">
                      <div>{data.list_1.title}</div>
                      <ul className="list-disc px-8 py-1">
                        {data.list_1.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {data.list_2 && (
                    <div className="text-[13px] 760:text-[15px] text-gray-700">
                      <div>{data.list_2.title}</div>
                      <ul className="list-disc px-8 py-1">
                        {data.list_2.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* buttons */}
                  {data.button_1 ? (
                    <div className="flex flex-col 760:flex-row gap-3 760:gap-7">
                      <Button
                        button={{
                          href: "/",
                          title: data.button_1,
                          icon: button_1_icon,
                          style:
                            "bg-yellow text-black text-sm rounded-lg flex justify-center items-center gap-3 px-6 760:px-10 py-2 760:py-3 font-medium max-w-[min-content]",
                        }}
                      />
                      <Button
                        button={{
                          href: "/",
                          title: data.button_2,
                          icon: button_2_icon,
                          style:
                            "bg-ggg text-black text-sm rounded-lg flex justify-center items-center gap-3 px-6 760:px-10 py-2 760:py-3 font-medium max-w-[min-content]",
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {/* single image */}
                  {data.single_image && (
                    <Image
                      width={1232}
                      height={675}
                      src={data.single_image}
                      alt={"image"}
                      className="rounded-xl"
                    />
                  )}
                  {/* accordion */}
                  {data.accordion && (
                    <div>
                      {data.accordion.map((acc, index) => (
                        <div
                          key={index}
                          className="flex flex-col  border-b-1 border-gray-300 py-2 gap-3"
                          onClick={() => {
                            toggleMiniAcc(index);
                          }}
                        >
                          <span className="flex items-center gap-5 text-gray-700 font-medium cursor-pointer">
                            <span
                              dangerouslySetInnerHTML={{ __html: accIcon }}
                            />
                            {acc.title}
                          </span>
                          {miniAccIndex === index && (
                            <span className="pl-9 text-gray-500">
                              {acc.body}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* specifications */}
                  {data.specifications && (
                    <div className="flex flex-wrap gap-2 w-full">
                      {data.specifications.map((item, index) => (
                        <div
                          key={index}
                          className="bg-eee rounded-xl px-6 py-4 basis-1/1 450:basis-[calc(50%-10px)] last:basis-1/1 flex justify-between items-center w-full"
                        >
                          <span className="text-xs 760:text-md text-gray-600">
                            {item.title}
                          </span>
                          <span className="text-sm 760:text-lg text-dewi text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* video */}
                  {data.video && (
                    <iframe
                      src={data.video}
                      width={"100%"}
                      height={"100%"}
                      className="w-full h-[210px] 450:h-[300px] 760:h-[350px] 1000:h-[500px] rounded-xl"
                    ></iframe>
                  )}
                  {/* sections */}
                  {data.sections && (
                    <div className="flex flex-wrap gap-4">
                      {data.sections.map((item, index) => (
                        <div
                          key={index}
                          className="bg-eee rounded-xl basis-1/1 760:basis-[calc(50%-10px)] flex flex-col justify-between overflow-hidden"
                        >
                          <div className=" p-6">
                            <p className="text-xl">{item.title}</p>
                            <p className="text-[13px] 1000:text-[15px] text-gray-600 pt-2">
                              {item.content}
                            </p>
                          </div>
                          <Image
                            width={646}
                            height={356}
                            alt="image"
                            src={item.image}
                            className="max-h-60 w-auto 1000:max-h-50 ml-auto bottom-0"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
