import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Button({ children }: Props) {
  return (
    <button className="bg-red py-[25px] px-[35px] font-extrabold text-white">
      {children}
    </button>
  );
}
