import { AvatarProps } from '@/components/ui-kit/Avatar';

export interface ChatItemProps extends AvatarProps {
  chatId: number;
  lastMessage?: string;
  lastMessageDate?: Date;
  unreadCount?: number | null;
}
