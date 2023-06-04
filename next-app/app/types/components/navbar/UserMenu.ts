import { User } from "@prisma/client";

export interface IUserMenuProps {
  currentUser?: User | null;
}
