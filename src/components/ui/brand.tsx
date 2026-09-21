import type { SVGProps } from "react";

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={props["aria-label"] ? undefined : true}
      {...props}
    >
      <path d="M8 14H24C31.732 14 38 20.268 38 28V32" />
      <path d="M8 32H54" />
      <path d="M8 50H24C31.732 50 38 43.732 38 36V32" />
      <circle cx="46" cy="32" r="4" />
    </svg>
  );
}

export function Brand() {
  return (
    <span className="brand brand-official" aria-label="ServAgency">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" aria-hidden="true" className="brand-official-image" />
    </span>
  );
}
