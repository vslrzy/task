"use client";

import Link from "next/link";

export default function Button({ button, onClick, ref }) {
  return (
    <Link
      ref={ref ? ref : null}
      href={button.href}
      className={`${button.background} ${button.color} ${
        button.style ? button.style : "rounded-lg px-5 1280:px-7 py-1.5 flex"
      }`}
      onClick={onClick}
    >
      {button.icon && (
        <span dangerouslySetInnerHTML={{ __html: button.icon }} />
      )}
      <span className="nobreak">{button.title && button.title}</span>
    </Link>
  );
}
