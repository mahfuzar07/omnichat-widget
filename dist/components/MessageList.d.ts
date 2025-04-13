import { Message } from './ChatWidget';
type MessageListProps = {
    messages: Message[];
    primaryColor: string;
};
declare const MessageList: ({ messages, primaryColor }: MessageListProps) => import("react/jsx-runtime").JSX.Element;
export default MessageList;
