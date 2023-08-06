import { twMerge } from "tailwind-merge";

export default function Label({ children, className, ...rest }) {
  return (
    <label className={twMerge("font-medium", className)} {...rest}>
      {children}
    </label>
  );
}
