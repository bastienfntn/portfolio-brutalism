import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = {
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

function Title({ className, children }: Props) {
  return (
    <span className={`uppercase font-chivo ${className ?? ''}`}>
      {children}
    </span>
  );
}

export default Title;
