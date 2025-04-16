import { Message } from '../../lib/store';

type MessageListProps = {
    messages: Message[];
};
declare const MessageList: ({ messages }: MessageListProps) => import("react/jsx-runtime").JSX.Element;
export default MessageList;
