"use client";

import Link from "next/link";

export default function Dropdown({ data, setDropdown, ref }) {
  return (
    <div
      ref={ref}
      className="absolute right-0 top-10 flex flex-col gap-1 bg-white rounded-lg p-1 z-50 border border-gray-200"
    >
      {data.heading && (
        <div className="flex flex-col gap-1 mb-3">
          <span className="text-gray-500 font-semibold text-sm">
            {data.heading}
          </span>
          <span className="text-gray-400 text-xs">{data.subHeading}</span>
        </div>
      )}
      {data.menu && data.menu.length > 0
        ? data.menu.map((item, index) => (
            <Link
              href={item.link}
              className="flex gap-3 items-center justify-start py-[12px] px-[22px] rounded-sm hover:bg-gray-100"
              key={index}
              onClick={() => {
                setDropdown(false);
              }}
            >
              {item.icon && (
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />
              )}
              <span className="text-sm font-bold">{item.name}</span>
            </Link>
          ))
        : ""}
    </div>
  );
}
