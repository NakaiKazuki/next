"use client";
import { FC } from "react";

import { IContainerProps as IProps } from "../types/components/Container";
const Container: FC<IProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
