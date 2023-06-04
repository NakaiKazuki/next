import { User } from "@prisma/client";

export interface INavbarProps {
  currentUser?: User | null;
}
