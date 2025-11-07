// // // "use client";

// // // import * as React from "react";
// // // import * as ProgressPrimitive from "@radix-ui/react-progress";

// // // import { cn } from "./utils";

// // // function Progress({ className, value, ...props }) {
// // //   return (
// // //     <ProgressPrimitive.Root
// // //       data-slot="progress"
// // //       className={cn(
// // //         "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
// // //         className
// // //       )}
// // //       {...props}
// // //     >
// // //       <ProgressPrimitive.Indicator
// // //         data-slot="progress-indicator"
// // //         className="bg-primary h-full w-full flex-1 transition-all"
// // //         style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
// // //       />
// // //     </ProgressPrimitive.Root>
// // //   );
// // // }

// // // export { Progress };

// // // ui/progress.tsx
// // "use client";

// // import * as React from "react";
// // import * as ProgressPrimitive from "@radix-ui/react-progress";
// // import { cn } from "./utils";

// // type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
// //   value?: number;
// // };

// // export function Progress({ className, value = 0, ...props }: ProgressProps) {
// //   const clamped = Math.min(Math.max(value, 0), 100);

// //   return (
// //     <ProgressPrimitive.Root
// //       value={clamped}
// //       max={100}
// //       aria-valuenow={clamped}
// //       data-slot="progress"
// //       className={cn("bg-gray-200 relative h-3 w-full overflow-hidden rounded-full", className)}
// //       {...props}
// //     >
// //       <ProgressPrimitive.Indicator
// //         data-slot="progress-indicator"
// //         className="bg-black h-full transition-[width] duration-300"
// //         style={{ width: `${clamped}%` }}
// //       />
// //     </ProgressPrimitive.Root>
// //   );
// // }

// "use client";

// import * as React from "react";
// import * as ProgressPrimitive from "@radix-ui/react-progress";
// import { cn } from "./utils";

// type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
//   value?: number;
// };

// export function Progress({ className, value = 0, ...props }: ProgressProps) {
//   const clamped = Math.min(Math.max(value, 0), 100);

//   return (
//     <ProgressPrimitive.Root
//       value={clamped}
//       max={100}
//       aria-valuenow={clamped}
//       data-slot="progress"
//       className={cn("bg-gray-200 relative h-3 w-full overflow-hidden rounded-full", className)}
//       {...props}
//     >
//       <ProgressPrimitive.Indicator
//         data-slot="progress-indicator"
//         className="bg-black h-full transition-[width] duration-300"
//         style={{ width: `${clamped}%` }}
//       />
//     </ProgressPrimitive.Root>
//   );
// }



"use client";

import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "./utils";
// Optional: import PropTypes from 'prop-types';

export function Progress({ className, value = 0, ...props }) {
  const clamped = Math.min(Math.max(value, 0), 100);

  return (
    <ProgressPrimitive.Root
      value={clamped}
      max={100}
      aria-valuenow={clamped}
      data-slot="progress"
      className={cn("bg-gray-200 relative h-3 w-full overflow-hidden rounded-full", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-black h-full transition-[width] duration-300"
        style={{ width: `${clamped}%` }}
      />
    </ProgressPrimitive.Root>
  );
}

/* Optional runtime prop validation
import PropTypes from 'prop-types';
Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};
*/