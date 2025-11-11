// DNavLink.jsx
import { forwardRef } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { cn } from "../ui/utils";

export const DNavLink = forwardRef(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  }
);

DNavLink.displayName = "DNavLink";