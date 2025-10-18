// "use client";

// import { motion } from "motion/react";

// interface ThreeDMarqueeProps {
//   images: string[];
//   className?: string;
// }

// export default function ThreeDMarquee({
//   images,
//   className = "",
// }: ThreeDMarqueeProps) {
//   const numColumns = 3;
//   const chunkSize = Math.ceil(images.length / numColumns);
//   const chunks = Array.from({ length: numColumns }, (_, colIndex) => {
//     const start = colIndex * chunkSize;
//     return images.slice(start, start + chunkSize);
//   });

//   return (
//     <div
//       className={
//         "mx-auto block h-[600px] overflow-hidden rounded-2xl relative " +
//         className
//       }
//     >
//       <div className="flex items-center justify-center w-full h-full">
//         <div className="w-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
//           <div
//             style={{ transform: "rotateX(55deg) rotateZ(-45deg)" }}
//             className="relative grid w-full h-full origin-top-left grid-cols-3 gap-8 transform-3d"
//           >
//             {chunks.map((subarray, colIndex) => (
//               <motion.div
//                 animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
//                 transition={{
//                   duration: colIndex % 2 === 0 ? 10 : 15,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//                 key={colIndex}
//                 className="flex flex-col items-start gap-8 relative"
//               >
//                 {/* Vertical Line for Depth */}
//                 <GridLineVertical offset="80px" />

//                 {subarray.map((image, imageIndex) => (
//                   <div className="relative" key={imageIndex + image}>
//                     {/* Horizontal Line for Depth */}
//                     <GridLineHorizontal offset="20px" />

//                     <motion.img
//                       whileHover={{ y: -10 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       src={image}
//                       alt={`Image ${imageIndex + 1}`}
//                       className="aspect-[970/700] rounded-lg object-cover shadow-lg"
//                     />
//                   </div>
//                 ))}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Optional horizontal grid line for 3D effect
// const GridLineHorizontal = ({ offset = "20px" }: { offset?: string }) => (
//   <div
//     style={{
//       position: "absolute",
//       top: offset,
//       left: 0,
//       width: "100%",
//       height: "1px",
//       background: "rgba(0,0,0,0.1)",
//       zIndex: 0,
//     }}
//   />
// );

// // Optional vertical grid line for 3D effect
// const GridLineVertical = ({ offset = "80px" }: { offset?: string }) => (
//   <div
//     style={{
//       position: "absolute",
//       left: offset,
//       top: 0,
//       width: "1px",
//       height: "100%",
//       background: "rgba(0,0,0,0.1)",
//       zIndex: 0,
//     }}
//   />
// );

"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });
  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.img
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                      width={970}
                      height={700}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
