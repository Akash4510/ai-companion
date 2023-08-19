import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface BotAvatarProps {
  src: string;
  size?: number;
}

const BotAvatar = ({ src, size }: BotAvatarProps) => {
  return (
    <Avatar
      className={
        size ? `h-${size} w-${size}` : 'h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10'
      }
    >
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default BotAvatar;
