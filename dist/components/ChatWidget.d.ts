export type Message = {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp?: Date;
};
type ChatWidgetProps = {
    initialMessages?: Message[];
    apiEndpoint?: string;
    widgetTitle?: string;
    primaryColor?: string;
    position?: 'bottom-right' | 'bottom-left';
    height?: string;
    width?: string;
};
declare const ChatWidget: ({ initialMessages, apiEndpoint, widgetTitle, primaryColor, position, height, width, }: ChatWidgetProps) => import("react/jsx-runtime").JSX.Element;
export default ChatWidget;
