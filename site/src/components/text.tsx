import { ReactNode } from "react";

interface TextProps {
  className?: string;
  children: ReactNode;
}

export const Heading1 = (props: TextProps) => (
  <h1
    className={`text-[40px] sm:text-[56px] lg:text-[80px] font-extrabold leading-none ${
      props.className || ""
    }`}
  >
    {props.children}
  </h1>
);

export const Heading2 = (props: TextProps) => (
  <h2 className="font-extrabold text-[32px] xl:text-[56px] mb-6 leading-tight">
    {props.children}
  </h2>
);

export const Paragraph = (props: TextProps) => (
  <p
    className={`text-[15px] lg:text-[18px] font-normal leading-normal ${props.className}`}
  >
    {props.children}
  </p>
);
