type ChatInputProps = {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
    primaryColor: string;
};
declare const ChatInput: ({ onSendMessage, isLoading, primaryColor }: ChatInputProps) => import("react/jsx-runtime").JSX.Element;
export default ChatInput;
