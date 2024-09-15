interface Props {
  order: string;
  title: string;
  children: string;
}

export function BulletItem({ order, title, children }: Props) {
  return (
    <li className="relative">
      <p className="absolute top-0 left-0 font-extrabold text-[80px] opacity-25 leading-none">
        {order}
      </p>
      <div className="pt-11 pl-4">
        <h3 className="text-[15px] lg:text-[20px] font-extrabold mb-5 leading-none">
          {title}
        </h3>
        <p className="text-[15px] lg:text-[18px] font-normal">{children}</p>
      </div>
    </li>
  );
}
