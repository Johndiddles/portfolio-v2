import React from "react";

const ArrowTopRight = ({ color }: { color: string }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.11554 0.94751V2.63172H8.34923L0.273438 10.7075L1.46081 11.8949L9.5366 3.81909V11.0528H11.2208V0.94751H1.11554Z"
        fill={color ? color : "#1E1E1E"}
      />
    </svg>
  );
};

export default ArrowTopRight;
