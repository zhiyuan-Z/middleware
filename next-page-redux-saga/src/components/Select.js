import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// forwardRef because react-hook-form {...register('')} includes a ref property
export default forwardRef(function Select(
  { className, children, ...rest },
  ref
) {
  return (
    <select
      className={twMerge("border rounded p-1 border-neutral-300", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </select>
  );
});
