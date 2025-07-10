import icon from "./icon.module.scss";
type MyIconType = Readonly<{
  id: string;
  width?: string;
  height?: string;
  iconVariant?: "primary" | "secondary" | "base";
  className?: string;
  style?: React.CSSProperties;
}>;

export default function MyIcon({ ...props }: MyIconType) {
  const { id, width, height, className, style, iconVariant } = props;

  const iconClass = [
    icon["icon"],
    iconVariant ? icon[iconVariant] : null,
    className || null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg width={width} height={height} className={iconClass} style={style}>
      <use href={`./sprite.svg#${id}`}></use>
    </svg>
  );
}
