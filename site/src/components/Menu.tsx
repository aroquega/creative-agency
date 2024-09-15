interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export function Menu({ isOpen, onClick }: Props) {
  return (
    <nav
      className={`md:hidden bg-black absolute bottom-0 left-1/4 text-white transition-transform duration-500 ${
        isOpen ? "translate-y-full" : "translate-y-0"
      } py-7`}
      onBlur={() => {
        console.log("mrd");
      }}
    >
      <ul className="text-[18px] text-center">
        <li className="px-7" onClick={onClick}>
          <button className="px-7 py-3">About</button>
        </li>
        <li>
          <button className="px-7 py-3" onClick={onClick}>
            Service
          </button>
        </li>
        <li className="px-7">
          <button className="px-7 py-3" onClick={onClick}>
            Projects
          </button>
        </li>
        <li className="px-7">
          <button
            onClick={onClick}
            className="bg-red py-[25px] px-10 font-extrabold text-white"
          >
            Schedule a Call
          </button>
        </li>
      </ul>
    </nav>
  );
}
