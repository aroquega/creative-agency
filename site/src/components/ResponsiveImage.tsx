interface Props {
  className?: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export function ResponsiveImage({
  className = "",
  mobile,
  tablet,
  desktop,
}: Props) {
  return (
    <picture className={`w-full ${className}`}>
      <source srcSet={desktop} media="(min-width: 1280px)" />
      <source srcSet={tablet} media="(min-width: 640px)" />
      <img src={mobile} alt="image" className="w-full" />
    </picture>
  );
}
