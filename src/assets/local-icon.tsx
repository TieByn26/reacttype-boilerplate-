import React from "react";


const icon = {

} satisfies Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
  height?: number | "auto";
  width?: number | "auto";
};

/**
 * Generator SVG Icon
 */
export const LocalIcon = ({
  iconName,
  height = 24,
  width = 24,
  ...props
}: ReactIconProps) => {
  const Comp = icon[iconName];
//   return Comp ? (
//     <Comp
//       {...(height !== "auto" && { height })}
//       {...(width !== "auto" && { width })}
//       {...props}
//     />
//   ) : null;
};