import { twMerge } from "tailwind-merge";

export default function InputGroup({
  className,
  horizontal = false,
  children,
  ...rest
}) {
  return (
    <div
      className={twMerge(
        `flex ${horizontal ? "flex-row" : "flex-col"} gap-1 w-full`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
