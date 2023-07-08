import { User } from "next-auth";
import type { FC } from "react";
import { Avatar, AvatarFallback } from "./ui/Avatar";

import Image from "next/image";
import { Icons } from "./Icons";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({
  user: { name, image },
  ...props
}) => {
  return (
    <>
      <Avatar {...props}>
        {image ? (
          <div className='relative aspect-square h-full w-full'>
            <Image
              fill
              src={image}
              alt='Profile picture'
              referrerPolicy='no-referrer'
            />
          </div>
        ) : (
          <AvatarFallback>
            <span className='sr-only'>{name}</span>
            <Icons.user className='w-4 h-4' />
          </AvatarFallback>
        )}
      </Avatar>
    </>
  );
};
export default UserAvatar;
