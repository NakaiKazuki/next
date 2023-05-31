"use client";
import { FC, Fragment, useEffect, useState } from "react";
import { IClientOnlyProps as IProps } from "../types/components/ClientOnly";

const ClientOnly: FC<IProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <Fragment>{children}</Fragment>;
};

export default ClientOnly;
