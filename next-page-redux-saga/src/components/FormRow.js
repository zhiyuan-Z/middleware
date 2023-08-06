import { twMerge } from "tailwind-merge";

export default function FormRow({ className, children, ...rest }) {
  return (
    <div className={twMerge("flex flex-row gap-6", className)} {...rest}>
      {children}
    </div>
  );
}
