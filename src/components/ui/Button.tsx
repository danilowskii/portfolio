"use client";

import Link from "next/link";
import React from "react";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type LinkProps = CommonProps & {
  href: string;
  download?: boolean;
  rel?: string;
  target?: string;
  onClick?: never;
};

type ActionButtonProps = CommonProps & {
  href?: never;
  download?: never;
  rel?: never;
  target?: never;
  onClick: () => void;
};

type ButtonProps = LinkProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const base =
    "relative overflow-hidden cursor-pointer group px-6 py-3 bg-teal-600 rounded-md text-white font-bold text-sm text-center";

  if (props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        download={props.download}
        className={`${base} ${props.className ?? ""}`}
      >
        <span
          className="
            absolute
            w-2 h-2
            bg-teal-500
            rounded-full
            left-1/2 bottom-0
            -translate-x-1/2
            scale-0
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[40]
          "
        />
        <span className="relative z-10">{props.children}</span>
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className={`${base} ${props.className ?? ""}`}
    >
      <span
        className="
          absolute
          w-2 h-2
          bg-teal-500
          rounded-full
          left-1/2 bottom-0
          -translate-x-1/2
          scale-0
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[40]
        "
      />
      <span className="relative z-10">{props.children}</span>
    </button>
  );
}
