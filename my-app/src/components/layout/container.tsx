import { Component, ElementType, ReactNode } from "react";

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1200px] mx-auto ${className}`}>{children}</div>
  );
};
