import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary-1" | "primary-2" | "secondary";
}

function getButtonClass(variant: Props["variant"]) {
  if (variant === "primary-1") {
    return "bg-red py-[25px] px-[35px] font-extrabold text-white hover:bg-red-light transition-colors";
  }

  if (variant === "primary-2") {
    return "bg-black hover:bg-black-light transition-colors pt-[23px] px-[45px] pb-[21px] font-extrabold leading-tight";
  }

  if (variant === "secondary") {
    return "text-red hover:text-red-light font-extrabold text-[15px] xl:text-[18px] border-b-2 border-red hover:border-red-light p-[9px] transition-colors";
  }

  return "";
}

export function Button({ children, variant = "primary-1" }: Props) {
  return <button className={getButtonClass(variant)}>{children}</button>;
}
