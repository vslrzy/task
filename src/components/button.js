"use client";

import Link from "next/link";

export default function Button({ button }) {
  return (
    <Link
      href={button.href}
      className={`${button.background} ${button.color} ${
        button.style ? button.style : "rounded-lg px-7 py-1.5"
      }`}
    >
      {button.icon && (
        <span dangerouslySetInnerHTML={{ __html: button.icon }} />
      )}
      <span>{button.title && button.title}</span>
    </Link>
  );
}
