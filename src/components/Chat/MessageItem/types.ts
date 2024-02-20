export enum MessageStatus {
  SENDING = 'sending',
  SENDED = 'sended',
  ERROR = 'error'
}

export interface MessageItemProps {
  media?: string | string[];
  text?: string;
  error?: string;
  status: MessageStatus;
}
