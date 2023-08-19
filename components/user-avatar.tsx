'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

interface UserAvatarProps {
  size?: number;
}

const UserAvatar = ({ size }: UserAvatarProps) => {
  const { user } = useUser();

  return (
    <Avatar
      className={
        size ? `h-${size} w-${size}` : 'h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10'
      }
    >
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};

export default UserAvatar;
