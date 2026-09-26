import "./LinkButton.css";

type LinkButtonVariant = "nav" | "primary" | "light" | "text";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
  variant?: LinkButtonVariant;
};

export function LinkButton({
  href,
  children,
  variant = "nav",
  ...props
}: LinkButtonProps) {
  return (
    <a href={href} className={`link-button link-button--${variant}`} {...props}>
      {children}
    </a>
  );
}
