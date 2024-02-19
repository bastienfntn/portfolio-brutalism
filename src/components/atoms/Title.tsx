import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

function Title({ className, children, ...props}: Props) {
  return (
    <span className={`uppercase font-chivo ${className ?? ''}`} {...props}>{children}</span>
  )
}

export default Title;
