import type { SVGProps } from "react";
import Image from "next/image";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  ),
};

export function ChurchLogo({ width = 32, height = 32, className }: { width?: number, height?: number, className?: string }) {
  return (
    <Image
      src="https://image2url.com/images/1765115750666-aba22c97-4a84-4cbd-b23c-edf14bde329c.png"
      alt="RCCG Good Ground Area Logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
