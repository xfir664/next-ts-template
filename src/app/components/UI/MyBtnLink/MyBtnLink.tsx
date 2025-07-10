import Link from "next/link";
import btnLink from "./btn-link.module.scss";

type MyBtnLinkType = Readonly<{
  children: React.ReactNode | string;
  UIType: "btn" | "link" | "navlink";
  btnType?: "button" | "submit" | "reset";
  UIVariant?: "primary" | "secondary" | "base";
  href?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => any;
}>;

export default function MyBtnLink(props: MyBtnLinkType) {
  const {
    onClick,
    children,
    href,
    btnType,
    UIType,
    className,
    isDisabled,
    isActive,
    style,
    UIVariant,
  } = props;

  const baseClasses = [
    btnLink["btn-link"],
    btnLink[UIType],
    UIVariant ? btnLink[UIVariant] : null,
    className || null,
    isActive ? "active" : null,
    isDisabled ? "disabled" : null,
  ]
    .filter(Boolean)
    .join(" ");

  if (UIType === "btn") {
    return (
      <button
        onClick={onClick}
        type={btnType}
        className={baseClasses}
        disabled={isDisabled}
        style={style}
      >
        {children}
      </button>
    );
  }

  if (UIType === "link") {
    return (
      <a
        href={href ?? ""}
        className={baseClasses}
        style={style}
        aria-disabled={isDisabled}
        onClick={isDisabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </a>
    );
  }

  if (UIType === "navlink") {
    return (
      <Link
        href={href ?? ""}
        className={baseClasses}
        style={style}
        aria-disabled={isDisabled}
        onClick={isDisabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </Link>
    );
  }

  return null;
}
