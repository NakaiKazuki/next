"use client";
import { FC } from "react";
import { IMenuItemProps as IProps } from "@/app/types/components/navbar/MenuItem";
const MenuItem: FC<IProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
