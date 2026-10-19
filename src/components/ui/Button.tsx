import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import ClickSpark from "@/components/ui/ClickSpark";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "md" | "lg" | "nav";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  magnetic?: boolean;
  spark?: boolean;
}

export interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: () => void;
  external?: boolean;
}

export interface ActionButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
  external?: undefined;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size, children, className = "", magnetic = false, spark = false } = props;
  const variantClass = `btn--${variant}`;
  const sizeClass = size ? `btn--${size}` : "";
  const combinedClassName = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  let rendered: ReactNode;

  if (props.href !== undefined) {
    const { href, onClick, external } = props;
    if (external) {
      rendered = (
        <a
          href={href}
          className={combinedClassName}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    } else {
      rendered = (
        <Link href={href} className={combinedClassName} onClick={onClick}>
          {children}
        </Link>
      );
    }
  } else {
    const { type = "button", onClick, disabled, ...rest } = props;
    rendered = (
      <button
        type={type}
        className={combinedClassName}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (spark) {
    rendered = <ClickSpark sparkColor="#00b050">{rendered}</ClickSpark>;
  }

  if (magnetic) {
    return <Magnetic strength={0.3}>{rendered}</Magnetic>;
  }

  return rendered;
}
