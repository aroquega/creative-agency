import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary-1" | "primary-2" | "secondary";
}

function getButtonClass(variant: Props["variant"]) {
  if (variant === "primary-1") {
    return "bg-red py-[25px] px-[35px] font-extrabold text-white";
  }

  if (variant === "secondary") {
    return "text-red font-extrabold text-[15px] xl:text-[18px] border-b-2 border-red p-[9px]";
  }

  return "";
}

export function Button({ children, variant = "primary-1" }: Props) {
  return <button className={getButtonClass(variant)}>{children}</button>;
}
