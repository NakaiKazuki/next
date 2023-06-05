"use client";
import { FC } from "react";
import Image from "next/image";

// types
import { IAvatarProps as IProps } from "@/app/types/components/navbar/Avatar";
const Avatar: FC<IProps> = ({
  src
}) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={src ?? "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
