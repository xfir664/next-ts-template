import Link from "next/link";
import btnLink from "./btn-link.module.scss";

type MyBtnLinkType = Readonly<{
  children: React.ReactNode | string;
  UIType: "btn" | "link" | "navlink";
  btnType: "button" | "submit" | "reset";
  UIVariant?: "primary" | "secondary" | "base";
  href?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  className?: string;
  style?: Object;
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

  return (
    <>
      {UIType === "btn" && (
        <button
          onClick={onClick}
          type={btnType}
          className={`
            ${
              UIVariant
                ? btnLink["btn-link"] + " " + UIType + " " + UIVariant
                : btnLink["btn-link"]
            } 
            ${className ? className : ""} 
            ${isActive ? "active" : ""}
          `}
          disabled={isDisabled}
          style={style}
        >
          {children}
        </button>
      )}
      {UIType === "link" && (
        <a
          style={style}
          className={`
            ${
              UIVariant
                ? btnLink["btn-link"] + " " + UIType + " " + UIVariant
                : btnLink["btn-link"]
            } 
            ${className ? className : ""} 
            ${isActive ? "active" : ""}
            ${isDisabled ? "disabled" : ""}
          `}
          href={href ?? ""}
        >
          {children}
        </a>
      )}
      {UIType === "navlink" && (
        <Link
          style={style}
          className={`
            ${
              UIVariant
                ? btnLink["btn-link"] + " " + UIType + " " + UIVariant
                : btnLink["btn-link"]
            } 
            ${className ? className : ""} 
            ${isActive ? "active" : ""}
            ${isDisabled ? "disabled" : ""}
          `}
          href={href ?? ""}
        >
          {children}
        </Link>
      )}
    </>
  );
}
