type ChatInputProps = {
    onSendMessage: (message: string, attachments?: File[]) => void;
    isLoading: boolean;
};
declare const ChatInput: ({ onSendMessage, isLoading }: ChatInputProps) => import("react/jsx-runtime").JSX.Element;
export default ChatInput;
