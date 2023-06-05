"use client";
import { FC, useState, useCallback, Fragment } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";

//types
import { IUserMenuProps as IProps } from "@/app/types/components/navbar/UserMenu";

// components
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

const UserMenu: FC<IProps> = ({
  currentUser
}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
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
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <Fragment>
                <MenuItem onClick={() => { }} label="My trips" />
                <MenuItem onClick={() => { }} label="My favorites" />
                <MenuItem onClick={() => { }} label="My reservations" />
                <MenuItem onClick={() => { }} label="My properties" />
                <MenuItem onClick={() => { }} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </Fragment>
            )
              :
              (
                <Fragment>
                  <MenuItem onClick={loginModal.onOpen} label="Login" />
                  <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
                </Fragment>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
