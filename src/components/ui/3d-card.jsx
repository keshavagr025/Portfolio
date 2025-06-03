// src/components/ui/3d-card.jsx
import React from "react";

export function CardContainer({ children, className, ...props }) {
  return (
    <div
      className={className}
      style={{ perspective: "1000px" }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className, as = "div", ...props }) {
  const Component = as;
  return (
    <Component
      className={className}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease" }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardItem({ children, translateZ = 0, className, as = "div", ...props }) {
  const Component = as;
  return (
    <Component
      className={className}
      style={{ transform: `translateZ(${translateZ}px)` }}
      {...props}
    >
      {children}
    </Component>
  );
}
