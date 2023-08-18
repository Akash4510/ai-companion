'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="h-11 w-11">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};

export default UserAvatar;
