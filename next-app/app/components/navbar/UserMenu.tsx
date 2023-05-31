"use client";
import { FC, useState, useCallback, Fragment } from "react";
import { AiOutlineMenu } from "react-icons/ai";

// components
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu: FC = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value: boolean): boolean => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row gap-3 items-center">
        <div
          onClick={() => console.log(this)}
          className="cursor-pointer font-semibold hidden hover:bg-neutral-100 md:block px-4 py-3 rounded-full text-sm transition"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Fragment>
              <MenuItem onClick={() => { }} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </Fragment>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
