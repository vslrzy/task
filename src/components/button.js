"use client";

import Link from "next/link";

export default function Button({ button, onClick, ref }) {
  return (
    <Link
      ref={ref ? ref : null}
      href={button.href}
      className={`${button.background} ${button.color} ${
        button.style ? button.style : "rounded-lg px-7 py-1.5"
      }`}
      onClick={onClick}
    >
      {button.icon && (
        <span dangerouslySetInnerHTML={{ __html: button.icon }} />
      )}
      <span>{button.title && button.title}</span>
    </Link>
  );
}
