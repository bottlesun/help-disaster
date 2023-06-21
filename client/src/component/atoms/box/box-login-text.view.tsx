import React from "react";

type BoxLoginTextProps = {
  children: React.ReactNode;
  className?: string;
};
const BoxLoginTextView = ({ children, className }: BoxLoginTextProps) => {
  return <div className={className}>{children}</div>;
};
export default BoxLoginTextView;
