"use client";

import type { User } from "next-auth";
import type { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import UserAvatar from "../UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='rounded-full'>
          <UserAvatar
            className='w-8 h-8 rounded-full'
            user={{
              name: user.name,
              image: user.image,
            }}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className='bg-white' align='end'>
          <div className='flex items-center justify-start gap-2 p-2'>
            <div className='flex flex-col space-y-1 leading-none'>
              {user.name && <p className='font-medium text-sm'>{user.name}</p>}
              {user.email && (
                <p className='w-[200px] truncate text-xs text-zinc-700'>
                  {user.email}
                </p>
              )}
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href='/'>Feed</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href='/r/create'>Create community</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href='/settings'>Settings</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className='cursor-pointer'
            onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/sign-in`,
              }).catch(console.error);
            }}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default UserAccountNav;
