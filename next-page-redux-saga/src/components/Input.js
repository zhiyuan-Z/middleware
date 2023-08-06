import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export default forwardRef(function Input(
  { className, children, ...rest },
  ref
) {
  return (
    <input
      className={twMerge("border rounded p-1 border-neutral-300", className)}
      ref={ref}
      {...rest}
    />
  );
});
